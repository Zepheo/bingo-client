import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import socketMiddleware from './middleware/socket';
import reducer from './reducers';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(socketMiddleware, thunk)));

export default store;