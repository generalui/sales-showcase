import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'

import { Card } from 'partials/Card'
import { Page } from 'partials/Page'

import { CustomText } from 'common/CustomText'

import { getGithubAvatarFromUsername } from 'utils/data/getGithubAvatarFromUsername'

import { Props } from './types'

export const Project = ({ createdAt, createdBy, demo, details, name }: Props) => (
  <Page>
    <ScrollView contentContainerStyle={styles.container}>
      <Card
        avatarUrl={getGithubAvatarFromUsername(createdBy)}
        title={name}
        footer={`Created by ${createdBy} at ${createdAt}`}
      >
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
