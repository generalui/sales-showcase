import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'

import { Card } from 'partials/Card'
import { Page } from 'partials/Page'

import { CustomText } from 'common/CustomText'

import { Props } from './types'

export const Project = ({ createdAt, createdBy, demo, details }: Props) => (
  <Page>
    <ScrollView contentContainerStyle={styles.container}>
      <Card contributorName={createdBy} createdAt={createdAt}>
        <CustomText>{details.description}</CustomText>
      </Card>
      {demo}
    </ScrollView>
  </Page>
)

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },
})
