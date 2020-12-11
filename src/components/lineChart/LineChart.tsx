import React from 'react';
import { LineChart } from 'react-native-svg-charts';

const LineChartSmall: React.FC = () => {
  const data = [350, 10, 40, 29, 85, 91, 35, 253, -153, 24, 150, -20, 100];

  // @ts-ignore
  return (
    <LineChart
      // @ts-ignore
      style={{ height: 25, width: 70, marginTop: -30, alignSelf: 'center' }}
      data={data}
      svg={{ stroke: 'rgb(3, 208, 251)' }}
      contentInset={{ top: 20, bottom: 20 }}
    />
  );
};

export default LineChartSmall;
