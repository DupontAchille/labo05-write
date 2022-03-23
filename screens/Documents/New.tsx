import { View, Text, KeyboardAvoidingView } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import core from '../../styles/core'
import card from '../../styles/card'
import { useState } from 'react'
import Note from '../../interfaces/Note'

export default () => {
  const [note, setNote] = useState<Note>({
    title: 'Test',
    content: 'Hi There',
    author: 'Achille',
  })

  return (
    <KeyboardAvoidingView
      behavior="position"
      style={[core.backgroundLight, card.card]}
    >
      <TextInput
        placeholder="Title"
        value={note?.title}
        onChangeText={(TextInput: string) => {
          setNote((oldNote: Note) => {
            oldNote.title = TextInput
            return { ...oldNote }
          })
        }}
      />
      <Text>Author: {note?.author} </Text>
      <TextInput
        multiline={true}
        placeholder="Content of the note"
        value={note?.content}
        onChangeText={(textInput: string) => {
          setNote((oldNote: Note) => {
            oldNote.content = textInput
            return { ...oldNote }
          })
        }}
      />
    </KeyboardAvoidingView>
  )
}
