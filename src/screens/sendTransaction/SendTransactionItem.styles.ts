import { StyleSheet } from 'react-native';
import { Fonts } from '../../rescources/Fonts';

const styles = StyleSheet.create({
  container: {
    opacity: 1,
    flexDirection: 'row',
    marginTop: 8,
  },
  title: {
    color: '#FFFFFF',
    fontFamily: Fonts.RobotoRegular,
    fontStyle: 'normal',
    fontSize: 15,
  },
  subtitle: {
    marginLeft: 8,
    color: '#5A879D',
    fontFamily: Fonts.RobotoRegular,
    fontStyle: 'normal',
    fontSize: 15,
  },
});
export default styles;
