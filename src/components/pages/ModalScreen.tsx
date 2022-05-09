import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Platform, StyleSheet } from 'react-native'

import { EditScreenInfo } from 'partials/EditScreenInfo'

import { CustomText } from 'common/CustomText'
import { CustomView } from 'common/CustomView'

export const ModalScreen = () => (
  <CustomView style={styles.container}>
    <CustomText style={styles.title}>Modal</CustomText>
    <CustomView style={styles.separator} />
    <EditScreenInfo path='/screens/ModalScreen.tsx' />

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
