import { ContributorName } from 'utils/data/contributors'

export interface Props {
  contributorName: ContributorName
  children: React.ReactNode
  createdAt: number
}
