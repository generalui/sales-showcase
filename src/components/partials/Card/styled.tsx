import styled from 'styled-components/native'

import { CustomView } from 'common/CustomView'

export const StyledCard = styled(CustomView)`
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.spacing.sm}px;
  padding: ${({ theme }) => theme.spacing.md}px;
  height: 200px;
`
