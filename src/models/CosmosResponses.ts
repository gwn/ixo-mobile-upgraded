//Account Response

export type PublicKey ={
    type:string,
    value:string,
}

export type CosmosCoin={
    denom:string,
    amount:string|number,
}

export type CosmosValue ={
    address:string,
    coins:CosmosCoin[],
    public_key:PublicKey,
    account_number:string|number,
    sequence:string|number
}

export type CosmosAccount ={
 type:string,
    value:CosmosValue

}
export type CosmosAccountResponse ={
    height:string|number,
    result:CosmosAccount,
}

//Transaction Response

export type CosmosTransactionLog={
    msg_index:number
    success:boolean,
    log:string
}

export type CosmosEventAttribute={
    type:string;
    value:string;
}

export type CosmosEvent={
    type:string,
    attributes:CosmosEventAttribute[],
}



export type CosmosMsgValue ={
    from_address:string,
    to_address:string,
    amount:CosmosCoin[]
}


// TODO add here enum with possible message types
 export type CosmosMSG={
    type:string,
     value:CosmosMsgValue
 }

 export type CosmosFee={
    amount:CosmosCoin,
     gas:number|string,
 }

export type CosmosSignature = {
    pub_key:PublicKey,
    signature:string,
}

// TODO add here enum with possible message types
export type CosmosTX ={
    type:string,
    value:CosmosMSG[],
    fee:CosmosFee,
    signatures:CosmosSignature[],
    memo:string,
}

export type CosmosTransactionResponse={
    height:string|number,
    txhash:string,
    raw_log:string|[],
    logs:CosmosTransactionLog[],
    gas_wanted:string|number,
    gas_used: string|number,
    events:CosmosEvent[],
    tx:CosmosTX,
    timestamp:string|Date,
}
