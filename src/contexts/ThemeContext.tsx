import React, { useContext } from 'react'
import {
  ThemeProvider as StyledComponentsThemeProvider,
  ThemeContext,
} from 'styled-components/native'

import { baseTheme } from 'utils/themes/baseTheme'
import { Theme } from 'utils/themes/types'

interface Props {
  children: React.ReactNode
}

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}

const ThemeProvider = ({ children }: Props) => (
  <StyledComponentsThemeProvider theme={baseTheme}>{children}</StyledComponentsThemeProvider>
)

const useTheme = () => {
  const internalThemeContext = useContext(ThemeContext)
  if (internalThemeContext == null) {
    throw new Error('useTheme() called outside of a ThemeProvider?')
  }
  return internalThemeContext
}

export { ThemeProvider, useTheme }
