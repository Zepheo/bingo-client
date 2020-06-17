import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import Bingo from './reducers';

const store = createStore(Bingo, composeWithDevTools());

export default store;