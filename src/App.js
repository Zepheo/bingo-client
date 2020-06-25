import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import PlayBingo from './pages/PlayBingo';
import Create from './pages/Create';
import Join from './pages/Join';
import ProtectedRoute from './components/ProtectedRoute'
import { makeStyles } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { subscribeTo, addActiveRooms, unsubscribeFrom, logOut } from './redux/actions';

const useStyles = makeStyles(theme => ({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
    width: '100wv',
    height: '100vh'
  }
}))


function App() {
  const {wrapper} = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(subscribeTo('activeRooms', (data) => {
      dispatch(addActiveRooms(data));
    }))
    
    return () => {
      dispatch(unsubscribeFrom('activeRooms'))
      dispatch(logOut());
    }
  }, [dispatch])

  return (
    <BrowserRouter>
      <div className={wrapper}>
        <Switch>
          <Route exact path='/' component={Landing}/>
          <Route path='/create' component={Create} />
          <Route path='/join' component={Join} />
          <ProtectedRoute path='/bingo' component={PlayBingo} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
