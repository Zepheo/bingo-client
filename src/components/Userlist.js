import React from 'react'
import { makeStyles, Paper, List, ListItem, Divider, Typography } from '@material-ui/core'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { subscribeTo, addUsers, updateTicked } from '../redux/actions';
import UserListItem from './UserListItem';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    width: '20vw'
  },
  header: {
    textAlign: 'center'
  }
}))

export default function Userlist() {
  const { room: { users } } = useSelector(s => s.User)
  const dispatch = useDispatch();
  const { container, header } = useStyles();
  
  useEffect(() => {
    dispatch(subscribeTo('userJoined', (data) => {
      dispatch(addUsers(data))
    }))
    dispatch(subscribeTo('ticked', (data) => {
      dispatch(updateTicked(data))
    }))
  }, [dispatch])

  return (
    <Paper className={container}>
      <Typography variant='h6' className={header}>
        SCOREBOARD
      </Typography>
      <List>
        {users.map((user, i) => (
          <>
          <ListItem>
            <UserListItem user={user} key={i}/>
          </ListItem>
          {i < users.length -1 && <Divider />}
          </>
        ))}
      </List>
    </Paper>
  )
}
