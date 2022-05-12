import React, { useEffect, useState } from 'react'
import { Dimensions, ScrollView, Text, View } from 'react-native'
import { ContributionGraph, LineChart, PieChart, ProgressChart } from 'react-native-chart-kit'
import { AbstractChartConfig } from 'react-native-chart-kit/dist/AbstractChart'

import {
  getHashRateDistribution,
  getMarketCap,
  getMarketPrice,
  getMempoolCount,
} from 'utils/api/get'
import { formatUnixTimestamp, getAvgMempoolCount } from 'utils/data/mempool'

const Y_AXIS_INCREMENT = 5000
const Y_AXIS_MIN_OFFSET = 0.8

const chartConfig: AbstractChartConfig = {
  backgroundColor: '#FAFAFA',
  backgroundGradientFrom: '#FAFAFA',
  backgroundGradientTo: '#FAFAFA',
  color: (opacity = 1) => `rgba(15, 155, 40, ${opacity})`,
  style: {
    borderRadius: 16,
  },
  decimalPlaces: 0,
  propsForDots: {
    r: '2',
  },
}

export const CryptoDataScreen = () => {
  const width = Dimensions.get('window').width
  const height = 220
  const labelStyle = {
    color: chartConfig?.color?.(1) || 'white',
    marginVertical: 10,
    textAlign: 'center',
    fontSize: 16,
  }
  const graphStyle = {
    marginVertical: 8,
    ...chartConfig.style,
  }

  const [marketPriceGraphLabels, setMarketPriceGraphLabels] = useState<string[]>([])
  const [marketPriceGraphData, setMarketPriceGraphData] = useState<number[]>([])
  const [contributionGraphData, setContributionGraphData] = useState<
    { date: string; count: number }[]
  >([])
  const [pieChartData, setPieChartData] = useState<Record<string, any>[]>([])
  const [progressChartData, setProgressChartData] = useState<{labels: string[], data: number[]}>({
    labels: [],
    data: [],
  })

  const getLabels = (
    marketPriceData: {
      x: number
      y: number
    }[],
  ) => {
    if (marketPriceData.length === 0) return []

    const numLabels = 6
    const numDataPoints = marketPriceData.length
    const spaceBetweenLabels = Math.floor(numDataPoints / numLabels)
    const labels = [marketPriceData[0]]

    while (labels.length < numLabels) {
      labels.push(marketPriceData[spaceBetweenLabels * labels.length])
    }

    return labels.map((label) => formatUnixTimestamp(label.x, 5))
  }

  useEffect(() => {
    const fetchData = async () => {
      const marketPriceData = await getMarketPrice()
      const simplifiedPriceData = marketPriceData.filter((value, index) => index % 5 === 0)
      setMarketPriceGraphLabels(getLabels(simplifiedPriceData))
      setMarketPriceGraphData(simplifiedPriceData.map((value) => value.y))
    }
    fetchData()
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      const mempoolCount = await getMempoolCount()
      const data = getAvgMempoolCount(mempoolCount)
      setContributionGraphData(data)
    }
    fetchData()
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      const hashrateDistribution = await getHashRateDistribution()
      const colors = ['#BFFFF0', '#F0FFC2', '#FFE4C0', '#FFBBBB', '#C1F4C5', '#65C18C', '#FF7BA9']
      const formattedHashrateData = Object.entries(hashrateDistribution).map(([key, value], i) => {
        return {
          name: key,
          blocksMined: value,
          color: colors[i],
          legendFontColor: '#405979',
        }
      })
      setPieChartData(formattedHashrateData)
    }
    fetchData()
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      const marketCapData = await getMarketCap()
      const coinEntries = Object.entries(marketCapData)
      const totalMarketCap: number = coinEntries.reduce((a, b) => {
        return a + b[1].market_cap
      }, 0)
      const formattedProgressChartData = coinEntries.slice(0, 3).reduce(
        (a: {labels: string[], data: number[]}, b) => {
          const coinData = b[1]
          a.labels.push(coinData.symbol.toUpperCase())
          a.data.push(coinData.market_cap / totalMarketCap)
          return a
        },
        { labels: [], data: [] },
      )
      setProgressChartData(formattedProgressChartData)
    }
    fetchData()
  }, [])

  return (
    <>
      <ScrollView
        key={Math.random()}
        style={{
          backgroundColor: chartConfig.backgroundColor,
          paddingTop: 25,
        }}
      >
        {marketPriceGraphData.length > 0 && (
          <>
            <Text style={labelStyle}>Market Price</Text>
            <LineChart
              bezier
              data={{
                labels: marketPriceGraphLabels,
                datasets: [
                  { data: marketPriceGraphData },
                  {
                    data: [
                      Math.round(
                        (Math.min(...marketPriceGraphData) * Y_AXIS_MIN_OFFSET) / Y_AXIS_INCREMENT,
                      ) * Y_AXIS_INCREMENT,
                    ],
                    withDots: false,
                  },
                  {
                    data: [
                      Math.round(Math.max(...marketPriceGraphData) / Y_AXIS_INCREMENT) *
                        Y_AXIS_INCREMENT,
                    ],
                    withDots: false,
                  },
                ],
              }}
              width={width}
              height={height}
              chartConfig={chartConfig}
              style={graphStyle}
              yAxisInterval={10}
              formatYLabel={(value) => `$${value}`}
            />
          </>
        )}
        {progressChartData.data.length > 0 && (
          <>
            <Text style={labelStyle}>Market Capitalization</Text>
            <ProgressChart
              data={progressChartData}
              width={width}
              height={220}
              strokeWidth={12}
              radius={32}
              chartConfig={chartConfig}
            />
          </>
        )}
        {contributionGraphData.length > 0 && (
          <>
            <Text style={labelStyle}>Mempool Transaction Count</Text>
            <ContributionGraph
              values={contributionGraphData}
              width={width}
              height={height}
              numDays={contributionGraphData.length}
              chartConfig={chartConfig}
              style={graphStyle}
              tooltipDataAttrs={() => ({})}
            />
          </>
        )}
        {pieChartData.length > 0 && (
          <>
            <Text style={labelStyle}>Hashrate Distribution by Pool</Text>
            <Text style={{ ...labelStyle, marginVertical: 0, fontSize: 12 }}>
              (Blocks mined last 7 days)
            </Text>
            <PieChart
              data={pieChartData}
              width={width}
              height={220}
              chartConfig={chartConfig}
              accessor='blocksMined'
              backgroundColor={'transparent'}
              paddingLeft={'15'}
              center={[10, 10]}
              absolute
            />
          </>
        )}
        {/* Extra space for easier scrolling */}
        <View style={{ height: 100 }} />
      </ScrollView>
    </>
  )
}
