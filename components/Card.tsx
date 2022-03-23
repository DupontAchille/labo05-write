import { Pressable, Text, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import Note from '../interfaces/Note'
import core from '../styles/core'
import card from '../styles/card'
import { useNavigation, ParamListBase } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

export default ({ note }: { note?: Note }) => {
  const { navigate } = useNavigation<StackNavigationProp<ParamListBase>>()
  if (!note) {
    return (
      <Pressable
        onPress={() => navigate('New')}
        style={[
          core.backgroundgrey500,
          core.rounded,
          card.cardAdd,
          card.card,
          card.cardSmall,
        ]}
      >
        <Ionicons name="add" size={36} />
      </Pressable>
    )
  } else {
    return (
      <View
        style={[core.backgroundLight, core.rounded, card.cardSmall, card.card]}
      >
        <Text style={card.cardDate}>{new Date().toLocaleString('nl-BE')}</Text>
        <Text style={card.cardTitle}>{'An ode to Javascript'}</Text>
        <Text style={card.cardAmountOfpages}>{2} pages</Text>
      </View>
    )
  }
}
