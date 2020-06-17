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
    backgroundColor: 'white'
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
    <Paper className={`${root} ${data.happened ? done : notDone}`} onClick={() => changeHappened(data.id)}>
      {data.data}
    </Paper>
  )
}
