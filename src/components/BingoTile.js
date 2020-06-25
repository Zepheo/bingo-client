import React from 'react'
import { Paper, makeStyles } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux';

import { setTicked, userTick } from '../redux/actions';

const useStyles = makeStyles({
  done: {
    backgroundColor: 'green',
    color: 'white'
  },
  notDone: {
    background: 'rgba(255, 255, 255, 0.5)'
  },
  root: {
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    padding: 10,
    fontFamily: 'roboto',
    fontSize: 24,
    '&:hover': {
      cursor: 'pointer'
    }
  }
});

export default function BingoTile({data, index}) {
  const { room: { name }} = useSelector(s => s.User)
  const { done, notDone, root } = useStyles();
  const dispatch = useDispatch();

  const changeTicked = (id) => {
    dispatch(setTicked(id))
    dispatch(userTick({index, name}))
  }

  return (
    <Paper
      className={`${root} ${data.ticked ? done : notDone}`}
      variant='outlined'
      onClick={() => changeTicked(data.id)}
    >
      {data.data}
    </Paper>
  )
}
