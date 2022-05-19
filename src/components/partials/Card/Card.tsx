import React from 'react'

import { Avatar } from 'common/Avatar'
import { CustomText } from 'common/CustomText'

import { formatCreatedDate } from 'utils/string/formatDate'

import { AvatarContainer, Footer, StyledCard } from './styled'
import { Props } from './types'

export const Card = ({ avatarUrl, children, createdAt, createdBy }: Props) => (
  <StyledCard>
    {children}
    <Footer>
      <CustomText>Created by {createdBy}</CustomText>
      <CustomText>{formatCreatedDate(createdAt)}</CustomText>
    </Footer>
    {avatarUrl && (
      <AvatarContainer>
        <Avatar source={avatarUrl} />
      </AvatarContainer>
    )}
  </StyledCard>
)
