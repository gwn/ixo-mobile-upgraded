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
    paddingTop: '8%',
  },
  buttonContainer: {
    width: 20,
    height: 26,
    marginLeft: '4%',
    paddingTop: '4%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButton: {
    width: 9,
    height: 12,
    marginBottom: 2,
  },
  accountContainer: {
    opacity: 1,
    flexDirection: 'row',
    marginLeft: '32%',
  },
  placeholder: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },
  currencyName: {
    color: 'white',
    fontFamily: Fonts.RobotoRegular,
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 17,
  },
  imageSecondary: {
    width: 17,
    height: 17,
  },
  currencyText: {
    fontFamily: Fonts.RobotoRegular,
    fontWeight: 'normal',
    fontSize: 18,
    color: 'white',
  },
  moneyAmountContainer: {
    display: 'flex',
    alignSelf: 'center',
    flexDirection: 'row',
    marginTop: 15,
  },
  currency: {
    fontFamily: Fonts.RobotoRegular,
    fontWeight: 'normal',
    color: '#FFFFFF',
    fontSize: 20,
    marginTop: 2,
  },
  amountGeneral: {
    fontFamily: Fonts.RobotoRegular,
    fontWeight: 'normal',
    color: '#FFFFFF',
    fontSize: 46,
  },
  percentAmountContainer: {
    display: 'flex',
    alignSelf: 'center',
    flexDirection: 'row',
    marginTop: 12,
    marginLeft: '6%',
  },
  percentPositive: {
    color: '#85AD5C',
    fontFamily: Fonts.RobotoRegular,
    fontSize: 14,
  },
  percentNegative: {
    color: '#E2223B',
    fontFamily: Fonts.RobotoRegular,
    fontSize: 14,
  },
  arrow: {
    color: '#03D0FB',
    fontSize: 17,
    opacity: 0.5,
  },
  barChartContainer: {
    height: 180,
    width: '92%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
  rectangle: {
    width: '94%',
    height: 1,
    marginTop: '4%',
    marginLeft: '2%',
  },
  transactionsTextContainer: {
    marginTop: 10,
    height: 24,
  },
  transactionsText: {
    fontFamily: Fonts.RobotoCondensedRegular,
    fontSize: 20,
    color: 'white',
    fontStyle: 'normal',
    marginLeft: '4%',
  },
  transactionsContainer: {
    flex: 1,
    marginLeft: '1%',
    marginRight: '3%',
  },
  transactionsTitle: {
    fontFamily: Fonts.RobotoCondensedRegular,
    fontSize: 12,
    color: '#5A879D',
    fontStyle: 'normal',
    marginLeft: '4%',
    marginTop: 9,
    marginBottom: 3,
  },
  flatlistWrapper: {
    opacity: 1,
  },
  transactionsListContainer: {
    opacity: 1,
  },
});

export default styles;
