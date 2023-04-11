import { createStore, combineReducers } from 'redux';
import { textReducer, authReducer } from './reducers';

const rootReducer = combineReducers({
  text: textReducer,
  auth: authReducer, 
});

const store = createStore(rootReducer);

export default store;