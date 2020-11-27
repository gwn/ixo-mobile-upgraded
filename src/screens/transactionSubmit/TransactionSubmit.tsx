import React, { useState } from 'react';
import {
  Image,
  Linking,
  Platform,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './TransactionSubmit.styles';
import AssistantNavigator from '../../components/asssitantNavigator/AssistantNavigator';
import * as Images from '../../../assets/images';
import LottieView from 'lottie-react-native';

interface TransactionAnimationProps {
  style: any;
}

const TransactionAnimation: React.FC<TransactionAnimationProps> = ({
  style,
}) => {
  return (
    <LottieView
      source={require('../../../assets/lottieAnimations/01_Full Animation.json')}
      autoPlay
      loop
      speed={1}
      style={style}
    />
  );
};

export enum TransactionState {
  Pending = 'Pending',
  Success = 'Success',
  Error = 'Error',
}

interface TransactionSubmitProps {
  onPress?: () => void;
  navigation: any;
}

// TODO add buttons and QR Code

const TransactionSubmit: React.FC<TransactionSubmitProps> = ({
  onPress,
  navigation,
}) => {
  const [transactionState, setTransactionState] = useState<TransactionState>(
    TransactionState.Pending,
  );
  const randomState =
    Math.random() < 0.5 ? TransactionState.Success : TransactionState.Error;

  setTimeout(() => setTransactionState(randomState), 3000);

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
        <View style={styles.imageContainer}>
          {
            {
              Pending: <TransactionAnimation style={styles.image} />,
              Success: (
                <Image
                  source={Images.SignTransactions}
                  style={[styles.image, styles.successImage]}
                />
              ),
              Error: (
                <Image
                  source={Images.SignTransactions}
                  style={[styles.image, styles.errorImage]}
                />
              ),
            }[transactionState]
          }
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.transactionState}>{transactionState}</Text>
          <Text style={styles.transactionStatus}>
            {
              {
                Pending: 'Your transaction has been submitted',
                Success: 'Your transaction was successful!',
                Error:
                  '  Something went wrong!  ' + '  Please try again later ',
              }[transactionState]
            }
          </Text>
        </View>
        {transactionState === TransactionState.Success ? (
          <TouchableOpacity
            style={styles.transactionDetailsButton}
            onPress={() => Linking.openURL('https://blockscan.ixo.world/')}>
            <Image source={Images.EYE} style={styles.buttonImage} />
          </TouchableOpacity>
        ) : (
          <></>
        )}
      </View>
    </SafeAreaView>
  );
};

export default TransactionSubmit;
