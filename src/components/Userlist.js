import React from 'react'
import { makeStyles, Paper, List, ListItem, Divider, Typography } from '@material-ui/core'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { subscribeTo, addUsers, updateTicked, addMessage } from '../redux/actions';
import UserListItem from './UserListItem';
import Log from './Log';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    width: '20vw',
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    textAlign: 'center',
  },
  hideScroll: {
    flex: 1,
    height: '100%',
    overflow: 'hidden'
  },
  userContainer: {
    height: '100%',
    overflowY: 'auto',
    scrollbarWidth: 'none',
    '&::-webkit-scrollbar': {
      display:'none'
    },
  }
}))

export default function Userlist() {
  const { room: { users } } = useSelector(s => s.User)
  const dispatch = useDispatch();
  const { container, header, userContainer, hideScroll } = useStyles();
  
  useEffect(() => {
    dispatch(subscribeTo('userJoined', (data) => {
      dispatch(addUsers(data))
    }))
    dispatch(subscribeTo('ticked', ({id, name, ticked, logMsg}) => {
      dispatch(addMessage(logMsg))
      dispatch(updateTicked({id, name, ticked}))
    }))
  }, [dispatch])

  return (
    <Paper className={container}>
      <Typography variant='h6' className={header}>
        SCOREBOARD
      </Typography>
      <div className={hideScroll}>
        <List className={userContainer}>
          {users.map((user, i) => (
            <React.Fragment key={i}>
            <ListItem >
              <UserListItem user={user} />
            </ListItem>
            {i < users.length -1 && <Divider />}
            </React.Fragment>
          ))}
        </List>
      </div>
      <Log />
    </Paper>
  )
}
