import { FontAwesome } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import * as React from 'react'
import { Pressable } from 'react-native'

import { ModalScreen } from 'pages/ModalScreen'
import { NotFoundScreen } from 'pages/NotFoundScreen'
import { TabOneScreen } from 'pages/TabOneScreen'
import { TabTwoScreen } from 'pages/TabTwoScreen'

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
      <Stack.Screen name='Modal' component={ModalScreen} />
    </Stack.Group>
  </Stack.Navigator>
)

const BottomTab = createBottomTabNavigator<RootTabParamList>()

const BottomTabNavigator = () => {
  const theme = useTheme()

  return (
    <BottomTab.Navigator
      initialRouteName='TabOne'
      screenOptions={{
        tabBarStyle: { backgroundColor: theme.colors.header },
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.text,
      }}
    >
      <BottomTab.Screen
        name='TabOne'
        component={TabOneScreen}
        options={({ navigation }: RootTabScreenProps<'TabOne'>) => ({
          headerStyle: {
            backgroundColor: theme.colors.header,
          },
          headerTintColor: theme.colors.text,
          title: 'Tab One',
          tabBarIcon: ({ color }) => <TabBarIcon name='code' color={color} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Modal')}
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
      <BottomTab.Screen
        name='TabTwo'
        component={TabTwoScreen}
        options={{
          headerStyle: {
            backgroundColor: theme.colors.header,
          },
          headerTintColor: theme.colors.text,
          title: 'Tab Two',
          tabBarIcon: ({ color }) => <TabBarIcon name='code' color={color} />,
        }}
      />
    </BottomTab.Navigator>
  )
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
const TabBarIcon = (props: {
  name: React.ComponentProps<typeof FontAwesome>['name']
  color: string
}) => <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />
