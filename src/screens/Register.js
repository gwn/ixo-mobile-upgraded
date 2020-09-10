import React, { useState } from 'react';
import { Container, Content, Text, Toast, View } from 'native-base';
import {
  Dimensions,
  ImageBackground,
  KeyboardAvoidingView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import CustomIcon from '../components/svg/CustomIcons';
import _ from 'underscore';
import LinearGradient from 'react-native-linear-gradient';

import DarkButton from '../components/DarkButton';
import InputField from '../components/InputField';
import { showToast, toastType } from '../utils/toasts';

import RegisterStyles from '../styles/Register';
import { ButtonDark, ThemeColors } from '../styles/Colors';

import background from '../../assets/background_1.png';

const bip39 = require('bip39');

const { height } = Dimensions.get('window');

const registerSteps = {
  captureDetails: 1,
  revealMnemonic: 2,
  reenterMnemonic: 3,
};

const Register = () => {
  const { t } = useTranslation();
  const navigation = useNavigation();

  const [registerState, setRegisterState] = useState(
    registerSteps.captureDetails,
  );
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [mnemonic, setMnemonic] = useState('');
  const [selectedWords, setSelectedWords] = useState([]);
  const [unSelectedWords, setUnSelectedWords] = useState([]);
  const [errorMismatch, setErrorMismatch] = useState(false);
  const [userEnteredMnemonicCorrect, setUserEnteredMnemonicCorrect] = useState(
    false,
  );
  const [loading, setLoading] = useState(false);

  const generateMnemonic = async () => {
    const newMnemonic = await bip39.generateMnemonic();
    const mnemonicArray = [];
    _.each(shuffleArray(newMnemonic.split(' ')), (word, index) => {
      mnemonicArray.push({ key: index, word, selected: false });
    });
    setUnSelectedWords(mnemonicArray);
    setMnemonic(newMnemonic);
  };

  const shuffleArray = (array) => {
    // Durstenfeld shuffle algorithm
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const handleUnselectedToSelected = (mnemonicValue) => {
    const _selectedWords = selectedWords;
    if (!selectedWords.includes(mnemonicValue)) {
      _selectedWords.push(mnemonicValue);
    }
    const mnemonicWords = [...unSelectedWords];
    const mnemonicWord = mnemonicWords.find((e) => e.key === mnemonicValue.key);
    mnemonicWord.selected = true;
    setUnSelectedWords(mnemonicWords);
    setSelectedWords(_selectedWords);

    const mnemonicEntered = getMnemonicString(selectedWords);
    if (
      selectedWords.length === unSelectedWords.length &&
      mnemonicEntered !== mnemonic
    ) {
      setErrorMismatch(true);
    } else if (
      selectedWords.length === unSelectedWords.length &&
      mnemonicEntered === mnemonic
    ) {
      setUserEnteredMnemonicCorrect(true);
    }
  };

  const handleSelectedToUnselected = (mnemonicValue) => {
    const mnemonicWords = [...unSelectedWords];
    const mnemonicWord = mnemonicWords.find((e) => e.key === mnemonicValue.key);
    mnemonicWord.selected = false;

    setSelectedWords(selectedWords.filter((e) => e.key !== mnemonicValue.key));
    setUnSelectedWords(mnemonicWords);

    if (errorMismatch) {
      setErrorMismatch(false);
      setUserEnteredMnemonicCorrect(false);
    }
  };

  const getMnemonicString = (mnemonicArray) => {
    const mnemonicString = [];
    _.each(mnemonicArray, (mnemonicValue) => {
      mnemonicString.push(mnemonicValue.word);
    });
    return mnemonicString.join(' ');
  };

  const handleCreatePassword = () => {
    if (
      confirmPassword === '' ||
      password === '' ||
      username === '' ||
      email === ''
    ) {
      showToast(t('register:missingFields'), toastType.WARNING);
      return;
    }

    if (password !== confirmPassword) {
      showToast(t('register:missmatchPassword'), toastType.WARNING);
      return;
    }

    if (password.length < 8) {
      showToast(t('register:passwordShort'), toastType.WARNING);
      return;
    }

    if (password === confirmPassword) {
      setRegisterState(registerSteps.revealMnemonic);
    }
  };

  const renderStep = (index) => {
    switch (index) {
      case registerSteps.captureDetails:
        return (
          <Content>
            <KeyboardAvoidingView behavior={'padding'}>
              <View style={[RegisterStyles.flexLeft]}>
                <Text style={[RegisterStyles.header]}>
                  {t('register:register')}
                </Text>
              </View>
              <View style={{ width: '100%' }}>
                <View style={RegisterStyles.divider} />
              </View>
              <Text
                style={{
                  textAlign: 'left',
                  color: ThemeColors.white,
                  paddingBottom: 10,
                }}>
                {t('register:letsSetup')}
              </Text>
              <InputField
                value={username}
                labelName={t('register:yourName')}
                onChangeText={(text) => setUsername(text)}
              />
              <InputField
                value={email}
                labelName={t('register:yourEmail')}
                onChangeText={(text) => setEmail(text)}
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
                propStyles={{ marginTop: 20 }}
                onPress={() => handleCreatePassword()}
                text={t('register:create')}
              />
              <TouchableOpacity
                style={{ paddingBottom: 30 }}
                onPress={() => navigation.navigate('Recover')}>
                <Text style={RegisterStyles.recoverText}>
                  {t('register:recoverAccount')}
                </Text>
              </TouchableOpacity>
            </KeyboardAvoidingView>
          </Content>
        );
      case registerSteps.revealMnemonic:
        return (
          <View>
            <View style={[RegisterStyles.flexLeft]}>
              <Text style={[RegisterStyles.header]}>
                {t('register:secretPhrase')}
              </Text>
            </View>
            <View style={{ width: '100%' }}>
              <View style={RegisterStyles.divider} />
            </View>

            <Text
              style={{
                textAlign: 'left',
                color: ThemeColors.white,
                paddingBottom: 10,
              }}>
              {t('register:secretParagraph_1')}
            </Text>

            <Text
              style={{
                textAlign: 'left',
                color: ThemeColors.white,
                paddingBottom: 10,
              }}>
              <Text
                style={{
                  textAlign: 'left',
                  color: ThemeColors.orange,
                  paddingBottom: 10,
                }}>
                {t('register:warning')}:
              </Text>
              {t('register:secretParagraph_2')}
            </Text>

            <TouchableOpacity
              disabled={mnemonic.length > 0}
              onPress={() => generateMnemonic()}
              style={[RegisterStyles.selectedBox]}>
              {mnemonic.length <= 0 ? (
                <View>
                  <CustomIcon
                    name="lock"
                    color={ThemeColors.black}
                    style={{
                      fontSize: 40,
                      textAlign: 'center',
                      color: ThemeColors.white,
                    }}
                    size={height * 0.03}
                  />
                  <Text
                    style={{
                      textAlign: 'center',
                      color: ThemeColors.white,
                      paddingHorizontal: 10,
                    }}>
                    {t('register:tapReveal')}
                  </Text>
                </View>
              ) : (
                <View>
                  <Text
                    style={{
                      textAlign: 'left',
                      color: ThemeColors.white,
                      paddingHorizontal: 10,
                    }}>
                    {mnemonic}
                  </Text>
                </View>
              )}
            </TouchableOpacity>
            <DarkButton
              disabled={mnemonic.length <= 0}
              propStyles={{ marginTop: 15 }}
              text={t('register:next')}
              onPress={() => setRegisterState(registerSteps.reenterMnemonic)}
            />
          </View>
        );
      case registerSteps.reenterMnemonic:
        return (
          <View>
            <View style={[RegisterStyles.flexLeft]}>
              <Text style={[RegisterStyles.header]}>
                {t('register:confirmSecret')}
              </Text>
            </View>
            <View style={{ width: '100%' }}>
              <View style={RegisterStyles.divider} />
            </View>
            <Text
              style={{
                textAlign: 'left',
                color: ThemeColors.white,
                paddingBottom: 10,
              }}>
              {t('register:confirmSecretParagraph')}
            </Text>
            {errorMismatch && (
              <Text
                style={{
                  textAlign: 'left',
                  color: ThemeColors.orange,
                  paddingBottom: 7,
                  fontSize: 14,
                }}>
                {t('register:orderIncorrect')}
              </Text>
            )}
            {renderSelected()}
            {renderUnSelected()}
            <DarkButton
              loading={loading}
              disabled={!userEnteredMnemonicCorrect}
              text={t('register:confirm')}
              onPress={() => this.handleConfirmMnemonic()}
            />
          </View>
        );
    }
  };

  const renderSelected = () => {
    return (
      <View style={[RegisterStyles.selected]}>
        {selectedWords.map((mnemonic) => {
          return (
            <TouchableOpacity
              onPress={() => handleSelectedToUnselected(mnemonic)}
              key={mnemonic.word}>
              <Text
                style={
                  errorMismatch
                    ? [
                        RegisterStyles.wordBox,
                        { borderColor: ThemeColors.orange },
                      ]
                    : RegisterStyles.wordBox
                }>
                {mnemonic.word}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  const renderUnSelected = () => {
    return (
      <View
        style={
          selectedWords.length > 0
            ? [RegisterStyles.unSelect]
            : [RegisterStyles.unSelect]
        }>
        {unSelectedWords.map((mnemonicWord) => {
          return (
            <TouchableOpacity
              onPress={() => handleUnselectedToSelected(mnemonicWord)}
              key={mnemonicWord.key}>
              {mnemonicWord.selected ? (
                <LinearGradient
                  style={RegisterStyles.wordBoxGradient}
                  colors={[ButtonDark.colorPrimary, ButtonDark.colorSecondary]}>
                  <Text style={{ color: ThemeColors.white }}>
                    {mnemonicWord.word}
                  </Text>
                </LinearGradient>
              ) : (
                <Text style={RegisterStyles.wordBox}>{mnemonicWord.word}</Text>
              )}
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <ImageBackground source={background} style={[RegisterStyles.wrapper]}>
        <View style={{ height: Dimensions.get('window').height * 0.1 }} />
        {renderStep(registerState)}
      </ImageBackground>
    </Container>
  );
};

export default Register;
