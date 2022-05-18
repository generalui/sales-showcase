import { FontAwesome } from '@expo/vector-icons'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import * as React from 'react'
import { Pressable } from 'react-native'

import { ChartDetails } from 'pages/ChartDetails'
import { CryptoDataScreen } from 'pages/CryptoDataScreen'
import { NotFoundScreen } from 'pages/NotFoundScreen'

import { useTheme } from 'contexts/ThemeContext'

import { RootStackParamList, RootTabParamList } from 'types/navigation'

import LinkingConfiguration from './LinkingConfiguration'

export const Navigation = () => (
  <NavigationContainer linking={LinkingConfiguration}>
    <RootNavigator />
  </NavigationContainer>
)

const Stack = createNativeStackNavigator<RootStackParamList>()

const RootNavigator = () => {
  const theme = useTheme()
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitle: '',
        headerStyle: {
          backgroundColor: theme.colors.header,
        },
        headerTintColor: theme.colors.textInverted,
      }}
    >
      <Stack.Screen name='Demo' component={DemoStackNavigator} options={{ headerShown: false }} />
      <Stack.Screen name='NotFound' component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name='Chart Details' component={ChartDetails} />
      </Stack.Group>
    </Stack.Navigator>
  )
}

const Drawer = createDrawerNavigator<RootTabParamList>()

const DemoStackNavigator = () => (
  <Drawer.Navigator initialRouteName='CryptoData'>
    <Drawer.Screen
      name='CryptoData'
      component={CryptoDataScreen}
      options={({ navigation }) => ({
        title: 'Bitcoin Explorer',
        headerRight: () => (
          <Pressable
            onPress={() => navigation.navigate('Chart Details')}
            style={({ pressed }) => ({
              opacity: pressed ? 0.5 : 1,
            })}
          >
            <FontAwesome name='info-circle' size={25} style={{ marginRight: 15 }} />
          </Pressable>
        ),
      })}
    />
  </Drawer.Navigator>
)
