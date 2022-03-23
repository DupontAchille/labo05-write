import { StyleSheet, Dimensions } from 'react-native'
import color from './color'
export default StyleSheet.create({
  card: {
    padding: 24,
  },
  cardSmall: {
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 200, //Will be tested
    marginBottom: 16,
    width: (Dimensions.get('screen').width - 2 * 16 - 16) / 2,
    flex: 1,
  },
  cardAdd: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardDate: {
    fontSize: 12,
    color: color.darkgrey[100],
  },
  cardTitle: {
    fontSize: 16,
  },
  cardAmountOfpages: {
    fontSize: 12,
    color: color.darkgrey[100],
  },
})
