import * as React from 'react';
import { useMemo, useState } from 'react';
import {
  FlatList,
  Image,
  Platform,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import styles from './Relayers.styles';
import * as Images from '../../../assets/images';
import AssistantNavigator from '../../components/asssitantNavigator/AssistantNavigator';
import RelayersItem from './RelayersItem';

const FakeRelayersData = [
  {
    id: '1',
    title: 'stake.zone',
    image: Images.Staking,
    percent: '9.95%',
    active: true,
  },
  {
    id: '2',
    title: 'IZO',
    image: Images.Staking,
    percent: '9.95%',
    active: true,
  },
  {
    id: '3',
    title: 'Public Payments',
    image: Images.Staking,
    percent: '9.95%',
    active: false,
  },
  {
    id: '4',
    title: 'Citadel.one',
    image: Images.Staking,
    percent: '9.95%',
    active: false,
  },
  {
    id: '5',
    title: 'CCN',
    image: Images.Staking,
    percent: '9.95%',
    active: true,
  },
  {
    id: '6',
    title: 'SG-1',
    image: Images.Staking,
    percent: '9.95%',
    active: false,
  },
  {
    id: '7',
    title: 'Swiss Staking',
    image: Images.Staking,
    percent: '9.95%',
    active: false,
  },
  {
    id: '8',
    title: 'Any Labs',
    image: Images.Staking,
    percent: '9.95%',
    active: true,
  },
  {
    id: '9',
    title: 'Everstake',
    image: Images.Staking,
    percent: '9.95%',
    active: false,
  },
];

interface RelayersProps {
  amount?: string;
  navigation: any;
  route: any;
  currency?: string;
}

const Relayers: React.FC<RelayersProps> = ({ navigation }) => {
  let [isActive, setIsActive] = useState(false);

  const [query, setQuery] = useState('');

  const list = useMemo(
    () => FakeRelayersData.filter((item) => item.title.includes(query)),
    [query],
  );
  let [activeList, setActiveList] = useState(list);

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
            <Image source={Images.Round} style={styles.roundLogo} />
            <Text style={styles.pageTitle}>Impact Relayers</Text>
          </View>
        </View>
        <View style={styles.inputAndButtonsContainer}>
          <TextInput
            style={styles.inputContainer}
            placeholder="  Search"
            placeholderTextColor="grey"
            onChangeText={(text) => {
              setQuery(text);
            }}
          />
          <TouchableOpacity
            style={styles.buttonAll}
            onPress={() => {
              console.log('All press');
              setIsActive(!isActive);
            }}>
            <Text style={[styles.buttonText, { opacity: !isActive ? 1 : 0.5 }]}>
              All
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonActive}
            onPress={() => {
              console.log('Active press');
              setIsActive(!isActive);
              setActiveList(list.filter((item) => item.active));
            }}>
            <Text style={[styles.buttonText, { opacity: isActive ? 1 : 0.5 }]}>
              Active
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.filtersContainer}>
          <TouchableOpacity style={styles.nameFilter}>
            <Text style={styles.buttonFiltersText}> # ^ Name</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.comissionFilter}>
            <Text style={styles.buttonFiltersText}>Comission ^ </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.flatlistWrapper}>
          <FlatList
            style={styles.relayersListContainer}
            data={!isActive ? list : activeList}
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => (
              <RelayersItem
                index={index}
                title={item.title}
                onPress={() =>
                  navigation.navigate('RelayersDetails', {
                    title: item.title,
                    active: item.active,
                  })
                }
                image={item.image}
                percent={item.percent}
                active={item.active}
              />
            )}
          />
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
export default Relayers;
