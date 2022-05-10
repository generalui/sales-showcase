import React, { useEffect, useState } from 'react'
import { Dimensions, ScrollView, Text } from 'react-native'
import {
  BarChart,
  ContributionGraph,
  LineChart,
  PieChart,
  ProgressChart,
} from 'react-native-chart-kit'

import { getMempoolCount } from '../../api/get'
import { getAvgMempoolCountForHeatMap } from '../../data/utils'

const chartConfig = {
  backgroundColor: '#000000',
  backgroundGradientFrom: '#1E2923',
  backgroundGradientTo: '#08130D',
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  style: {
    borderRadius: 16,
  },
  decimalPlaces: 0,
}

export const CryptoDataScreen = () => {
  const width = Dimensions.get('window').width
  const height = 220
  const labelStyle = {
    color: chartConfig.color(),
    marginVertical: 10,
    textAlign: 'center',
    fontSize: 16,
  }
  const graphStyle = {
    marginVertical: 8,
    ...chartConfig.style,
  }

  const [contributionGraphData, setContributionGraphData] = useState<
    { date: string; count: number }[]
  >([])
  console.log('LineChart data: ', contributionGraphData)

  useEffect(() => {
    const fetchData = async () => {
      const mempoolCount = await getMempoolCount()
      const contributionGraphData = getAvgMempoolCountForHeatMap(mempoolCount)
      console.log({ contributionGraphData })
      setContributionGraphData(contributionGraphData)
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
        {/*<Text style={labelStyle}>Bezier Line Chart</Text>*/}
        {/*<LineChart*/}
        {/*  data={contributionGraphData}*/}
        {/*  width={width}*/}
        {/*  height={height}*/}
        {/*  chartConfig={chartConfig}*/}
        {/*  bezier*/}
        {/*  style={graphStyle}*/}
        {/*/>*/}
        {/*<Text style={labelStyle}>Progress Chart</Text>*/}
        {/*<ProgressChart*/}
        {/*  data={progressChartData}*/}
        {/*  width={width}*/}
        {/*  height={height}*/}
        {/*  chartConfig={chartConfig}*/}
        {/*  style={graphStyle}*/}
        {/*/>*/}
        {/*<Text style={labelStyle}>Bar Graph</Text>*/}
        {/*<BarChart*/}
        {/*  width={width}*/}
        {/*  height={height}*/}
        {/*  data={data}*/}
        {/*  chartConfig={chartConfig}*/}
        {/*  style={graphStyle}*/}
        {/*/>*/}
        {/*<Text style={labelStyle}>Pie Chart</Text>*/}
        {/*<PieChart*/}
        {/*  data={pieChartData}*/}
        {/*  height={height}*/}
        {/*  width={width}*/}
        {/*  chartConfig={chartConfig}*/}
        {/*  accessor="population"*/}
        {/*  style={graphStyle}*/}
        {/*/>*/}
        {/*<Text style={labelStyle}>Line Chart</Text>*/}
        {/*<LineChart*/}
        {/*  data={data}*/}
        {/*  width={width}*/}
        {/*  height={height}*/}
        {/*  chartConfig={chartConfig}*/}
        {/*  style={graphStyle}*/}
        {/*/>*/}
        <Text style={labelStyle}>Mempool Transaction Count</Text>
        <ContributionGraph
          values={contributionGraphData}
          width={width}
          height={height}
          endDate={new Date('2022-05-01')}
          numDays={105}
          chartConfig={chartConfig}
          style={graphStyle}
        />
      </ScrollView>
    </>
  )
}
