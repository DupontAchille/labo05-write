import { StyleSheet } from 'react-native'
import color from './color'

export default StyleSheet.create({
  backgroundDark: {
    backgroundColor: color.dark,
  },
  backgroundLight: {
    backgroundColor: color.light,
  },
  backgroundgrey100: {
    backgroundColor: color.darkgrey[100],
  },
  backgroundgrey500: {
    backgroundColor: color.darkgrey[500],
  },
  backgroundgrey900: {
    backgroundColor: color.darkgrey[900],
  },
  textDark: {
    color: color.dark,
  },
  textLight: {
    color: color.light,
  },
  container: {
    marginHorizontal: 16,
  },
  rounded: {
    borderRadius: 16,
  },
})
