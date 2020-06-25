import { combineReducers } from 'redux';
import Bingo from './Bingo';
import User from './User';
import Log from './Log';

const rootReducer = combineReducers({Bingo, User, Log});

export default rootReducer;