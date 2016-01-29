import {
  CURRENT_USER,
  USER_SIGNED_OUT,
  SOCKET_CONNECTED,
  SESSIONS_ERROR
} from '../constants';


const initialState = {
  currentUser: null
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case CURRENT_USER:
      return { ...state, currentUser: action.currentUser, error: null };

    case USER_SIGNED_OUT:
      return initialState;

    case SOCKET_CONNECTED:
      return { ...state, socket: action.socket, channel: action.channel };

    case SESSIONS_ERROR:
      return { ...state, error: action.error };

    default:
      return state;
  }
}
