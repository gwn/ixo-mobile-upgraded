import SocketIOClient from 'socket.io-client';
import IxoHelper from './ixoHelper';
import { env } from '../config';

export default class Sockets {
  private sockets: any;
  private ixoHelper: IxoHelper = new IxoHelper();
  constructor() {
    this.sockets = SocketIOClient(env.REACT_APP_BLOCK_SYNC_URL);
    this.initSocketForClaims();
  }

  initSocketForClaims() {}
}
