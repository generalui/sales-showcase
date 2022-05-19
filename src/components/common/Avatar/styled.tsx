import { Image } from 'react-native'
import styled from 'styled-components/native'

import { CustomView } from 'common/CustomView'

export const AvatarContainer = styled(CustomView)`
  border-radius: ${({ theme }) => theme.avatarSize}px;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.text};
  height: ${({ theme }) => theme.avatarSize}px;
  width: ${({ theme }) => theme.avatarSize}px;
`

export const AvatarImage = styled(Image)`
  border-radius: ${({ theme }) => theme.avatarSize}px;
  height: 100%;
  width: 100%;
`
