import io from 'socket.io-client';

const socketUrl = process.env.NODE_ENV === 'development' ? 'localhost:8080': 'mighty-ridge-28972.herokuapp.com';
const config = {
  'reconnection': false
};
const socket = io(config);

const socketMiddleware = (store) => (next) => (action) => {
    if (typeof action === 'function') {
      return next(action);
    }

    const {
      event,
      leave,
      handle,
      emit,
      payload,
      ...rest
    } = action;

    if (!event) {
      return next(action);
    }

    if (leave) {
      socket.removeListener(event);
    }

    if (emit) {
      socket.emit(event, payload);
      return;
    }

    let handleEvent = handle;
    if (typeof handleEvent === 'string') {
      handleEvent = result => store.dispatch({ type: handle, result, ...rest });
    }
    return socket.on(event, handleEvent);
  // };
}

export default socketMiddleware;