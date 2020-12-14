import * as React from 'react';
import {
  FlatList,
  Image,
  Platform,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import styles from './Wallet.styles';
import WalletItem from './WalletItem';
import * as Images from '../../../assets/images';
import AssistantNavigator from '../../components/asssitantNavigator/AssistantNavigator';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from "react";
import ValidationPipe from "../api/cosmosPipe/ValidationPipe";
import userSetWalletAccount from'../../redux/user/actions';
import {CosmosAccount, CosmosAccountResponse} from "../../models/CosmosResponses";

const FakeData = [
  {
    id: '1',
    title: 'FirstItem',
    image: Images.Wallet,
  },
  {
    id: '2',
    title: 'SecondItem',
    image: Images.Wallet,
  },
  {
    id: '3',
    title: 'ThirdItem',
    image: Images.Wallet,
  },
];

const FakePortfolioData = [
  {
    id: '3',
    title: 'FirstPortfolioItem',
    image: Images.Portfolio,
    itemCenteredTitle: 'Bitcoin',
    investmentName: 'BTC',
    portfolio:true,
  },
  {
    id: '4',
    title: 'FirstPortfolioItem',
    image: Images.Portfolio,
    itemCenteredTitle: 'Education Impact Bond ',
    investmentName: 'EDC',
    portfolio:true,
  },
];
const FakeStakingData = [
  {
    id: '7',
    title: 'FirstStakingItem',
    itemCenteredTitle: 'IDCC',
    image: Images.Staking,
    investmentName: 'IC',
  },
];

interface WalletProps {
  amount?: string;
  navigation: any;
}

const Wallet: React.FC<WalletProps> = ({ amount, navigation }) => {

  const validationPipe = new ValidationPipe();

  const userAccount:CosmosAccountResponse|CosmosAccount = useSelector((state) => state.userStore.account);
  const user = useSelector((state) => state.userStore.user);

  const dispatch = useDispatch();



  useEffect(()=>{validationPipe.getAccount(user.did).then((res)=>res.json()).then((resp)=> dispatch(userSetWalletAccount(resp))) },[]);

  console.log('User',user, 'UserAccount',userAccount);

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
            onPress={() => console.log('button menu press')}>
            <Image style={styles.button} source={Images.iconMenu} />
          </TouchableOpacity>
          <View style={styles.accountContainer}>
            <Text style={styles.accountText}>223jjshdaw49834521</Text>
            <Text style={styles.accountValueText}>Account value</Text>
          </View>
        </View>
        <View style={styles.moneyAmountContainer}>
          <Text style={styles.currency}>€</Text>
          <Text style={styles.amountGeneral}>3,432,023</Text>
        </View>
        <ScrollView>
          <View style={styles.categoryContainer}>
            <Text style={styles.categoryText}>Wallet</Text>
            <Text style={styles.categoryText}>€23</Text>
          </View>
          <View style={styles.flatlistWrapper}>
            <FlatList
              style={styles.walletContainer}
              data={FakeData}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <WalletItem
                  title={item.title}
                  onPress={() =>
                    navigation.navigate('Transactions', { itemID: item.id })
                  }
                  secondaryImage={Images.Fill}
                  image={item.image}
                />
              )}
            />
          </View>
          <View style={styles.flatlistWrapper}>
            <View style={styles.categoryContainer}>
              <Text style={styles.categoryText}>Portfolio</Text>
              <Text style={styles.categoryText}>€ 23,000</Text>
            </View>
            <View style={styles.flatlistWrapper}>
              <FlatList
                style={styles.walletContainer}
                data={FakePortfolioData}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <WalletItem
                    title={item.title}
                    onPress={() =>
                      navigation.navigate('Transactions', { itemID: item.id })
                    }
                    image={item.image}
                    itemCenteredTitle={item.itemCenteredTitle}
                    investmentName={item.investmentName}
                    portfolio={item.portfolio}
                  />
                )}
              />
            </View>
            <View style={styles.flatlistWrapper}>
              <View style={styles.categoryContainer}>
                <Text style={styles.categoryText}>Staking</Text>
                <Text style={styles.categoryText}>€ 324,201</Text>
              </View>
              <View style={styles.flatlistWrapper}>
                <FlatList
                  style={styles.walletContainer}
                  data={FakeStakingData}
                  keyExtractor={(item) => item.id}
                  renderItem={({ item }) => (
                    <WalletItem
                      title={item.title}
                      onPress={() => navigation.navigate('Relayers')}
                      image={item.image}
                      itemCenteredTitle={item.itemCenteredTitle}
                      investmentName={item.investmentName}
                    />
                  )}
                />
              </View>
            </View>
          </View>
        </ScrollView>
        <AssistantNavigator
          // @ts-ignore
          onLongPress={() => navigation.navigate('ScanQR')}
          onPress={() => navigation.navigate('Assistant')}
        />
      </View>
    </SafeAreaView>
  );
};

export default Wallet;
