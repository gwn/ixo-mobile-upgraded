import 'node-libs-react-native/globals';

import React, { useEffect } from 'react';
import 'react-native-gesture-handler';
import { Root } from 'native-base';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { Provider } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import { initUser } from './src/redux/user/actions';
import store from './src/store'
import wc from './src/walletconnect'
import { UserStorageKeys } from './src/models/phoneStorage'
import './i18n';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import MainNavigatorStack from './src/Routes';

const App = () => {
  useEffect(() => {
    Promise.all(
      ['name', 'did', 'verifyKey']
        .map(userPropName =>
            AsyncStorage.getItem(
                UserStorageKeys[userPropName]))
    )
      .then(([name, did, verifyKey]) =>
        store.dispatch(
            initUser({name, did, verifyKey}))
      )

    AsyncStorage.getItem('walletConnectSession')
      .then(wcSession => {
        if (wcSession) {
          const wcSessionParsed = JSON.parse(wcSession)

          console.log('WalletConnect: Found session:', wcSessionParsed)

          wc.init({ session: wcSessionParsed })
        }
      })
      .catch(console.error)
  }, [])

  return (
    <Root>
      <Provider store={store}>
        <MainNavigatorStack />
      </Provider>
    </Root>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },

  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
