import { createStore } from 'redux';
import Bingo from './reducers';

const store = createStore(Bingo);

export default store;