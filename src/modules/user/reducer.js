import { ADD_USERNAME, ADD_PASSWORD } from './type';

const defaultState = {
  username: '',
  password: '',
};

const reducerUser = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_USERNAME:
      return { ...state, username: action.payload };
    case ADD_PASSWORD:
      return { ...state, password: action.payload };
    default:
      return state;
  }
};

export { reducerUser };
