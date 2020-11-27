import { StyleSheet } from 'react-native';
import { Fonts } from '../../rescources/Fonts';

const styles = StyleSheet.create({
  container: {
    paddingTop: 65,
    flex: 1,
    backgroundColor: '#002334',
  },
  viewContainer: {
    flex: 1,
    backgroundColor: '#002334',
    marginTop: '10%',
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: '8%',
  },
  image: {
    height: 200,
    width: 180,
  },
  successImage: {
    marginTop: 35,
    height: 128,
    width: 112,
    overlayColor: '#85AD5C',
    tintColor: '#85AD5C',
  },
  errorImage: {
    marginTop: 35,
    height: 128,
    width: 112,
    overlayColor: '#E2223B',
    tintColor: '#E2223B',
  },
  textContainer: {
    opacity: 1,
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: '12%',
    width: '67%',
  },
  transactionState: {
    fontFamily: Fonts.RobotoRegular,
    fontStyle: 'normal',
    fontSize: 12,
    color: '#5A879D',
  },
  transactionStatus: {
    textAlign: 'center',
    fontFamily: Fonts.RobotoCondensedRegular,
    fontStyle: 'normal',
    fontSize: 21,
    color: '#FFFFFF',
    marginTop: 8,
  },
  transactionDetailsButton: {
    alignSelf: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#39C3E6',
    borderRadius: 23,
    marginTop: '20%',
    width: 96,
    height: 40,
  },
  buttonImage: {
    alignSelf: 'center',
    color: '#39C3E6',
    height: 15,
    width: 22,
  },
});

export default styles;
