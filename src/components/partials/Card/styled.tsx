import styled from 'styled-components/native'

import { CustomView } from 'common/CustomView'

export const StyledCard = styled(CustomView)`
  background-color: ${({ theme }) => theme.colors.standoutBackground};
  border-radius: ${({ theme }) => theme.spacing.sm}px;
  padding: ${({ theme }) => theme.spacing.md}px;
  position: relative;
  width: 90%;
  margin-bottom: ${({ theme }) => theme.avatarSize / 2}px;
`

export const AvatarContainer = styled(CustomView)`
  position: absolute;
  bottom: ${({ theme }) => -theme.avatarSize / 5}px;
  right: ${({ theme }) => theme.avatarSize / 2}px;
`
export const Footer = styled(CustomView)`
  width: 80%;
  height: ${({ theme }) => theme.avatarSize}px;
  display: flex;
  justify-content: flex-end;
`
