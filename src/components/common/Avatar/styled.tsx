import { Image } from 'react-native'
import styled from 'styled-components/native'

export const StyledAvatar = styled(Image)`
  height: 50px;
  width: 50px;
  border-radius: 40px;
  border: 1px solid ${({ theme }) => theme.colors.text};
`
