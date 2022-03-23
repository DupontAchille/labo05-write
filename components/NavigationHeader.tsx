import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityBase,
  View,
} from 'react-native'
import core from '../styles/core'

export default () => {
  return (
    <View style={[core.backgroundDark, header.container]}>
      <TouchableOpacity>
        <Text style={[core.textLight]}>Left action</Text>
      </TouchableOpacity>

      <Text style={[core.textLight]}>Nagiation Header</Text>

      <TouchableOpacity>
        <Text style={[core.textLight]}>Right Action</Text>
      </TouchableOpacity>
    </View>
  )
}

const header = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: 80,
    paddingHorizontal: 16,
    paddingBottom: 8,
  },
})
