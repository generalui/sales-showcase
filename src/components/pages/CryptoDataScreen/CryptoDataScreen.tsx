import React, { useEffect, useState } from 'react'
import { Dimensions, ScrollView, TextProps } from 'react-native'
import { ContributionGraph, LineChart, PieChart, ProgressChart } from 'react-native-chart-kit'
import { AbstractChartConfig } from 'react-native-chart-kit/dist/AbstractChart'

import { Page } from 'partials/Page'

import { CustomText } from 'common/CustomText'

import { useTheme } from 'contexts/ThemeContext'

import {
  getHashRateDistribution,
  getMarketCap,
  getMarketPrice,
  getMempoolCount,
} from 'utils/api/get'
import { formatUnixTimestamp, getAvgMempoolCount } from 'utils/data/mempool'
import { hexToRgb } from 'utils/themes/hexToRgb'

const Y_AXIS_INCREMENT = 5000
const Y_AXIS_MIN_OFFSET = 0.8
const PROGRESS_CHART_COLORS = ['#F79319', '#4C00AF', '#009393']
const CHART_COLORS = ['#BFFFF0', '#F0FFC2', '#FFE4C0', '#FFBBBB', '#C1F4C5', '#65C18C', '#FF7BA9']

export const CryptoDataScreen = () => {
  const theme = useTheme()

  const primaryRgb = hexToRgb(theme.colors.primary)
  const textRgb = hexToRgb(theme.colors.text)

  const chartConfig: AbstractChartConfig = {
    backgroundColor: theme.colors.background,
    backgroundGradientFrom: theme.colors.background,
    backgroundGradientTo: theme.colors.background,
    color: (opacity = 1) =>
      `rgba(${
        primaryRgb ? `${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}` : '0, 0, 0'
      }, ${opacity})`,
    labelColor: (opacity) =>
      `rgba(${textRgb ? `${textRgb.r}, ${textRgb.g}, ${textRgb.b}` : '0, 0, 0'}, ${opacity})`,
    style: {
      borderRadius: 16,
      marginVertical: 8,
    },
    decimalPlaces: 0,
    propsForDots: {
      r: '2',
    },
  }

  const width = Dimensions.get('window').width - 20
  const height = 220
  const labelStyle: TextProps['style'] = {
    marginVertical: 10,
    textAlign: 'center',
    fontSize: 16,
  }

  const [marketPriceGraphLabels, setMarketPriceGraphLabels] = useState<string[]>([])
  const [marketPriceGraphData, setMarketPriceGraphData] = useState<number[]>([])
  const [contributionGraphData, setContributionGraphData] = useState<
    { date: string; count: number }[]
  >([])
  const [pieChartData, setPieChartData] = useState<Record<string, any>[]>([])
  const [progressChartData, setProgressChartData] = useState<{ labels: string[]; data: number[] }>({
    labels: [],
    data: [],
  })

  const getLineChartLabels = (
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
      setMarketPriceGraphLabels(getLineChartLabels(simplifiedPriceData))
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
      const formattedHashrateData = Object.entries(hashrateDistribution).map(([key, value], i) => ({
        name: key,
        blocksMined: value,
        color: CHART_COLORS[i],
        legendFontColor: theme.colors.text,
      }))
      setPieChartData(formattedHashrateData)
    }
    fetchData()
  }, [theme.colors.text])

  useEffect(() => {
    const fetchData = async () => {
      const marketCapData = await getMarketCap()
      const coinEntries = Object.entries(marketCapData)
      const totalMarketCap: number = coinEntries.reduce((a, b) => a + b[1].market_cap, 0)
      const formattedProgressChartData = coinEntries.slice(0, 3).reduce(
        (a: { labels: string[]; data: number[] }, b) => {
          const coinData = b[1]
          a.labels.push(coinData.symbol.toUpperCase())
          a.data.push(coinData.market_cap / totalMarketCap)
          return a
        },
        {
          labels: [],
          data: [],
        },
      )
      setProgressChartData(formattedProgressChartData)
    }
    fetchData()
  }, [])

  return (
    <Page>
      <ScrollView
        contentContainerStyle={{
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: chartConfig.backgroundColor,
          alignItems: 'center',
        }}
      >
        {marketPriceGraphData.length > 0 && (
          <>
            <CustomText style={labelStyle}>Market Price</CustomText>
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
              style={chartConfig.style}
              yAxisInterval={10}
              formatYLabel={(value) =>
                `${Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(
                  parseInt(value, 10),
                )}`.slice(0, -3)
              }
            />
          </>
        )}
        {progressChartData.data.length > 0 && (
          <>
            <CustomText style={labelStyle}>Market Capitalization</CustomText>
            <ProgressChart
              data={progressChartData}
              width={width}
              height={220}
              strokeWidth={12}
              radius={32}
              chartConfig={{
                ...chartConfig,
                color: (opacity, index) => {
                  const { r, g, b } = hexToRgb(PROGRESS_CHART_COLORS[index || 0]) || {
                    r: 0,
                    g: 0,
                    b: 0,
                  }
                  return `rgba(${r}, ${g}, ${b}, ${opacity})`
                },
              }}
            />
          </>
        )}
        {contributionGraphData.length > 0 && (
          <>
            <CustomText style={labelStyle}>Mempool Transaction Count</CustomText>
            <ContributionGraph
              values={contributionGraphData}
              width={width}
              height={height}
              numDays={contributionGraphData.length}
              squareSize={width / 20}
              chartConfig={chartConfig}
              style={chartConfig.style}
              tooltipDataAttrs={() => ({})}
            />
          </>
        )}
        {pieChartData.length > 0 && (
          <>
            <CustomText style={labelStyle}>Hashrate Distribution by Pool</CustomText>
            <CustomText
              style={{
                textAlign: 'center',
              }}
            >
              (Blocks mined last 7 days)
            </CustomText>
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
      </ScrollView>
    </Page>
  )
}
