import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  footer: {
    alignSelf: 'stretch',
    backgroundColor: 'black',
    height: 50,
  },
  footerButton: {
    alignSelf: 'center',
    width: 27,
    height: 30,
    marginTop: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    opacity: 0.96,
  },
  crossContainer: {
    height: 14,
    width: 14,
    alignSelf: 'flex-end',
    marginTop: '-5%',
    marginRight: '5%',
  },
  crossImage: {
    height: 12,
    width: 12,
  },
});
export default styles;
