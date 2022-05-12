import axios from 'axios'

export const getMempoolCount = async () => {
  try {
    const response = await axios.get(
      'https://api.blockchain.info/charts/mempool-count?timespan=104days&format=json',
    )
    return response?.data?.values || []
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
    return response?.data?.values || []
  } catch (e) {
    console.log('Error fetching: ', e)
    return []
  }
}

export const getHashRateDistribution = async (): Promise<Record<string, number>> => {
  try {
    const response = await axios.get('https://api.blockchain.info/pools?timespan=1week')
    return response?.data || {}
  } catch (e) {
    console.log('Error fetching: ', e)
    return {}
  }
}

export const getMarketCap = async (): Promise<Record<string, any>[]> => {
  try {
    const response = await axios.get(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false',
    )
    return response?.data || []
  } catch (e) {
    console.log('Error fetching: ', e)
    return []
  }
}
