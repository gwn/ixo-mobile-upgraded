import React from 'react';
import {
  Image,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import {
  Container,
  Content,
  Tab,
  Tabs,
  TabHeading,
  Text,
  View,
} from 'native-base';

import DarkButton from '../components/DarkButton';
import LightButton from '../components/LightButton';

//styles
import { ThemeColors, ClaimsButton } from '../styles/Colors';

const renderSavedClaims = (projectClaims) => {
  if (
    projectClaims &&
    projectClaims.claims &&
    Object.keys(projectClaims.claims).length !== 0
  ) {
    return (
      <Container
        style={{
          backgroundColor: ThemeColors.blue_dark,
          flex: 1,
          paddingHorizontal: '3%',
        }}>
        <Content>
          {Object.keys(projectClaims.claims).map((key) => {
            const claim: IClaimSaved = projectClaims.claims[key];
            return (
              <ClaimListItem
                screenProps={
                  claim.updated
                    ? this.props.screenProps.t('claims:claimUpdated')
                    : this.props.screenProps.t('claims:claimCreated')
                }
                key={claim.claimId}
                savedClaim={true}
                impactAction={this.impactAction}
                claim={claim}
                onViewClaim={this.onViewClaim}
              />
            );
          })}
        </Content>
      </Container>
    );
  }
  return this.renderNoSavedClaims();
};

const renderSavedClaims = (projectClaims) => {
  if (
    projectClaims &&
    projectClaims.claims &&
    Object.keys(projectClaims.claims).length !== 0
  ) {
    return (
      <Container
        style={{
          backgroundColor: ThemeColors.blue_dark,
          flex: 1,
          paddingHorizontal: '3%',
        }}>
        <Content>
          {Object.keys(projectClaims.claims).map((key) => {
            const claim: IClaimSaved = projectClaims.claims[key];
            return (
              <ClaimListItem
                screenProps={
                  claim.updated
                    ? this.props.screenProps.t('claims:claimUpdated')
                    : this.props.screenProps.t('claims:claimCreated')
                }
                key={claim.claimId}
                savedClaim={true}
                impactAction={this.impactAction}
                claim={claim}
                onViewClaim={this.onViewClaim}
              />
            );
          })}
        </Content>
      </Container>
    );
  }
  return this.renderNoSavedClaims();
};

const renderNoSubmittedClaims = () => {
  let hasCapabilities = true;
  const localProjectState = this.props.projectsLocalStates.find(
    (projectLocal: IProjectSaved) =>
      projectLocal.projectDid === this.projectDid,
  );
  hasCapabilities =
    localProjectState && localProjectState.userHasCapabilities ? true : false;
  return (
    <ImageBackground source={background} style={ClaimsStyles.backgroundImage}>
      <Container style={{ paddingHorizontal: 30 }}>
        <View>
          <View style={ClaimsStyles.imageContainer}>
            <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
              <Image resizeMode={'stretch'} source={submittedClaims} />
            </View>
          </View>
          <View>
            <View style={[ClaimsStyles.flexLeft]}>
              <Text style={[ClaimsStyles.header]}>
                {hasCapabilities
                  ? this.props.screenProps.t('claims:noSubmissions')
                  : this.props.screenProps.t(
                      'claims:applicationPendingApproval',
                    )}
              </Text>
            </View>
            <View style={{ width: '100%' }}>
              <View style={ClaimsStyles.divider} />
            </View>
            <View style={ClaimsStyles.flexLeft}>
              <Text style={ClaimsStyles.infoBox}>
                {hasCapabilities
                  ? this.props.screenProps.t('claims:savedSubmissionsInfo')
                  : this.props.screenProps.t('claims:pleaseCheckBackSoon')}
              </Text>
            </View>
          </View>
        </View>
      </Container>
    </ImageBackground>
  );
};

const renderNoSavedClaims = () => {
  return (
    <ImageBackground source={background} style={ClaimsStyles.backgroundImage}>
      <Container style={{ paddingHorizontal: 30 }}>
        <View>
          <View style={ClaimsStyles.imageContainer}>
            <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
              <Image resizeMode={'stretch'} source={addClaims} />
            </View>
          </View>
          <View>
            <View style={[ClaimsStyles.flexLeft]}>
              <Text style={[ClaimsStyles.header]}>
                {this.props.screenProps.t('claims:noClaims')}
              </Text>
            </View>
            <View style={{ width: '100%' }}>
              <View style={ClaimsStyles.divider} />
            </View>
            <View style={ClaimsStyles.flexLeft}>
              <Text style={ClaimsStyles.infoBox}>
                {this.props.screenProps.t('claims:saveClaimsOffline')}
              </Text>
            </View>
          </View>
        </View>
      </Container>
    </ImageBackground>
  );
};

const renderSavedTab = (numberOfSavedClaims) => {
  if (numberOfSavedClaims === 0) {
    return this.props.screenProps.t('claims:saved');
  }
  return (
    <TabHeading>
      <View style={ClaimsStyles.tabCounterContainer}>
        <Text style={ClaimsStyles.tabCounterText}>{numberOfSavedClaims}</Text>
      </View>
      <Text>{this.props.screenProps.t('claims:saved')}</Text>
    </TabHeading>
  );
};

const renderAllSavedClaimsSubmitted = () => {
  return (
    <ImageBackground
      source={backgroundSuccess}
      style={ClaimsStyles.backgroundImage}>
      <View style={SubmittedClaimsStyles.wrapper}>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 0.2 }}>
            <View
              style={[
                SubmittedClaimsStyles.iconWrapper,
                { backgroundColor: ThemeColors.success_green },
              ]}>
              <CustomIcons
                style={{ color: ThemeColors.white }}
                name="approved"
                size={height * 0.05}
              />
            </View>
          </View>
          <View style={SubmittedClaimsStyles.textWrapper}>
            <View style={[SubmittedClaimsStyles.flexLeft]}>
              <Text
                style={[
                  SubmittedClaimsStyles.header,
                  { color: ThemeColors.white },
                ]}>
                {this.props.screenProps.t(
                  'submittedClaims:successMessageMultiple',
                )}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const renderConnectivity = () => {
  if (this.props.online) return null;
  return <Banner text={this.props.screenProps.t('dynamics:offlineMode')} />;
};

const Claims = () => {
  const projectClaims = this.props.savedProjectsClaims[this.projectDid];
  const numberOfSavedClaims =
    projectClaims && projectClaims.claims
      ? Object.keys(projectClaims.claims).length
      : 0;
  return (
    <Container>
      {this.renderConnectivity()}
      <StatusBar barStyle="light-content" />
      <Tabs
        style={{ backgroundColor: ThemeColors.blue_dark }}
        tabBarUnderlineStyle={{
          backgroundColor: ThemeColors.blue_lightest,
          height: 1,
        }}
        tabContainerStyle={{
          borderBottomColor: ThemeColors.blue,
          elevation: 0,
          borderBottomWidth: 1,
        }}>
        <Tab
          activeTabStyle={{ backgroundColor: ThemeColors.blue_dark }}
          tabStyle={{ backgroundColor: ThemeColors.blue_dark }}
          heading={this.renderSavedTab(numberOfSavedClaims)}>
          {this.props.isClaimsSubmitted
            ? this.renderAllSavedClaimsSubmitted()
            : this.renderSavedClaims(projectClaims)}
        </Tab>
        <Tab
          activeTabStyle={{ backgroundColor: ThemeColors.blue_dark }}
          tabStyle={{ backgroundColor: ThemeColors.blue_dark }}
          heading={this.props.screenProps.t('claims:submitted')}>
          {this.renderSubmittedClaims()}
        </Tab>
      </Tabs>
      {this.props.firstTimeClaim ? (
        <LightButton
          propStyles={{
            backgroundColor: ThemeColors.red,
            borderColor: ThemeColors.red,
            borderRadius: 0,
          }}
          onPress={() => {
            this.props.navigation.navigate('NewClaim');
          }}
          text={this.props.screenProps.t('claims:submitButton')}
        />
      ) : (
        <DarkButton
          onPress={() => this.props.navigation.navigate('NewClaim')}
          text={this.props.screenProps.t('claims:submitButton')}
        />
      )}
    </Container>
  );
};

export default Claims;
