import axios from 'axios'

export const getMempoolCount = async () => {
  try {
    const response = await axios.get(
      'https://api.blockchain.info/charts/mempool-count?timespan=104days&format=json',
    )
    return response?.data?.values
  } catch (e) {
    console.log('Error fetching: ', e)
    return []
  }
}

export const getMarketPrice = async (): Promise<{ x: number; y: number }[]> => {
  try {
    const response = await axios.get(
      'https://api.blockchain.info/charts/market-price?timespan=9months&format=json',
    )
    return response?.data?.values
  } catch (e) {
    console.log('Error fetching: ', e)
    return []
  }
}

export const getHashRateDistribution = async (): Promise<Record<string, number>> => {
  try {
    const response = await axios.get('https://api.blockchain.info/pools?timespan=1week')
    return response?.data
  } catch (e) {
    console.log('Error fetching: ', e)
    return {}
  }
}
