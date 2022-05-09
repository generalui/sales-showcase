import React from 'react'
import { View as DefaultView } from 'react-native'

import { Props } from './types'

export const CustomView = (props: Props) => <DefaultView {...props} />
