import React from 'react';
import { Platform } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { createAppStore } from './src/redux/store';
import Sockets from './src/utils/sockets';
import { Root, StyleProvider } from 'native-base';
import Translator from './src/Translator';
import getTheme from './native-base-theme/components/index';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Loading from './src/screens/Loading';

interface State {
  isReady: boolean;
}

const store = createAppStore();

export default class App extends React.Component<{}, State> {
  private sockets: Sockets = new Sockets();
  componentDidMount() {
    if (Platform.OS === 'android') {
      SplashScreen.hide();
    }
  }

  render() {
    return (
      <Root>
        <StyleProvider style={getTheme()}>
          <Provider store={store.store}>
            <PersistGate loading={<Loading />} persistor={store.persistor}>
              <Translator />
            </PersistGate>
          </Provider>
        </StyleProvider>
      </Root>
    );
  }
}
