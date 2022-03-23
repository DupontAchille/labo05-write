import { SQLResultSet, SQLTransaction } from 'expo-sqlite'
import { useEffect, useState } from 'react'
import { View } from 'react-native'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import Card from '../../components/Card'
import SearchBar from '../../components/SearchBar'
import Note from '../../interfaces/Note'
import core from '../../styles/core'
import { statement, transaction } from '../../utils/db'

export default () => {
  // const testNotes: Note[] = [
  //   {
  //     title: 'The flight of penguins',
  //     author: 'PJ',
  //     content: 'You stupid penguins cant fly',
  //   },
  //   {
  //     title: 'Ik kan nathan nie af',
  //     author: 'Fleur Becourt',
  //     content: 'baaaaah',
  //   },
  //   {
  //     title: 'Ik kan nathan nie af',
  //     author: 'Fleur Becourt',
  //     content: 'baaaaah',
  //   },
  //   {
  //     title: 'Ik kan nathan nie af',
  //     author: 'Fleur Becourt',
  //     content: 'baaaaah',
  //   },
  //   {
  //     title: 'Ik kan nathan nie af',
  //     author: 'Fleur Becourt',
  //     content: 'baaaaah',
  //   },
  // ]

  const [notes, setNotes] = useState<Note[]>([])

  const getNotes = async () => {
    const tx: SQLTransaction = await transaction()
    const result: SQLResultSet = await statement(tx, 'SELECT * FROM `writings`')
    setNotes(result.rows._array)
  }

  useEffect(() => {
    getNotes()
  }, [])

  const renderNote = ({ item }: { item: Note }) => {
    const n: Note = {
      id: item.id,
      title: item.title,
      author: 'ML',
      content: item.content,
      timestamp: item.timestamp,
    }
    return <Card note={n} key={item.id} />
  }

  return (
    <SafeAreaView style={core.container}>
      <SearchBar />
      <>
        <FlatList
          data={notes}
          renderItem={renderNote}
          numColumns={2}
          ListHeaderComponent={<Card />}
          ListHeaderComponentStyle={{ width: '50%' }}
          columnWrapperStyle={{ marginHorizontal: 8 }}
        />
      </>
    </SafeAreaView>
  )
}
