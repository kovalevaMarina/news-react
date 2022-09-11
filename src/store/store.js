import { combineReducers, createStore } from 'redux';
import { reducerUser } from '../modules/user/reducer';
import { reducerNews } from '../modules/news/reducer';

const allReducer = combineReducers({
  users: reducerUser,
  news: reducerNews,
});

const store = createStore(allReducer);

export default store;
