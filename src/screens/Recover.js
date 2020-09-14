import React, { useState } from 'react';
import {
  ImageBackground,
  StatusBar,
  KeyboardAvoidingView,
  TextInput,
  Dimensions,
} from 'react-native';
import { Container, Icon, Text, View, Content } from 'native-base';
import SInfo from 'react-native-sensitive-info';
import { useNavigation } from '@react-navigation/native';
import { CommonActions } from '@react-navigation/core';
import { useTranslation } from 'react-i18next';

import { showToast, toastType } from '../utils/toasts';
import { Encrypt, generateSovrinDID } from '../utils/sovrin';
import {
  LocalStorageKeys,
  SecureStorageKeys,
  UserStorageKeys,
} from '../models/phoneStorage';

import DarkButton from '../components/DarkButton';
import InputField from '../components/InputField';

import { ThemeColors } from '../styles/Colors';
import RecoverStyles from '../styles/Recover';
import RegisterStyles from '../styles/Register';

const { width } = Dimensions.get('window');
import background from '../../assets/background_1.png';

const Recover = ({ ixo, onUserInit }) => {
  const { t } = useTranslation();
  const navigation = useNavigation();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [mnemonic, setMnemonic] = useState('');

  const isLedgered = (did) => {
    return new Promise((resolve, reject) => {
      ixo.user
        .getDidDoc(did)
        .then((response) => {
          const { error = false } = response;
          if (error) {
            return reject(t('recover:userNotFound'));
          }
          return resolve(true);
        })
        .catch((error) => {
          console.log(error);
          showToast('Error occured', toastType.DANGER);
        });
    });
  };

  const handleConfirmMnemonic = async () => {
    try {
      if (confirmPassword === '' || password === '' || username === '') {
        throw t('register:missingFields');
      }
      if (password.length < 8) {
        throw t('register:passwordShort');
      }
      if (password !== confirmPassword) {
        throw t('register:missmatchPassword');
      }
      if (mnemonic === '') {
        throw t('recover:secretPhrase');
      }

      const sovrin = generateSovrinDID(mnemonic);

      const ledgered = await isLedgered('did:sov:' + sovrin.did);

      if (ledgered) {
        const encryptedMnemonic = Encrypt(
          JSON.stringify({ mnemonic: mnemonic, name: username }),
          password,
        ); // encrypt securely on phone enlave

        SInfo.setItem(
          SecureStorageKeys.encryptedMnemonic,
          encryptedMnemonic.toString(),
          {},
        );

        SInfo.setItem(SecureStorageKeys.password, password, {});
        // AsyncStorage.setItem(LocalStorageKeys.firstLaunch, 'true'); // stop first time onboarding
        const user = {
          did: 'did:sov:' + sovrin.did,
          name: username,
          verifyKey: sovrin.verifyKey,
        };
        // AsyncStorage.setItem(UserStorageKeys.name, user.name);
        // AsyncStorage.setItem(UserStorageKeys.did, user.did);
        // AsyncStorage.setItem(UserStorageKeys.verifyKey, user.verifyKey);
        onUserInit(user);
        navigateToLogin();
      }
    } catch (exception) {
      showToast(t(exception), toastType.WARNING);
    }
  };

  const navigateToLogin = () => {
    const resetAction = CommonActions.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
    navigation.dispatch(resetAction);
  };

  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <ImageBackground source={background} style={[RecoverStyles.wrapper]}>
        <Content>
          <KeyboardAvoidingView
            behavior={'padding'}
            contentContainerStyle={[RecoverStyles.keyboardContainer]}>
            <View>
              <View style={[RecoverStyles.flexLeft]}>
                <Text style={[RecoverStyles.header]}>
                  {t('recover:secretPhrase')}
                </Text>
              </View>
              <View style={{ width: '100%' }}>
                <View style={RecoverStyles.divider} />
              </View>

              <Text style={RecoverStyles.paragraph}>
                {t('recover:secretParagraph_1')}
              </Text>
              <Text style={RecoverStyles.paragraph}>
                <Text
                  style={[
                    RecoverStyles.paragraph,
                    { color: ThemeColors.orange },
                  ]}>
                  {t('register:warning')}:
                </Text>
                {t('register:secretParagraph_2')}
              </Text>
              <View style={[RegisterStyles.selectedBox]}>
                <TextInput
                  blurOnSubmit={true}
                  maxLength={100}
                  multiline={true}
                  numberOfLines={5}
                  onChangeText={(text) => setMnemonic(text)}
                  style={{
                    textAlign: 'left',
                    color: ThemeColors.white,
                    paddingHorizontal: 10,
                    flex: 1,
                    alignItems: 'flex-start',
                  }}>
                  {mnemonic}
                </TextInput>
              </View>
              <InputField
                value={username}
                labelName={t('register:yourName')}
                onChangeText={(text) => setUsername(text)}
              />
              <InputField
                password={true}
                value={password}
                labelName={t('register:newPassword')}
                onChangeText={(text) => setPassword(text)}
              />
              <InputField
                password={true}
                value={confirmPassword}
                labelName={t('register:confirmPassword')}
                onChangeText={(text) => setConfirmPassword(text)}
              />
              <DarkButton
                onPress={() => handleConfirmMnemonic()}
                propStyles={{ marginTop: 15 }}
                text={t('recover:next')}
              />
            </View>
          </KeyboardAvoidingView>
        </Content>
      </ImageBackground>
    </Container>
  );
};

export default Recover;