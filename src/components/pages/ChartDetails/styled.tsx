import { ScrollView, StyleProp, ViewStyle } from 'react-native'
import styled from 'styled-components/native'

import { CustomText } from 'common/CustomText'
import { CustomView } from 'common/CustomView'

export const DetailsContainer = styled(CustomView)`
  padding: 20px;
`

export const Container = styled(ScrollView).attrs({
  contentContainerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
    paddingTop: 20,
  },
})``

export const Title = styled(CustomText)`
  font-size: 20px;
  font-weight: bold;
`

export const Separator = styled(CustomView)`
  margin-vertical: 30px;
  height: 1px;
  width: 80%;
`
