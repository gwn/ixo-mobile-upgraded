import { WC_CONNECT, WC_DISCONNECT, WC_ERROR } from './actions';

const initialState = {
  connected: false,
  info: null,
  error: null,
};

export const wcReducer = (state = initialState, action) => {
  switch (action.type) {
    case WC_CONNECT:
      return {
        ...state,
        connected: true,
        info: action.payload,
      };

    case WC_DISCONNECT:
      return {
        ...state,
        connected: false,
      };

    case WC_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
