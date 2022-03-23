import AppLoading from 'expo-app-loading'
import { useFonts } from 'expo-font'
import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'
import IndexDocument from './screens/AppNavigation'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import AppNavigation from './screens/AppNavigation'
import { setBackgroundColorAsync } from 'expo-navigation-bar'
import { osName } from 'expo-device'
import { useEffect, useState } from 'react'
import color from './styles/color'
import { transaction, statement, statementReturnType } from './utils/db'
import { SQLResultSet, SQLTransaction } from 'expo-sqlite'

export default function App() {
  // const [fontsLoaded] = useFonts({
  //   PlayfairDisplayVariable: require('./assets/fonts/PlayfairDisplay-Regular.ttf'),
  // })

  const generateAppTable = async (): Promise<void> => {
    const tx: SQLTransaction = await transaction()
    const response: SQLResultSet | void = await statement(
      tx,
      'CREATE TABLE IF NOT EXISTS writings (id integer primary key autoincrement, title text, content text, timestamp text',
    ).catch((err) => console.log(err))

    const tx2: SQLTransaction = await transaction()
    const insert = await statement(
      tx2,
      'INSERT INTO `notes` (id, value, date) values (?,?,?)',
      [null, 'How To fly', new Date().toDateString()],
    )

    console.log({ insert })

    const r: SQLResultSet | void = await statement(
      tx2,
      'SELECT * FROM `notes`',
    ).catch((err) => console.log(err))
    console.log(r)
  }

  useEffect(() => {
    if (osName === 'Android') setBackgroundColorAsync(color.dark)

    generateAppTable()
  }, [])

  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <StatusBar style="inverted" />
        <AppNavigation />
      </SafeAreaProvider>
    </NavigationContainer>
  )
}
