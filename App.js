import './shim.js';
import React from 'react';
import 'react-native-gesture-handler';
import { Root } from 'native-base';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './src/redux/reducers';
import './i18n';
import IxoAppNavigatorStack from './src/Routes';

const store = createStore(rootReducer);

const App = () => {
  return (
    <Root>
      <Provider store={store}>
        <IxoAppNavigatorStack />
      </Provider>
    </Root>
  );
};

export default App;
