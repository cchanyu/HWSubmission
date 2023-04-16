import { createStore, combineReducers } from 'redux';
import { textReducer } from './reducers';

const rootReducer = combineReducers({
  text: textReducer,
});

const store = createStore(rootReducer);

export default store;