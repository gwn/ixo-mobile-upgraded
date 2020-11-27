import * as React from 'react';
import {
  Image,
  Linking,
  Platform,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import styles from './RelayersDetails.styles';
import * as Images from '../../../assets/images';
import AssistantNavigator from '../../components/asssitantNavigator/AssistantNavigator';

interface RelayersDetailsProps {
  navigation: any;
  route: any;
}

const RelayersDetails: React.FC<RelayersDetailsProps> = ({
  navigation,
  route,
}) => {
  const { title, active } = route.params;

  const headListNames = [
    'My Stake',
    'Available',
    'Delegated',
    'Unbinding',
    'Reward',
  ];

  const headListValues = ['23,500 IXO', '5,352.002', '23,500.00', 0, 10.32];

  const detailText = [
    'Validate Node Operator',
    'Website',
    'Relayer ID',
    'Staking Yield (ARR)',
    'Voting Power/Total Stake',
    'Own Stake',
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#002334"
        translucent={Platform.OS === 'android'}
      />
      <View style={styles.viewContainer}>
        <View style={styles.headerContainer}>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => navigation.goBack()}>
            <Image source={Images.ArrowBack} style={styles.backButton} />
          </TouchableOpacity>
          <View style={styles.pageTitleContainer}>
            <Text style={styles.pageTitle}>{title}</Text>
          </View>
        </View>
        <View style={styles.relayerContainer}>
          <Image source={Images.Staking} style={styles.roundLogo} />
          <View style={styles.relayerTextContainer}>
            <Text style={styles.bigTitleText}>{title}</Text>
            <View style={active ? styles.activeWrapper : styles.notActive}>
              <Text style={styles.activeText}>
                {active ? 'ACTIVE' : 'NOT ACTIVE'}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.myStakeContainer}>
          <View style={styles.namesContainer}>
            {headListNames.map((name, index) => (
              <Text
                key={index}
                style={
                  index === 0
                    ? styles.containerHeaderText
                    : styles.containerText
                }>
                {name}
              </Text>
            ))}
          </View>
          <View style={styles.valuesContainer}>
            {headListValues.map((value, index) => (
              <Text
                key={index}
                style={
                  index === 0
                    ? [styles.containerHeaderText, { textAlign: 'right' }]
                    : [styles.containerText, { textAlign: 'right' }]
                }>
                {value}
              </Text>
            ))}
          </View>
        </View>
        <View style={styles.detailsContainer}>
          <View style={styles.detailNamesContainer}>
            {detailText.map((value, index) => (
              <Text key={index} style={styles.detailsText}>
                {value}
              </Text>
            ))}
          </View>
          <View style={styles.detailValuesContainer}>
            <Text style={styles.detailsValues}>ixo.world</Text>
            <View style={styles.imageContainer}>
              <Text
                style={styles.detailsValues}
                onPress={() => Linking.openURL('https://ixo.world/')}>
                ixo.world
              </Text>
              <Image source={Images.World} style={styles.world} />
            </View>
            <View style={styles.imageContainer}>
              <Text style={styles.detailsValues}>did:ixo:dsdjr0wern0e99</Text>
              <Image source={Images.EYE} style={styles.eye} />
            </View>
            <Text style={styles.detailsValues}>9.95%</Text>
            <Text style={styles.detailsValues}> 0.02%/33535.36</Text>
            <Text style={styles.detailsValues}>3,790/11.34%</Text>
          </View>
        </View>
      </View>
      <AssistantNavigator
        // @ts-ignore
        onLongPress={() => console.log('longPress')}
        onPress={() => navigation.navigate('Assistant')}
      />
    </SafeAreaView>
  );
};
export default RelayersDetails;
