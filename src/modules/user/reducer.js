import { LOGIN, USER_INFO } from './type';

const defaultState = {
  login: null,
  info: {
    login: 'Admin',
    password: '12345',
    username: 'Marina Kovaleva',
    timeSince: 'With us since 2021',
    location: 'Lives in Dnipro, Ukraine',
    language: 'English , Русский , Українська',
    followers: 25,
  },
};

const reducerUser = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, login: action.payload };
    case USER_INFO:
      return { ...state, info: action.payload };
    default:
      return state;
  }
};

export { reducerUser };
