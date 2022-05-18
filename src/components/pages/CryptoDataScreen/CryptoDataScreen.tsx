import React from 'react'

import { CryptoData } from 'partials/CryptoData'
import { Project } from 'partials/Project'

export const CryptoDataScreen = () => (
  <Project
    createdAt='1652915213'
    createdBy='grayson073'
    demo={<CryptoData />}
    name='Bitcoin Explorer'
    details={{
      description: 'A simple cryptocurrency tracker',
      technologies: ['React Native', 'Styled Components', 'TypeScript', 'React Native Chart Kit'],
      links: [
        'https://github.com/generalui/sales-showcase/tree/main/src/components/partials/CryptoData',
      ],
      negatives: [
        'Charting can be more difficult in React Native due to limited charting libraries',
      ],
      positives: ['React Native is simple to spin up and use'],
    }}
  />
)
