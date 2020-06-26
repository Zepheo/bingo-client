import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import socketMiddleware from './middleware/socket';
import reducer from './reducers';

const store = process.env.NODE_ENV === 'development' ? createStore(reducer, composeWithDevTools(applyMiddleware(socketMiddleware, thunk))): createStore(reducer, applyMiddleware(socketMiddleware, thunk));

export default store;