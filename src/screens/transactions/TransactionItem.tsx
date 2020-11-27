import React from 'react';
import { Image, Text, TextStyle, TouchableOpacity, View } from 'react-native';
import styles from './TransactionItem.styles';

interface TransactionItemProps {
  title?: string;
  image: string;
  onPress?: any;
  titleStyle?: TextStyle;
  date?: string;
}

const TransactionItem: React.FC<TransactionItemProps> = ({
  title,
  onPress,
  date,
  image,
}) => {
  // @ts-ignore
  let isSold = false;
  return (
    <TouchableOpacity style={styles.mainContainer} onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          {isSold ? (
            <Image
              // @ts-ignore
              source={image}
              style={styles.image}
            />
          ) : (
            <Image
              // @ts-ignore
              source={image}
              style={styles.image}
            />
          )}
        </View>
        <View style={styles.monthContainer}>
          <Text style={styles.titleText}>{title}</Text>
          {isSold ? (
            <Text style={styles.soldOrBoughtText}>
              Sold 0.021 IXO for USD 45,70
            </Text>
          ) : (
            <Text style={styles.soldOrBoughtText}>
              Bought 0.021 IXO for USD 45,70
            </Text>
          )}
        </View>
        <View style={styles.monthContainer}>
          <Text style={styles.subAmount}>{date}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TransactionItem;
