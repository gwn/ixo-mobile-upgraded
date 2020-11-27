import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ConnectIXO from './screens/ConnectIXO';
import LoadingScreen from './screens/Loading';
import OnBoarding from './screens/Onboarding';
import Recover from './screens/Recover';
import Register from './screens/Register';
import ScanQR from './screens/ScanQR';
import Login from './screens/Login';
import Projects from './screens/Projects';

import SideBar from './components/SideBar';
import SubmittedClaims from './screens/SubmittedClaims';
import NewClaim from './screens/NewClaim';
import ProjectDetails from './screens/ProjectDetails';
import Claims from './screens/Claims';
import ViewClaim from './screens/ViewClaim';
import Help from './screens/Help';

import Wallet from './screens/wallet/Wallet';
import Modal from './components/Modal/Modal';
import Assistant from './screens/assistant/Assistant';
import Transactions from './screens/transactions/Transactions';
import SendTransaction from './screens/sendTransaction/SendTransaction';
import TransactionSubmit from './screens/transactionSubmit/TransactionSubmit';
import Relayers from './screens/relayers/Relayers';
import RelayersDetails from './screens/stakingDetails/RelayersDetails';

const MainNavigator = createStackNavigator();

function MainNavigatorStack() {
  return (
    <MainNavigator.Navigator initialRouteName="LoginStack">
      <MainNavigator.Screen
        name="LoginStack"
        component={OnBoardingNavigatorStack}
        options={{ headerShown: false }}
      />
      <MainNavigator.Screen
        name="DrawlerStack"
        component={DrawerNavigatorStack}
        options={{ headerShown: false }}
      />
    </MainNavigator.Navigator>
  );
}

const AppNavigator = createStackNavigator();

function AppNavigatorStack() {
  return (
    <AppNavigator.Navigator initialRouteName="Projects">
      <AppNavigator.Screen name="Projects" component={Projects} />
      <AppNavigator.Screen name="SubmittedClaims" component={SubmittedClaims} />
      <AppNavigator.Screen name="NewClaim" component={NewClaim} />
      <AppNavigator.Screen name="ProjectDetails" component={ProjectDetails} />
      <AppNavigator.Screen name="Claims" component={Claims} />
      <AppNavigator.Screen name="ViewClaim" component={ViewClaim} />
    </AppNavigator.Navigator>
  );
}

const HelpNavigator = createStackNavigator();

function helpNavigatorStack() {
  return (
    <HelpNavigator.Navigator initialRouteName="Help">
      <HelpNavigator.Screen name="Help" component={Help} />
    </HelpNavigator.Navigator>
  );
}

const DrawerNavigator = createDrawerNavigator();

function DrawerNavigatorStack() {
  return (
    <DrawerNavigator.Navigator initialRouteName="Projects" component={SideBar}>
      <DrawerNavigator.Screen name="Projects" component={AppNavigatorStack} />
      <DrawerNavigator.Screen name="Help" component={helpNavigatorStack} />
      <DrawerNavigator.Screen name="Wallet" component={WalletsNavigatorStack} />
    </DrawerNavigator.Navigator>
  );
}

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
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      {/* <OnBoardingNavigator.Screen
        name="Projects"
        component={DrawerNavigatorStack}
        options={{ headerShown: false }}
      /> */}
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

const WalletsNavigator = createStackNavigator();

function WalletsNavigatorStack() {
  return (
    <WalletsNavigator.Navigator
      initialRouteName="Wallet"
      mode="modal"
      screenOptions={{
        headerShown: false,
      }}>
      <WalletsNavigator.Screen name="Wallet" component={Wallet} />
      <WalletsNavigator.Screen name="Assistant" component={Assistant} />
      <WalletsNavigator.Screen name="Relayers" component={Relayers} />
      <WalletsNavigator.Screen
        name="RelayersDetails"
        component={RelayersDetails}
      />
      <WalletsNavigator.Screen
        name="SendTransaction"
        component={SendTransaction}
      />
      <SwipeNavigator.Screen
        name="TransactionSubmit"
        component={TransactionSubmit}
      />
      <WalletsNavigator.Screen
        name="Transactions"
        component={SwipeNavigatorStack}
      />
      <WalletsNavigator.Screen
        name="Modal"
        options={{
          animationEnabled: true,
          cardStyle: {
            backgroundColor: 'white',
            opacity: 0.4,
          },
          cardOverlayEnabled: true,
        }}
        component={Modal}
      />
    </WalletsNavigator.Navigator>
  );
}

const SwipeNavigator = createStackNavigator();

function SwipeNavigatorStack() {
  return (
    <SwipeNavigator.Navigator
      initialRouteName="Wallet"
      screenOptions={{
        headerShown: false,
      }}>
      <SwipeNavigator.Screen name="Wallet" component={Wallet} />
      <SwipeNavigator.Screen name="Transactions" component={Transactions} />
    </SwipeNavigator.Navigator>
  );
}

export default function IxoAppNavigatorStack() {
  return (
    <NavigationContainer>
      <MainNavigatorStack />
    </NavigationContainer>
  );
}
