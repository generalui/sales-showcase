import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'

import { CustomText } from 'common/CustomText'
import { CustomView } from 'common/CustomView'

import { RootStackScreenProps } from 'types/navigation'

export const NotFoundScreen = ({ navigation }: RootStackScreenProps<'NotFound'>) => (
  <CustomView style={styles.container}>
    <CustomText style={styles.title}>This screen doesn't exist.</CustomText>
    <TouchableOpacity onPress={() => navigation.replace('Root')} style={styles.link}>
      <CustomText style={styles.linkText}>Go to home screen!</CustomText>
    </TouchableOpacity>
  </CustomView>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
})
