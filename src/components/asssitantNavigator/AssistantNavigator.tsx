import { Image, TouchableOpacity, View } from 'react-native';
import styles from './AssistantNavigator.styles';
import * as Images from '../../../assets/images';
import * as React from 'react';

interface AssistantNavigatorProps {
  onPress: any;
  crossImage?: string;
  onCrossPress?: any;
  onLongPress?: any;
}

const AssistantNavigator: React.FC<AssistantNavigatorProps> = ({
  onPress,
  onCrossPress,
  crossImage,
  onLongPress,
}) => {
  return (
    <View style={styles.footer}>
      <TouchableOpacity
        style={styles.footerButton}
        onPress={onPress}
        onLongPress={onLongPress}>
        <Image source={Images.Group} style={styles.image} />
      </TouchableOpacity>
      {crossImage ? (
        <TouchableOpacity onPress={onCrossPress} style={styles.crossContainer}>
          <Image // @ts-ignore
            source={crossImage}
            style={styles.crossImage}
          />
        </TouchableOpacity>
      ) : (
        <></>
      )}
    </View>
  );
};

export default AssistantNavigator;
