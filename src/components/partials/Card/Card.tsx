import React from 'react'

import { Avatar } from 'common/Avatar'
import { CustomText } from 'common/CustomText'

import { StyledCard } from './styled'
import { Props } from './types'

export const Card = ({ avatarUrl, children, footer, title }: Props) => (
  <StyledCard>
    <CustomText>{title}</CustomText>
    {children}
    <CustomText>{footer}</CustomText>
    {console.log(avatarUrl)}
    {avatarUrl && <Avatar source={avatarUrl} />}
  </StyledCard>
)
