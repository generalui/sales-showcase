import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'

import { CryptoData } from 'partials/CryptoData'
import { Page } from 'partials/Page'

export const CryptoDataScreen = () => (
  <Page>
    <ScrollView contentContainerStyle={styles.container}>
      <CryptoData />
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
