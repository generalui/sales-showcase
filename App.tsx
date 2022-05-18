import { StatusBar } from 'expo-status-bar'
import { Navigation } from 'navigation'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { ThemeProvider } from 'contexts/ThemeContext'

import { useCachedResources } from 'hooks/useCachedResources'

export default () => {
  const isLoadingComplete = useCachedResources()

  if (!isLoadingComplete) {
    return null
  } else {
    return (
      <ThemeProvider>
        <SafeAreaProvider>
          <Navigation />
          <StatusBar />
        </SafeAreaProvider>
      </ThemeProvider>
    )
  }
}
