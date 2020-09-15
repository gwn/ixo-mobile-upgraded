import React from 'react';
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
import { createAppStore } from './src/redux/store';
import './i18n';

import Loading from './src/screens/Loading';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import MainNavigatorStack from './src/Routes';

const store = createAppStore();

const App = () => {
  return (
    // <>
    //   <StatusBar barStyle="dark-content" />
    //   <SafeAreaView>
    //     <ScrollView
    //       contentInsetAdjustmentBehavior="automatic"
    //       style={styles.scrollView}>
    //       <View style={styles.body}>
    //         <View style={styles.sectionContainer}>
    //           <Text style={styles.sectionTitle}>ixoMobile app</Text>
    //           <Text style={styles.sectionDescription}>
    //             Edit <Text style={styles.highlight}>App.js</Text> to change this
    //             screen.
    //           </Text>
    //         </View>
    //       </View>
    //     </ScrollView>
    //   </SafeAreaView>
    // </>
    <Root>
      <Provider store={store.store}>
        <PersistGate loading={<Loading />} persistor={store.persistor}>
          <MainNavigatorStack />
        </PersistGate>
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
