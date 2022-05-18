import React from 'react'

import { CustomText } from 'common/CustomText'

import { StyledAvatar } from './styled'
import { Props } from './types'

export const Avatar = ({ source }: Props) => <StyledAvatar source={{ uri: source }} />
