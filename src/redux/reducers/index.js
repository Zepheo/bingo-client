import { combineReducers } from 'redux';
import Bingo from './Bingo';
import User from './User';

const rootReducer = combineReducers({Bingo, User});

export default rootReducer;