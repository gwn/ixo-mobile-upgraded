import React, { useState } from 'react';
import {
  ImageBackground,
  StatusBar,
  KeyboardAvoidingView,
  TextInput,
  Dimensions,
} from 'react-native';
import { Container, Icon, Text, View, Content } from 'native-base';
import { useTranslation } from 'react-i18next';

import { showToast, toastType } from '../utils/toasts';

import DarkButton from '../components/DarkButton';
import InputField from '../components/InputField';

import { ThemeColors } from '../styles/Colors';
import RecoverStyles from '../styles/Recover';
import RegisterStyles from '../styles/Register';

const { width } = Dimensions.get('window');
import background from '../../assets/background_1.png';

const Recover = () => {
  const { t } = useTranslation();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [mnemonic, setMnemonic] = useState('');

  const handleConfirmMnemonic = async () => {
    try {
      if (confirmPassword === '' || password === '' || username === '')
        throw 'register:missingFields';
      if (password.length < 8) throw 'register:passwordShort';
      if (password !== confirmPassword) throw 'register:missmatchPassword';
      if (mnemonic === '') throw 'recover:secretPhrase';

      const sovrin = generateSovrinDID(mnemonic);
      const ledgered = await this.isLedgered('did:sov:' + sovrin.did);
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
        AsyncStorage.setItem(LocalStorageKeys.firstLaunch, 'true'); // stop first time onboarding
        const user = {
          did: 'did:sov:' + sovrin.did,
          name: username,
          verifyKey: sovrin.verifyKey,
        };
        AsyncStorage.setItem(UserStorageKeys.name, user.name);
        AsyncStorage.setItem(UserStorageKeys.did, user.did);
        AsyncStorage.setItem(UserStorageKeys.verifyKey, user.verifyKey);
        this.props.onUserInit(user);
        this.navigateToLogin();
      }
    } catch (exception) {
      showToast(t(exception), toastType.WARNING);
    }
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
