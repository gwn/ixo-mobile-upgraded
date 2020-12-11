import socketio from './socket';

export default class ConnectionPipe {
  constructor() {}

  function(socketUrl, customData, path, protocol, protocolOptions) {
    const PROTOCOLS = socketio;
    protocol = protocol || 'socketio';
    const socketProtocol = PROTOCOLS[protocol];

    if (socketProtocol !== undefined) {
      return socketProtocol(socketUrl, customData, path, protocolOptions);
    }
    throw new Error(`Undefined socket protocol ${protocol}`);
  }
}
