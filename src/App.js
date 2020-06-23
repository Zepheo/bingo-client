import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import io from 'socket.io-client';

// import history from './utils/history';

import Landing from './pages/Landing';
import PlayBingo from './pages/PlayBingo';
import Create from './pages/Create';
import Join from './pages/Join';
import { Container, makeStyles } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser, setUser, addCards, addActiveRooms } from './redux/actions';

const useStyles = makeStyles(theme => ({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
    marginTop: 30,
  }
}))

const socketUrl = process.env.NODE_ENV === 'development' ? 'localhost:8080': 'mighty-ridge-28972.herokuapp.com';
const socket = io(socketUrl, {
  'reconnection': false
});

function App() {
  const {wrapper} = useStyles();
  const dispatch = useDispatch();
  const { User } = useSelector(s => s);
  // console.log(process.env.NODE_ENV)

  useEffect(() => {
    socket.on('roomCreated', (data) => {
      dispatch(addCards(data.cards))
      dispatch(setUser(data.username, data.roomname))
    })
    socket.on('roomCreationError', (data) => {
      console.log(data);
    })
    socket.on('roomJoined', (data) => {
      dispatch(addCards(data.cards))
      dispatch(setUser(data.username, data.roomname))
    })
    socket.on('activeRooms', (data) => {
      // console.log(data)
      dispatch(addActiveRooms(data))
    })
    
    return () => {
      socket.close();
      dispatch(removeUser());
    }
  }, [dispatch])


  const createRoom = ({name, room, password, zones}) => {
    socket.emit('create', { name, room, password, zones})
  }

  const joinRoom = ({name, room, password}) => {
    socket.emit('join', {name, roomname: room.name, password})
  }

  return (
    <BrowserRouter>
      {/* <Navigation /> */}
      <Container maxWidth='md' className={wrapper}>
        <Switch>
          <Route exact path='/' render={() => User.name === '' ? <Landing /> : <PlayBingo />} />
          <Route path='/create' render={() => <Create createRoom={createRoom} />} />
          <Route path='/join' render={() => <Join joinRoom={joinRoom} />} />
          <Route path='/bingo' component={PlayBingo} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;
