
export default class ValidationPipe {
    constructor() {
    }


    getAccount(account:string ) {
        return fetch(
            `https://ixo-testnet-validator-mt.simply-vc.com.mt/api/auth/accounts/${account}`, {
                method: 'Get'
                ,
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                }
                ,
            }
            ,
        ).then(async (resp) => resp);
    }

    getTransaction(transactionHash:string ) {
       return   fetch(
            `https://ixo-testnet-validator-mt.simply-vc.com.mt/api/txs/${transactionHash}`, {
                method: 'Get'
                ,
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                }

            }
            ,
        ).then((resp) => resp.json()).then((result)=>result)
    }
}
