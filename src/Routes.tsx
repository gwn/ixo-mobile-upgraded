import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import OnBoarding from './screens/Onboarding';
import Login from './screens/Login';
import Projects from './screens/Projects';
import Claims from './screens/Claims';
import Loading from './screens/Loading';
import ConnectIXO from './screens/ConnectIXO';
import ConnectIXOComplete from './screens/ConnectIXOComplete';
import ScanQR from './screens/ScanQR';
import ProjectDetails from './screens/ProjectDetails';
import NewClaim from './screens/NewClaim';
import SubmittedClaims from './screens/SubmittedClaims';
import Settings from './screens/Settings';
import Help from './screens/Help';
import Register from './screens/Register';
import ViewClaim from './screens/ViewClaim';
import SideBar from './components/SideBar';
import Recover from './screens/Recover';

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

// const SettingsNavigator = createStackNavigator(
// 	{
// 		Settings: { screen: Settings },
// 		OnBoarding: {
// 			screen: OnBoarding,
// 			navigationOptions: {
// 				header: null
// 			}
// 		},
// 		ConnectIXO: {
// 			screen: ConnectIXO,
// 			navigationOptions: {
// 				header: null
// 			}
// 		}
// 	},
// 	{
// 		initialRouteName: 'Settings'
// 	}
// );

const HelpNavigator = createStackNavigator();

function HelpNavigatorStack() {
  return (
    <HelpNavigator.Navigator initialRouteName="Help">
      <HelpNavigator.Screen name="Help" component={Help} />
    </HelpNavigator.Navigator>
  );
}

const DrawerNavigator = createDrawerNavigator();

function DrawerNavigatorStack() {
  return (
    <DrawerNavigator.Navigator
      initialRouteName="Drawer"
      contentComponent={SideBar}>
      <DrawerNavigator.Screen name="Drawer" component={AppNavigatorStack} />
      <DrawerNavigator.Screen name="Help" component={HelpNavigatorStack} />
    </DrawerNavigator.Navigator>
  );
}

const OnBoardingNavigator = createStackNavigator();

function OnBoardingNavigatorStack() {
  return (
    <OnBoardingNavigator.Navigator initialRouteName="OnBoarding">
      {/* <OnBoardingNavigator.Screen name="Settings" component={Settings} />
      <OnBoardingNavigator.Screen
        name="ConnectIXO"
        component={ConnectIXO}
        options={{ header: null }}
      /> */}
      <OnBoardingNavigator.Screen
        name="OnBoarding"
        component={OnBoarding}
        options={{ headerShown: false }}
      />
      {/* <OnBoardingNavigator.Screen
        name="Login"
        component={Login}
        options={{ header: null }}
      />
      <OnBoardingNavigator.Screen
        name="Projects"
        component={DrawerNavigatorStack}
        options={{ header: null }}
      />
      <OnBoardingNavigator.Screen
        name="Loading"
        component={Loading}
        options={{ header: null }}
      />
      <OnBoardingNavigator.Screen name="ScanQR" component={ScanQR} />
      <OnBoardingNavigator.Screen
        name="ConnectIXOComplete"
        component={ConnectIXOComplete}
        options={{ header: null }}
      />
      <OnBoardingNavigator.Screen name="Register" component={Register} />
      <OnBoardingNavigator.Screen name="Recover" component={Recover} /> */}
    </OnBoardingNavigator.Navigator>
  );
}

export default function OnBoardingNavigatorS() {
  return (
    <NavigationContainer>
      <OnBoardingNavigatorStack />
    </NavigationContainer>
  );
}
