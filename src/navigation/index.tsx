import { FontAwesome } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import * as React from 'react'
import { Pressable } from 'react-native'

import { ChartDetails } from 'pages/ChartDetails'
import { CryptoDataScreen } from 'pages/CryptoDataScreen'
import { NotFoundScreen } from 'pages/NotFoundScreen'

import { useTheme } from 'contexts/ThemeContext'

import { RootStackParamList, RootTabParamList, RootTabScreenProps } from 'types/navigation'

import LinkingConfiguration from './LinkingConfiguration'

export const Navigation = () => (
  <NavigationContainer linking={LinkingConfiguration}>
    <RootNavigator />
  </NavigationContainer>
)

const Stack = createNativeStackNavigator<RootStackParamList>()

const RootNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name='Root' component={BottomTabNavigator} options={{ headerShown: false }} />
    <Stack.Screen name='NotFound' component={NotFoundScreen} options={{ title: 'Oops!' }} />
    <Stack.Group screenOptions={{ presentation: 'modal' }}>
      <Stack.Screen name='Chart Details' component={ChartDetails} />
    </Stack.Group>
  </Stack.Navigator>
)

const BottomTab = createBottomTabNavigator<RootTabParamList>()

const BottomTabNavigator = () => {
  const theme = useTheme()

  return (
    <BottomTab.Navigator
      initialRouteName='CryptoData'
      screenOptions={{
        tabBarStyle: { backgroundColor: theme.colors.header },
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.text,
      }}
    >
      <BottomTab.Screen
        name='CryptoData'
        component={CryptoDataScreen}
        options={({ navigation }) => ({
          headerStyle: {
            backgroundColor: theme.colors.header,
          },
          headerTintColor: theme.colors.text,
          title: 'Bitcoin Explorer',
          tabBarIcon: ({ color }) => <TabBarIcon name='code' color={color} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Chart Details')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}
            >
              <FontAwesome
                name='info-circle'
                size={25}
                color={theme.colors.text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />
    </BottomTab.Navigator>
  )
}

const TabBarIcon = (props: {
  name: React.ComponentProps<typeof FontAwesome>['name']
  color: string
}) => <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />
