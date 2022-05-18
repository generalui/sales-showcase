import React from 'react'

type GithubUsername = 'grayson073' | 'jasepellerin' | 'wesvance'

export interface Props {
  createdBy: GithubUsername
  createdAt: string
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
