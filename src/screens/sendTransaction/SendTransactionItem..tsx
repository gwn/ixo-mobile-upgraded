import React from 'react';
import { Text, View } from 'react-native';
import styles from './SendTransactionItem.styles';

interface SendTransactionItemProps {
  title?: string;
  subtitle?: string;
}

const SendTransactionItem: React.FC<SendTransactionItemProps> = ({
  title,
  subtitle,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
};

export default SendTransactionItem;
