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
    marginHorizontal: '1%',
  },
  headerContainer: {
    flexDirection: 'row',
    paddingTop: '8%',
    alignItems: 'center',
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
    height: 15,
    marginBottom: 14,
  },
  pageTitleContainer: {
    flexDirection: 'row',
    marginLeft: '28%',
    paddingTop: 5,
  },
  roundLogo: {
    width: 16,
    height: 16,
    marginBottom: 2,
  },
  pageTitle: {
    fontFamily: Fonts.RobotoRegular,
    fontWeight: 'bold',
    fontSize: 14,
    marginLeft: 5,
    color: '#FFFFFF',
  },
  inputAndButtonsContainer: {
    flexDirection: 'row',
    marginTop: 24,
    marginLeft: '2%',
  },
  inputContainer: {
    borderColor: '#5A879D',
    borderWidth: 1,
    borderRadius: 4,
    marginLeft: '2%',
    marginRight: '2%',
    width: '65%',
    height: 35,
  },
  buttonAll: {
    width: 55,
    height: 34,
    backgroundColor: '#043C57',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonActive: {
    width: 55,
    height: 34,
    backgroundColor: '#043C57',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontFamily: Fonts.RobotoRegular,
    fontSize: 13,
    color: '#FFFFFF',
  },
  filtersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '4%',
    marginHorizontal: '5%',
  },
  nameFilter: {
    opacity: 1,
  },
  buttonFiltersText: {
    color: '#5A879D',
    fontFamily: Fonts.RobotoRegular,
    fontSize: 12,
  },
  comissionFilter: { opacity: 1 },
  flatlistWrapper: { marginTop: '4%', minHeight: '60%' },
  relayersListContainer: { opacity: 1 },
});

export default styles;
