import styled from 'styled-components/native'

import { CustomView } from 'common/CustomView'

interface Props {
  bottomInset: number
}

export const StyledPage = styled(CustomView)<Props>`
  background-color: ${({ theme }) => theme.colors.background};
  flex: 1;
  padding-bottom: ${({ bottomInset }) => bottomInset}px;
`
