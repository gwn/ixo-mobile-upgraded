export const IXO_RESULT = 'IXO_RESULT';
import { Ixo } from 'ixo-module';

export const initIxo = (BLOCKCHAIN_IP, BLOCK_SYNC_URL) => {
  if (BLOCKCHAIN_IP && BLOCK_SYNC_URL) {
    const ixo = new Ixo(BLOCKCHAIN_IP, BLOCK_SYNC_URL);
    return {
      type: IXO_RESULT,
      payload: {
        ixo: ixo,
        error: {},
      },
    };
  } else {
    return {
      type: IXO_RESULT,
      payload: {
        ixo: null,
        error: 'Environment not setup for Blockchain node',
      },
    };
  }
};
