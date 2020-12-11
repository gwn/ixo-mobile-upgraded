import React from 'react';
import { BarChart, XAxis, YAxis } from 'react-native-svg-charts';
// @ts-ignore
import styles from './BarChart.styles';
import { Defs, LinearGradient, Stop } from 'react-native-svg';
import { View } from 'react-native';

interface BarChartBigProps {
  style?: object;
  data?: any;
}

const BarChartBig: React.FC<BarChartBigProps> = ({ style, data }) => {
  const datasFake = [
    55,
    10,
    40,
    10,
    85,
    35,
    53,
    24,
    50,
    55,
    10,
    40,
    10,
    85,
    35,
    53,
    55,
    10,
    40,
    10,
    85,
    35,
    53,
    24,
    50,
  ];

  const Gradient = () => (
    <Defs key={'gradient'}>
      <LinearGradient id={'gradient'} x1={'0%'} y={'0%'} x2={'0%'} y2={'100%'}>
        <Stop offset={'0%'} stopColor={'#03D0FB'} />
        <Stop offset={'100%'} stopColor={'#016480'} />
      </LinearGradient>
    </Defs>
  );

  const keys = ['DEC', 'JAN', 'FEB', 'MAR', 'APR', 'MAY'];
  return (
    <View style={styles.wrapper}>
      <View style={styles.yAxisWrapper}>
        <BarChart
          style={styles.barContainer}
          data={datasFake}
          svg={{ fill: 'url(#gradient)' }}
          contentInset={{ top: 10, bottom: 30 }}
          spacingInner={0.4}
          numberOfTicks={2}>
          <Gradient />
        </BarChart>
        <YAxis
          style={styles.yAxis}
          data={datasFake}
          contentInset={{ top: 10, bottom: 10 }}
          svg={{
            fill: 'white',
            fontSize: 9,
          }}
          numberOfTicks={5}
          formatLabel={(value) => `${value}00`}
        />
      </View>
      <XAxis
        style={styles.xAxis}
        svg={{
          fill: 'white',
          fontSize: 9,
        }}
        data={['DEC', 'JAN', 'FEB', 'MAR', 'APR', 'MAY']}
        formatLabel={(index) => keys[index]}
        contentInset={{ left: 10, right: 10 }}
      />
    </View>
  );
};

export default BarChartBig;
