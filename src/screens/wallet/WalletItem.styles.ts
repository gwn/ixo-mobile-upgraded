import { Fonts } from '../../rescources/Fonts';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    height: 70,
    flex: 1,
    borderRadius: 4,
    padding: 2,
    margin: 5,
    display: 'flex',
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
  percentPositive: {
    color: '#85AD5C',
    textAlign: 'center',
    fontFamily: Fonts.RobotoRegular,
    fontSize: 12,
    marginRight: '60%',
  },
  percentNegative: {
    color: '#E2223B',
    textAlign: 'center',
    fontFamily: Fonts.RobotoRegular,
    fontSize: 12,
    marginRight: '60%',
  },
  amountStyle: {
    color: 'white',
    fontFamily: Fonts.RobotoRegular,
    fontSize: 15,
    alignSelf: 'flex-end',
  },
  subAmount: {
    color: '#5A879D',
    fontFamily: Fonts.RobotoRegular,
    fontSize: 12,
  },
  titleCenteredText: {
    color: 'white',
    textAlign: 'center',
    marginTop: '1%',
    fontFamily: Fonts.RobotoRegular,
    fontSize: 15,
  },
  percentContainer: {
    marginRight: 10,
  },
  chartWrapper: {
    marginLeft: 120,
  },
  image: {
    width: 30,
    height: 30,
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  investmentName: {
    color: 'white',
    fontFamily: Fonts.RobotoCondensedRegular,
    fontWeight: 'bold',
    fontSize: 14,
  },
  imageSecondary: {
    width: 20,
    height: 20,
  },
  imageContainer: {
    alignContent: 'center',
  },
});

export default styles;
