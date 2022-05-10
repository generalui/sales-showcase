import axios from 'axios'

export const getMempoolCount = async () => {
  try {
    const response = await axios.get(
      'https://api.blockchain.info/charts/mempool-count?timespan=4months&format=json',
    )
    return response?.data?.values
  } catch (e) {
    console.log('Error fetching: ', e)
    return []
  }
}
