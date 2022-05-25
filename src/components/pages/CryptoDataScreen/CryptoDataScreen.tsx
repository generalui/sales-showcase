import React from 'react'

import { CryptoData } from 'partials/CryptoData'
import { Project } from 'partials/Project'

export const CryptoDataScreen = () => (
  <Project
    createdAt={1652915213000}
    createdBy='kevin-grayson'
    demo={<CryptoData />}
    name='Bitcoin Explorer'
    details={{
      description:
        'This dashboard was created to explore the available libraries for React Native data visualization. We settled on React Native Chart Kit and utilized some easily-accessible APIs to provide the data.',
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
