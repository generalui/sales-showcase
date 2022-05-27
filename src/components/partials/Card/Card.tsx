import React from 'react'

import { Avatar } from 'common/Avatar'
import { CustomText } from 'common/CustomText'

import { getContributor } from 'utils/data/contributors'
import { formatCreatedDate } from 'utils/string/formatDate'

import { AvatarContainer, Footer, StyledCard } from './styled'
import { Props } from './types'

export const Card = ({ contributorName, children, createdAt }: Props) => (
  <StyledCard>
    {children}
    <Footer>
      <CustomText>
        Created {formatCreatedDate(createdAt)} by {getContributor(contributorName).name}
      </CustomText>
    </Footer>
    <AvatarContainer>
      <Avatar contributorName={contributorName} />
    </AvatarContainer>
  </StyledCard>
)
