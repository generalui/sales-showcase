import React from 'react'

import { ContributorName } from 'utils/data/contributors'

export interface Props {
  createdBy: ContributorName
  createdAt: number
  demo: React.ReactNode
  details: {
    description: string
    technologies: string[]
    negatives: string[]
    positives: string[]
    links: string[]
  }
  name: string
}
