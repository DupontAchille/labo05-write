import { StyleSheet } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import color from '../styles/color'

export default () => {
  return (
    <TextInput
      style={styles.textSearch}
      placeholder={'Search'}
      placeholderTextColor={color.darkgrey[100]}
    />
  )
}

const styles = StyleSheet.create({
  textSearch: {
    backgroundColor: color.darkgrey[500],
    color: color.darkgrey[100],
    paddingVertical: 10,
    paddingHorizontal: 16,
    textAlign: 'center',
    marginVertical: 8,
    borderRadius: 10,
  },
})
