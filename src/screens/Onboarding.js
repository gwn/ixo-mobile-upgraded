import React, { useEffect, useState } from 'react';
import { Image, StatusBar, View } from 'react-native';
import { Text } from 'native-base';
import Video from 'react-native-video';
import AsyncStorage from '@react-native-community/async-storage';
import { NavigationActions } from '@react-navigation/core';
import { LocalStorageKeys } from '../models/phoneStorage';
import OnBoardingStyles from '../styles/OnBoarding';
import { ThemeColors } from '../styles/Colors';
import { useTranslation } from 'react-i18next';
import Swiper from 'react-native-swiper';
import ConnectIXO from '../screens/ConnectIXO';
import Loading from '../screens/Loading';

import logo from '../../assets/logo.png';
import makeAnImpact from '../../assets/ixoOnboarding1.mp4';

const OnBoarding = () => {
  const { t } = useTranslation();
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [swiperIndex, setSwiperIndex] = useState(0);

  const getData = async () => {
    try {
      const isFirstLaunch = await AsyncStorage.getItem(
        LocalStorageKeys.firstLaunch,
      );
      if (isFirstLaunch) {
        NavigationActions.reset({
          key: null,
          index: 0,
          actions: [NavigationActions.navigate({ routeName: 'home' })],
        });
      } else {
        setShowOnboarding(true);
      }
    } catch (e) {
      setShowOnboarding(true);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const renderStepOne = () => {
    return (
      <View style={OnBoardingStyles.onboardingContainer}>
        <View style={OnBoardingStyles.logoContainer}>
          <Image
            resizeMode={'contain'}
            style={OnBoardingStyles.logo}
            source={logo}
          />
        </View>
        <Video
          resizeMode={'contain'}
          source={makeAnImpact}
          muted={true}
          playWhenInactive={false}
          playInBackground={true}
          style={OnBoardingStyles.videoStyle}
        />
        <View>
          <View>
            <Text style={OnBoardingStyles.onboardingHeading}>
              {t('onboarding:makeImpact')}
            </Text>
          </View>
          <View>
            <Text style={OnBoardingStyles.onboardingParagraph}>
              {t('onboarding:submitClaim')}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  const renderStepTwo = () => {
    return (
      <View style={OnBoardingStyles.onboardingContainer}>
        <View style={OnBoardingStyles.logoContainer}>
          <Image
            resizeMode={'contain'}
            style={OnBoardingStyles.logo}
            source={logo}
          />
        </View>
        <Video
          resizeMode={'contain'}
          source={makeAnImpact}
          muted={true}
          playWhenInactive={false}
          playInBackground={true}
          style={OnBoardingStyles.videoStyle}
        />
        <View>
          <View>
            <Text style={OnBoardingStyles.onboardingHeading}>
              {t('onboarding:noConnection')}
            </Text>
          </View>
          <View>
            <Text style={OnBoardingStyles.onboardingParagraph}>
              {t('onboarding:saveClaim')}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  const renderSwiperSteps = () => {
    switch (swiperIndex) {
      case 0:
        return [renderStepOne(), <View key={1} />, <View key={2} />].map(
          (element) => {
            return element;
          },
        );
      case 1:
        return [<View key={0} />, renderStepTwo(), <View key={2} />].map(
          (element) => {
            return element;
          },
        );
      case 2:
        return [
          <View key={0} />,
          <View key={1} />,
          <ConnectIXO
            key={2}
            // navigation={this.props.navigation}
            // screenProps={this.props.screenProps}
          />,
        ].map((element) => {
          return element;
        });
      default:
        return null;
    }
  };

  return showOnboarding ? (
    <View style={OnBoardingStyles.wrapper}>
      <StatusBar barStyle="light-content" />
      <Swiper
        loop={false}
        // ref={(swiper) => (swiperRef = swiper)}
        onIndexChanged={(index) => setSwiperIndex(index)}
        scrollEnabled={true}
        activeDotColor={ThemeColors.blue_medium}
        dotColor={ThemeColors.blue_light}
        showsButtons={false}
        activeDotStyle={OnBoardingStyles.dotStyle}
        dotStyle={OnBoardingStyles.dotStyle}>
        {renderSwiperSteps()}
      </Swiper>
    </View>
  ) : (
    <Loading />
  );
};

export default OnBoarding;
