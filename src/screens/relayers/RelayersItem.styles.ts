import { Fonts } from '../../rescources/Fonts';
import { Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    height: 54,
    borderRadius: 4,
    padding: 2,
    margin: 5,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#002D42',
    borderWidth: Platform.OS == 'android' ? 1 : 0.5,
    borderColor: '#03D0FB',
  },
  index: {
    fontFamily: Fonts.RobotoRegular,
    fontWeight: 'bold',
    paddingLeft: 5,
    color: '#5A879D',
    fontSize: 15,
  },
  container: {
    marginBottom: 10,
    height: 70,
    borderRadius: 4,
    display: 'flex',
    flexDirection: 'row',
    marginVertical: 15,
    justifyContent: 'space-evenly',
  },
  imageContainer: {
    alignContent: 'center',
  },
  image: {
    width: 20,
    height: 20,
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    color: 'white',
    fontFamily: Fonts.RobotoRegular,
    fontWeight: 'bold',
    paddingLeft: '10%',
    fontSize: 15,
  },
  titleContainer: {
    width: '68%',
    height: '30%',
  },
  monthContainer: {
    marginLeft: '9%',
    height: '30%',
  },
  percent: {
    color: '#5A879D',
    fontFamily: Fonts.RobotoRegular,
    fontSize: 12,
  },
});

export default styles;
