import React from 'react';
import { Button, Text, View } from 'react-native';

interface ModalProps {
  navigation: any;
}

const Modal: React.FC<ModalProps> = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        backgroundColor: 'transparent',
      }}>
      <View
        style={{
          height: '50%',
          width: '100%',
          backgroundColor: '#fff',
          justifyContent: 'center',
        }}>
        <Text>Testing a modal with transparent and background</Text>
        <Button title={'Try'} onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
};
export default Modal;
