import './shim.js';
import React from 'react';
import 'react-native-gesture-handler';
import { Root } from 'native-base';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import wc from './src/utils/walletconnect';
import './i18n';
import IxoAppNavigatorStack from './src/Routes';

const App = () => {
  useEffect(() => {
    wc.getSavedSession()
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
        <IxoAppNavigatorStack />
      </Provider>
    </Root>
  );
};

export default App;
