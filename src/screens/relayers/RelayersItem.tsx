import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from './RelayersItem.styles';

interface RelayersItemProps {
  index?: any;
  title?: string;
  image: string;
  onPress?: any;
  percent?: string;
  active?: boolean;
}

const RelayersItem: React.FC<RelayersItemProps> = ({
  index,
  title,
  onPress,
  percent,
  image,
}) => {
  // @ts-ignore
  return (
    <TouchableOpacity style={styles.mainContainer} onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.index}>{index + 1}</Text>
        <View style={styles.imageContainer}>
          <Image
            // @ts-ignore
            source={image}
            style={styles.image}
          />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>{title}</Text>
        </View>
        <View style={styles.monthContainer}>
          <Text style={styles.percent}>{percent}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RelayersItem;
