import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  yAxisWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  barContainer: {
    paddingTop: 10,
    flex: 9,
    backgroundColor: '#002334',
  },
  yAxis: {
    fontSize: 9,
    color: 'white',
    flex: 1,
  },
  xAxis: {
    marginHorizontal: -10,
    fontSize: 9,
    color: 'white',
    width: '90%',
    marginLeft: 2,
  },
});

export default styles;
