import React from 'react'

import { AvatarContainer, AvatarImage } from './styled'
import { Props } from './types'

export const Avatar = ({ source }: Props) => (
  <AvatarContainer>
    <AvatarImage source={{ uri: source }} />
  </AvatarContainer>
)
