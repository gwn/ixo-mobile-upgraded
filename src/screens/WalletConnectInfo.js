import React from 'react';
import { useSelector } from 'react-redux';
import wc from '../utils/walletconnect'
import GenericModal from '../components/GenericModal';

const WalletConnectInfo = ({ navigation }) => {
  const
    wcStore = useSelector(state => state.wcStore),
    {name: dappName, url: dappUrl } = wcStore.info.peerMeta

  return (
      <GenericModal
        heading={dappName}
        paragraph={
          `You are connected to the dapp "${dappName}" at "${dappUrl}".`}
        buttonText='Disconnect'
        onPressButton={async () => {
          try {
            await wc.killSession()
            navigation.goBack()
          } catch (e) {
            console.error(e)
          }
        }}
        onClose={() => navigation.goBack()}
        onPressInfo={() => { }}
      />
  );
};

export default WalletConnectInfo;
