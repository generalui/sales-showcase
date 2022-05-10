export const formatUnixTimestamp = (timestamp: number, start = 0, end = 10): string => {
  try {
    return new Date(timestamp * 1000).toISOString().slice(start, end)
  } catch (e) {
    console.log('Error formatting timestamp')
    return ''
  }
}

type MempoolCountRecord = {
  x: number
  y: number
}

export const getAvgMempoolCount = (mempoolCountData: MempoolCountRecord[] = []) => {
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

  const averaged = Object.entries(mempoolCountByDateDict).map(([key, value]) => ({
    date: key,
    count: value.reduce((a, b) => a + b, 0),
  }))

  return averaged
}
