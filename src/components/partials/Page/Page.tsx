import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { StyledPage } from './styled'
import { Props } from './types'

export const Page = (props: Props) => {
  const insets = useSafeAreaInsets()

  return <StyledPage {...props} bottomInset={insets.bottom} />
}
