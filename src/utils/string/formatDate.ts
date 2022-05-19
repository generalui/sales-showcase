import { formatDistance } from 'date-fns'

export const formatCreatedDate = (timestamp: number) =>
  formatDistance(timestamp, Date.now(), { addSuffix: true })
