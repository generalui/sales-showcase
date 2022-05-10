import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Platform, StyleSheet } from 'react-native'

import { CustomText } from 'common/CustomText'
import { CustomView } from 'common/CustomView'

export const ChartDetails = () => (
  <CustomView style={styles.container}>
    <CustomView style={styles.separator} />
    <CustomView style={styles.container}>
      <CustomText style={styles.title}>Mempool Transaction Count</CustomText>
      <CustomText>
        In blockchain terminology, a mempool is a waiting area for the transactions that haven't
        been added to a block and are still unconfirmed. This is how a Blockchain node deals with
        transactions that have not yet been included in a block.
      </CustomText>
    </CustomView>

    {/* Use a light status bar on iOS to account for the black space above the modal */}
    <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
  </CustomView>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
})
