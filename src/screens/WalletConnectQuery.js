import React from 'react';
import { useSelector } from 'react-redux';
import GenericModal from '../components/GenericModal';
import { getSignature } from '../utils/sovrin'
import wc from '../walletconnect'

const WalletConnectQuery= ({ route, navigation }) => {
  const
    wcStore = useSelector(state => state.wcStore),
    { name: dappName } = wcStore.info.peerMeta,
    { id: reqId, params: [{ data: reqData }] } = route.params

  return (
    <GenericModal
      heading={`"${dappName}" asks for signature`}
      paragraph={'Data to be signed:\n\n' + reqData}
      buttonText='Sign'
      secondaryButtonText='Reject'
      onPressButton={async () => {
        try {
          // const signedData = await getSignature(reqData)
          const signedData = reqData

          await wc.approveRequest({
            id: reqId,
            result: signedData,
          })

          navigation.goBack()

        } catch (e) {
          console.error(e)
        }
      }}
      onPressSecondaryButton={async () => {
        try {
          await wc.rejectRequest({
            id: reqId,
            error: {
              code: 1,
              message: 'User rejected',
            },
          })
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

export default WalletConnectQuery;
