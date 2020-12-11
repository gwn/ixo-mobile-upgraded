import { StyleSheet } from 'react-native';
import { Fonts } from '../../rescources/Fonts';

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
    backgroundColor: '#002334',
  },
  viewContainer: {
    paddingTop: 10,
    flex: 1,
    justifyContent: 'flex-start',
  },
  headerContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    width: 22,
    height: 22,
    flex: 0,
    marginLeft: 18,
  },
  button: {
    width: 22,
    height: 17,
  },
  accountContainer: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
  accountText: {
    fontSize: 9,
    fontFamily: Fonts.RobotoCondensedRegular,
    color: '#5A879D',
  },
  accountValueText: {
    fontSize: 12,
    fontFamily: Fonts.RobotoCondensedRegular,
    color: '#5A879D',
    marginBottom: 2,
  },
  moneyAmountContainer: {
    display: 'flex',
    alignSelf: 'center',
    flexDirection: 'row',
    marginTop: 5,
  },
  currency: {
    color: '#FFFFFF',
    fontSize: 20,
    marginTop: 2,
  },
  amountGeneral: {
    color: '#FFFFFF',
    fontSize: 46,
  },
  flatlistWrapper: {
    opacity: 1,
  },
  walletContainer: {
    padding: '0.5%',
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: '2%',
    marginTop: '2%',
  },
  categoryText: {
    fontFamily: Fonts.RobotoRegular,
    fontSize: 20,
    color: '#FFFFFF',
  },
});

export default styles;
