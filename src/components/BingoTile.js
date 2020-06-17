import React from 'react'
import { Paper, makeStyles } from '@material-ui/core'
import { useDispatch } from 'react-redux';

import { setHappened } from '../redux/actions';

const useStyles = makeStyles({
  done: {
    backgroundColor: 'green',
    color: 'white'
  },
  notDone: {
    background: 'rgba(255, 255, 255, 0.5)'
  },
  root: {
    height: '100%',
    padding: 10,
    fontFamily: 'roboto',
    fontSize: 24,
    '&:hover': {
      cursor: 'pointer'
    }
  }
});

export default function BingoTile({data}) {
  const { done, notDone, root } = useStyles();
  const dispatch = useDispatch();

  const changeHappened = (id) => {
    dispatch(setHappened(id))
  }

  return (
    <Paper
      className={`${root} ${data.happened ? done : notDone}`}
      variant='outlined'
      onClick={() => changeHappened(data.id)}
    >
      {data.data}
    </Paper>
  )
}
