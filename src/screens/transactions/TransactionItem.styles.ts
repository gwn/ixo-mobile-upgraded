import { Fonts } from '../../rescources/Fonts';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    height: 70,
    borderRadius: 4,
    padding: 2,
    margin: 5,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#002D42',
  },
  container: {
    marginBottom: 10,
    height: 70,
    borderRadius: 4,
    display: 'flex',
    flexDirection: 'row',
    marginVertical: 15,
    justifyContent: 'space-between',
  },
  titleText: {
    color: 'white',
    fontFamily: Fonts.RobotoRegular,
    fontWeight: 'bold',
    paddingLeft: '10%',
    fontSize: 15,
  },
  soldOrBoughtText: {
    color: '#5A879D',
    textAlign: 'center',
    fontFamily: Fonts.RobotoRegular,
    fontSize: 11,
    marginLeft: '6%',
  },
  subAmount: {
    color: '#5A879D',
    fontFamily: Fonts.RobotoRegular,
    fontSize: 12,
    marginLeft: '42%',
  },
  monthContainer: {
    marginRight: 10,
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
});

export default styles;
