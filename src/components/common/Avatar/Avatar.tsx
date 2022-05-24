import { openURL } from 'expo-linking'
import React from 'react'
import { Pressable } from 'react-native'

import { getContributorGithubAvatar } from 'utils/data/getContributorGithubAvatar'
import { getContributorGithubUrl } from 'utils/data/getContributorGithubUrl'

import { AvatarContainer, AvatarImage } from './styled'
import { Props } from './types'

export const Avatar = ({ contributorName }: Props) => (
  <Pressable onPress={() => openURL(getContributorGithubUrl(contributorName))}>
    <AvatarContainer>
      <AvatarImage source={{ uri: getContributorGithubAvatar(contributorName) }} />
    </AvatarContainer>
  </Pressable>
)
