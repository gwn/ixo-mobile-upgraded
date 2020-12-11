import * as React from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  Platform,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import styles from './Transactions.styles';
import * as Images from '../../../assets/images';
import BarChartBig from '../../components/barChart/BarChart';
import TransactionItem from './TransactionItem';

const FakeTransctionsData = [
  {
    id: '1',
    title: 'IXO 0.00021',
    image: Images.BuyArrow,
    date: 'Jul 15',
  },
  {
    id: '2',
    title: 'IXO 0.00023',
    image: Images.SellArrow,
    date: 'Jul 11',
  },
];

interface TransactionsProps {
  amount?: string;
  navigation: any;
  route: any;
  image?: string;
  currencyName?: string;
  secondaryImage?: string;
  currency?: string;
}

const Transactions: React.FC<TransactionsProps> = ({
  currencyName,
  navigation,
  route,
}) => {
  const { itemID } = route.params;
  console.log(itemID);

  const percentIsPositive = true;

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
          <View style={styles.accountContainer}>
            <ImageBackground source={Images.Wallet} style={styles.placeholder}>
              {currencyName ? (
                <Text style={styles.currencyName}>{currencyName}</Text>
              ) : (
                <Image
                  // @ts-ignore
                  style={styles.imageSecondary}
                  // @ts-ignore
                  source={Images.Fill}
                />
              )}
            </ImageBackground>
            <Text style={styles.currencyText}>IXO</Text>
          </View>
        </View>
        <View style={styles.moneyAmountContainer}>
          <Text style={styles.currency}>€</Text>
          <Text style={styles.amountGeneral}>3,01</Text>
        </View>
        <View style={styles.percentAmountContainer}>
          {percentIsPositive ? (
            <Text style={styles.percentPositive}>
              0.46% <Text style={styles.arrow}> ^</Text>
            </Text>
          ) : (
            <Text style={styles.percentNegative}>
              0.03% <Text style={styles.arrow}> ˅</Text>
            </Text>
          )}
        </View>
        <View style={styles.barChartContainer}>
          <BarChartBig />
        </View>
        <Image source={Images.Rectangle} style={styles.rectangle} />
      </View>
      <View style={styles.transactionsTextContainer}>
        <Text style={styles.transactionsText}>Transactions</Text>
      </View>
      <View style={styles.transactionsContainer}>
        <Text style={styles.transactionsTitle}>This Month</Text>
        <TransactionItem
          image={Images.BuyArrow}
          title={'IXO 0.00021'}
          date={'Aug 12'}
          onPress={() => navigation.navigate('Modal')}
        />
        <Text style={styles.transactionsTitle}>July</Text>
        <View style={styles.flatlistWrapper}>
          <FlatList
            style={styles.transactionsListContainer}
            data={FakeTransctionsData}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TransactionItem
                title={item.title}
                onPress={() => navigation.navigate('Modal')}
                image={item.image}
                date={item.date}
              />
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Transactions;
