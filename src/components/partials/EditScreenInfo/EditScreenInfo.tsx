import * as WebBrowser from 'expo-web-browser'
import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'

import { CustomText } from 'common/CustomText'
import { CustomView } from 'common/CustomView'

export const EditScreenInfo = ({ path }: { path: string }) => (
  <CustomView>
    <CustomView style={styles.getStartedContainer}>
      <CustomText style={styles.getStartedText}>Open up the code for this screen:</CustomText>

      <CustomView style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
        <CustomText>{path}</CustomText>
      </CustomView>

      <CustomText style={styles.getStartedText}>
        Change any of the text, save the file, and your app will automatically update.
      </CustomText>
    </CustomView>

    <CustomView style={styles.helpContainer}>
      <TouchableOpacity onPress={handleHelpPress} style={styles.helpLink}>
        <CustomText style={styles.helpLinkText}>
          Tap here if your app doesn't automatically update after making changes
        </CustomText>
      </TouchableOpacity>
    </CustomView>
  </CustomView>
)

const handleHelpPress = () => {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet',
  )
}

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: 'center',
  },
})
