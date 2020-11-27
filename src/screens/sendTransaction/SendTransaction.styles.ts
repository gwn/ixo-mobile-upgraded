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
  screenNameContainer: {
    marginLeft: '8%',
  },
  sendTransaction: {
    color: '#5A879D',
    fontFamily: Fonts.RobotoRegular,
    fontStyle: 'normal',
    fontSize: 12,
  },
  projectName: {
    color: '#FFFFFF',
    fontFamily: Fonts.RobotoCondensedRegular,
    fontStyle: 'normal',
    fontSize: 25,
  },
  rectangle: {
    marginTop: 12,
    width: '96%',
    height: 1,
    marginHorizontal: '2%',
  },
  specsContainer: {
    marginTop: 14,
    marginLeft: '9%',
    marginRight: '12%',
    flex: 1,
  },
  buttonsContainer: {
    flex: 1,
    marginBottom: 10,
    justifyContent: 'flex-end',
    marginHorizontal: '9%',
  },
  footerText: {
    color: '#FFFFFF',
    fontFamily: Fonts.RobotoRegular,
    fontStyle: 'normal',
    fontSize: 15,
    marginBottom: 15,
  },
  sign: {
    backgroundColor: '#00D2FF',
    width: '92%',
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '9%',
    borderRadius: 4,
  },
  signText: {
    color: '#FFFFFF',
    fontFamily: Fonts.RobotoRegular,
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontSize: 13,
  },
  reject: {
    borderColor: '#00D2FF',
    borderWidth: 2,
    width: '92%',
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '9%',
    borderRadius: 4,
  },
  rejectText: {
    color: '#00D2FF',
    fontFamily: Fonts.RobotoRegular,
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontSize: 13,
  },
});

export default styles;
