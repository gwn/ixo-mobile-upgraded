import '../../../../shim.js';
import * as cosmos from '../../../cosmosjsRN/cosmos.js';

export default class CosmosPipe {
  constructor() {}

  getIxoAddress=(mnemonic:string)=>{
    const chainId = 'pandora-1';
    const ixo = cosmos.network(
        'https://ixo-testnet-validator-mt.simply-vc.com.mt/api',
        chainId,
    );
    ixo.getIxoAddress(mnemonic);
  }

  sendMessage = (receiverAddress) => {
    const mnemonic =
      'oven fade spider sketch episode under glory flee summer kitchen stage ride window polar farm large monkey tortoise assault jar swift believe response degree';
    const chainId = 'pandora-1';
    const ixo = cosmos.network(
      'https://ixo-testnet-validator-mt.simply-vc.com.mt/api',
      chainId,
    );
    ixo.setBech32MainPrefix('ixo');
    ixo.setPath("m/44'/118'/0'/0/0");
    const address = ixo.getAddress(mnemonic);
    console.log('Address', address);

    console.log('ADDRESS RECEIVER',receiverAddress)
    const ecpairPriv = ixo.getECPairPriv(mnemonic);

    return ixo.getAccounts(address).then((data) => {
      let stdSignMsg = ixo.newStdMsg({
        msgs: [
          {
            type: 'cosmos-sdk/MsgSend',
            value: {
              amount: [
                {
                  amount: String(100000), // 6 decimal places (1000000 uixo = 1 IXO)
                  denom: 'uixo',
                },
              ],
              from_address: address,
              to_address:  receiverAddress,
            },
          },
        ],
        chain_id: chainId,
        fee: {
          amount: [{ amount: String(5000), denom: 'uixo' }],
          gas: String(200000),
        },
        memo: '',
        account_number: String(data.result.value.account_number),
        sequence: String(data.result.value.sequence),
      });

      const signedTx = ixo.sign(stdSignMsg, ecpairPriv);

      return ixo.broadcast(signedTx).then((response) => response);
    });
  };
}
