const formatUnixTimestamp = (timestamp: number): string => {
  try {
    return new Date(timestamp * 1000).toISOString().slice(0, 10)
  } catch (e) {
    console.log('Error formatting timestamp')
    return ''
  }
}

type MempoolCountRecord = {
  x: number
  y: number
}

export const getAvgMempoolCountForHeatMap = (mempoolCountData: MempoolCountRecord[] = []) => {
  const dateFormattedData = mempoolCountData.map((entry) => ({
    ...entry,
    x: formatUnixTimestamp(entry.x),
  }))

  const mempoolCountByDateDict: Record<string, number[]> = {}

  dateFormattedData.forEach((entry) => {
    const date = entry.x
    const count = entry.y
    if (!mempoolCountByDateDict[date]) {
      mempoolCountByDateDict[date] = [count]
    } else {
      mempoolCountByDateDict[date].push(count)
    }
  })

  const averaged = Object.entries(mempoolCountByDateDict).map(([key, value]) => {
    return { date: key, count: value.reduce((a, b) => a + b, 0) }
  })

  return averaged
}
