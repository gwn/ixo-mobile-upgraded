import React, { useState } from 'react';
import { Modal, StatusBar } from 'react-native';
import { View } from 'native-base';
import { RNCamera } from 'react-native-camera';

import ScanQRStyles from '../styles/ScanQR';

const ScanQR = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [type, setType] = useState(RNCamera.Constants.Type.back);
  let _projectScan = true;

  return (
    <View style={[ScanQRStyles.wrapper]}>
      <StatusBar barStyle="light-content" />
      <Modal
        onRequestClose={() => null}
        animationType="slide"
        transparent={true}
        visible={modalVisible}>
        {_projectScan
          ? this.renderProjectScanned()
          : this.renderKeySafeScannedModal()}
      </Modal>
      <RNCamera
        style={{ flex: 1 }}
        type={type}
        onBarCodeRead={this._handleBarCodeRead}
        flashMode={RNCamera.Constants.FlashMode.on}
        permissionDialogTitle={'Permission to use camera'}
        permissionDialogMessage={
          'We need your permission to use your camera phone'
        }>
        {this.renderInfoBlocks()}
      </RNCamera>
    </View>
  );
};

export default ScanQR;
