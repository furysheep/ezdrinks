import {StyleSheet} from 'react-native';

import {colors, metrics, fonts} from '../../styles';

const styles = StyleSheet.create({
  containerHeaderCategory: {

    paddingLeft: 65,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#FFF',
  },

  iconLogo: {
    width: 80,
    height: 80,
  },

  containerTextHeaderCategory: {
    marginLeft: 10,
  },

  textEasy: {
    fontWeight: '500',
    fontSize: fonts.force,
    fontFamily: fonts.semi_bold,
  },

  textDrinks: {
    fontSize: 20,
    fontWeight: '100',
    fontFamily: fonts.regular_text,
  },

  bodyCategory: {
    flex: 1,
    paddingTop: 5,
    flexWrap: 'wrap',
    flexDirection: 'row',
    paddingHorizontal: 30,
    justifyContent: 'space-between',
  },

  iconCategory: {
    width: 35,
    height: 35,
  },
});

export default styles;
