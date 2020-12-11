import React from 'react';
import {
  Image,
  ImageBackground,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import styles from './WalletItem.styles';
import LineChartSmall from '../../components/lineChart/LineChart';

interface WalletItemProps {
  title?: string;
  image: string;
  secondaryImage?: string;
  onPress?: any;
  titleStyle?: TextStyle;
  itemCenteredTitle?: string;
  leftImageContainerStyle?: ViewStyle;
  investmentName?: string;
  portfolio?:boolean;
}

const WalletItem: React.FC<WalletItemProps> = ({
                                                   title,
                                                 onPress,
                                                 image,
                                                 itemCenteredTitle,
                                                 secondaryImage,
                                                 investmentName,
                                                 portfolio,
                                               }) => {
  // @ts-ignore
  let percentIsPositive = false;
  return (
      <TouchableOpacity style={styles.mainContainer} onPress={onPress}>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <ImageBackground
                // @ts-ignore
                source={image}
                style={ portfolio !== true ? styles.image : [styles.image,styles.portfolioBackground]}>
              {itemCenteredTitle ? (
                  <Text style={styles.investmentName}>{investmentName}</Text>
              ) : (
                  <Image
                      // @ts-ignore
                      style={styles.imageSecondary}
                      // @ts-ignore
                      source={secondaryImage}
                  />
              )}
            </ImageBackground>
          </View>
          {itemCenteredTitle ? (
              <Text style={styles.titleCenteredText}>{itemCenteredTitle}</Text>
          ) : (
              <View style={styles.percentContainer}>
                <Text style={styles.titleText}>{title}</Text>
                {percentIsPositive ? (
                    <Text style={styles.percentPositive}>^ 0.06%</Text>
                ) : (
                    <Text style={styles.percentNegative}>˅ -0.03%</Text>
                )}
                <View style={styles.chartWrapper}>
                  <LineChartSmall />
                </View>
              </View>
          )}
          <View style={styles.percentContainer}>
            <Text style={styles.amountStyle}>€3.01</Text>
            <Text style={styles.subAmount}>32,021 IXO</Text>
          </View>
        </View>
      </TouchableOpacity>
  );
};

export default WalletItem;
