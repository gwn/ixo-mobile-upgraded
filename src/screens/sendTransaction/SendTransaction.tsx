import React from 'react';
import {
  Image,
  Platform,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './SendTransaction.styles';
import AssistantNavigator from '../../components/asssitantNavigator/AssistantNavigator';
import * as Images from '../../../assets/images';
import SendTransactionItem from './SendTransactionItem.';

interface SendTransactionPageProps {
  onPress?: () => void;
  navigation: any;
}

const SendTransaction: React.FC<SendTransactionPageProps> = ({
  onPress,
  navigation,
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#002334"
        translucent={Platform.OS === 'android'}
      />
      <AssistantNavigator
        onPress={() => navigation.goBack()}
        crossImage={Images.Vector}
        onCrossPress={() => navigation.goBack()}
      />
      <View style={styles.viewContainer}>
        <View style={styles.screenNameContainer}>
          <Text style={styles.sendTransaction}>SEND TRANSACTION</Text>
          <Text style={styles.projectName}>Tongo Water Project</Text>
        </View>
        <Image source={Images.Rectangle} style={styles.rectangle} />
        <View style={styles.specsContainer}>
          <SendTransactionItem title="Token:" subtitle="IXO" />
          <SendTransactionItem title="Amount:" subtitle="1200" />
          <SendTransactionItem
            title="From Account:"
            subtitle="450fufe23r9029"
          />
          <SendTransactionItem title="To Account:" subtitle="753fufe23r9029" />
          <SendTransactionItem title="Note:" subtitle="IXO" />
        </View>
        <View style={styles.buttonsContainer}>
          <Text style={styles.footerText}>
            Confirm that you want to sign this transaction
          </Text>
          <TouchableOpacity
            style={styles.sign}
            onPress={() => navigation.navigate('TransactionSubmit')}>
            <Text style={styles.signText}>SIGN</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.reject}
            onPress={() => navigation.goBack()}>
            <Text style={styles.rejectText}>REJECT</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SendTransaction;
