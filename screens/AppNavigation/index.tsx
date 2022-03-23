import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import {
  BottomTabHeaderProps,
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs'
import Documents from '../Documents'
import Reader from '../Reader'
import Settings from '../Settings'
import Ionicons from '@expo/vector-icons/Ionicons'
import { RouteProp, ParamListBase } from '@react-navigation/native'
import color from '../../styles/color'
import { ComponentProps } from 'react'
import core from '../../styles/core'
import NavigationHeader from '../../components/NavigationHeader'

const Tab = createBottomTabNavigator()

const screenOptions = ({
  route,
}: {
  route: RouteProp<ParamListBase>
}): BottomTabNavigationOptions => ({
  tabBarIcon: ({
    focused,
    color,
    size,
  }: {
    focused: boolean
    color: string
    size: number
  }) => {
    let icon: ComponentProps<typeof Ionicons>['name'] = 'help'
    if (route.name === 'Documents') icon = 'ios-folder'
    //return <Ionicons name="ios-folder" size={size} color={color} />
    if (route.name === 'Reader') icon = 'ios-bookmarks'
    //return <Ionicons name="ios-bookmarks" size={size} color={color} />
    if (route.name === 'Settings') icon = 'md-settings'
    //return <Ionicons name="md-settings" size={size} color={color} />
    return <Ionicons name={icon} size={size} color={color} />
  },
  tabBarActiveTintColor: color.light,
  tabBarInactiveTintColor: color.darkgrey[500],

  tabBarStyle: {
    backgroundColor: color.dark,
    borderTopWidth: 0,
    paddingTop: 10,
    borderBottomColor: color.darkgrey[500],
  },
  headerStyle: {
    backgroundColor: color.dark,
  },
  headerTitleStyle: {
    color: color.light,
  },
  header: (props:BottomTabHeaderProps) => {
    return (
      <NavigationHeader />
    )
  }
})

export default () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="Documents" component={Documents} />
      <Tab.Screen name="Reader" component={Reader} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  )
}
