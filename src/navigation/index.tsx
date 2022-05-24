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

const RootNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name='Demo' component={DemoStackNavigator} options={{ headerShown: false }} />
    <Stack.Screen name='NotFound' component={NotFoundScreen} options={{ title: 'Oops!' }} />
    <Stack.Group screenOptions={{ presentation: 'modal' }}>
      <Stack.Screen name='Chart Details' component={ChartDetails} />
    </Stack.Group>
  </Stack.Navigator>
)

const Drawer = createDrawerNavigator<RootTabParamList>()

const DemoStackNavigator = () => {
  const theme = useTheme()

  return (
    <Drawer.Navigator
      initialRouteName='Bitcoin Explorer'
      screenOptions={{
        drawerActiveTintColor: theme.colors.primary,
        drawerInactiveTintColor: theme.colors.text,
        headerTintColor: theme.colors.text,
      }}
    >
      <Drawer.Screen
        name='Bitcoin Explorer'
        component={CryptoDataScreen}
        options={({ navigation }) => ({
          drawerIcon: ({ color }) => <FontAwesome name='bitcoin' size={24} color={color} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Chart Details')}
              style={({ pressed }) => ({
                paddingRight: 15,
                opacity: pressed ? 0.5 : 1,
              })}
            >
              <FontAwesome name='info-circle' size={25} />
            </Pressable>
          ),
        })}
      />
    </Drawer.Navigator>
  )
}
