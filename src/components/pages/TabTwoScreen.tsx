import React from 'react'
import { StyleSheet } from 'react-native'

import { EditScreenInfo } from 'partials/EditScreenInfo'

import { CustomText } from 'common/CustomText'
import { CustomView } from 'common/CustomView'

export const TabTwoScreen = () => (
  <CustomView style={styles.container}>
    <CustomText style={styles.title}>Tab Two</CustomText>
    <CustomView style={styles.separator} />
    <EditScreenInfo path='/screens/TabTwoScreen.tsx' />
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
