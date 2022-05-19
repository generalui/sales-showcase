import React from 'react'

import { contributors } from 'utils/data/contributors'

export interface Props {
  createdBy: keyof typeof contributors
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
