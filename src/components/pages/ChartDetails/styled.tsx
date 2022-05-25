import { ScrollView } from 'react-native'
import styled from 'styled-components/native'

import { CustomText } from 'common/CustomText'
import { CustomView } from 'common/CustomView'

export const DetailsContainer = styled(CustomView)`
  background-color: ${({ theme }) => theme.colors.standoutBackground};
  border-radius: ${({ theme }) => theme.spacing.sm};
  padding: 20px;
  margin-bottom: 30px;
`

export const Container = styled(ScrollView).attrs({
  contentContainerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
    padding: 20,
  },
})``

export const Title = styled(CustomText)`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`

export const Separator = styled(CustomView)`
  margin-top: 10px;
  height: 1px;
  width: 80%;
`
