import React from 'react'
import { Paper, makeStyles, Typography } from '@material-ui/core'
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
    height: '17vh',
    width: '17vh',
    fontFamily: 'roboto',
    paddingLeft: 5,
    paddingRight: 5,
    fontSize: 20,
    '&:hover': {
      cursor: 'pointer'
    }
  },
  rootNoHover: {
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: '17vh',
    width: '17vh',
    fontFamily: 'roboto',
    paddingLeft: 5,
    paddingRight: 5,
    fontSize: 20,
  }
});

export default function BingoTile({data, index}) {
  const { room: { name }} = useSelector(s => s.User)
  const { done, notDone, root, rootNoHover } = useStyles();
  const dispatch = useDispatch();

  const changeTicked = (id) => {
    dispatch(setTicked(id))
    dispatch(userTick({index, name, id: data.id, text: data.data}))
  }

  if (data.free) {
    return (
      <Paper
      className={`${rootNoHover} ${data.ticked ? done : notDone}`}
      variant='outlined'
    >
      <Typography>
        {data.data}
      </Typography>
    </Paper>
    )
  }

  return (
    <Paper
      className={`${root} ${data.ticked ? done : notDone}`}
      variant='outlined'
      onClick={() => changeTicked(data.id)}
    >
      <Typography>
        {data.data}
      </Typography>
    </Paper>
  )
}
