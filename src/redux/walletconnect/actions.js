export const WC_CONNECT = 'WC_CONNECT';
export const WC_DISCONNECT = 'WC_DISCONNECT';
export const WC_ERROR = 'WC_ERROR';


export const handleWCConnection = connectionInfo => ({
  type: WC_CONNECT,
  payload: connectionInfo,
});

export const handleWCDisconnection = () => ({
  type: WC_DISCONNECT,
});

export const handleWCError = err => ({
  type: WC_ERROR,
  payload: err,
});
