import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ConnectIXO from './screens/ConnectIXO';
import LoadingScreen from './screens/Loading';
import OnBoarding from './screens/Onboarding';
import Recover from './screens/Recover';
import Register from './screens/Register';
import ScanQR from './screens/ScanQR';

const OnBoardingNavigator = createStackNavigator();

function OnBoardingNavigatorStack() {
  return (
    <OnBoardingNavigator.Navigator initialRouteName="OnBoarding">
      <OnBoardingNavigator.Screen
        name="ConnectIXO"
        component={ConnectIXO}
        options={{ headerShown: false }}
      />
      <OnBoardingNavigator.Screen
        name="OnBoarding"
        component={OnBoarding}
        options={{ headerShown: false }}
      />
      <OnBoardingNavigator.Screen
        name="Loading"
        component={LoadingScreen}
        options={{ headerShown: false }}
      />
      <OnBoardingNavigator.Screen name="ScanQR" component={ScanQR} />
      <OnBoardingNavigator.Screen name="Register" component={Register} />
      <OnBoardingNavigator.Screen name="Recover" component={Recover} />
    </OnBoardingNavigator.Navigator>
  );
}

export default function MainNavigatorStack() {
  return (
    <NavigationContainer>
      <OnBoardingNavigatorStack />
    </NavigationContainer>
  );
}
