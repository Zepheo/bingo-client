import React from 'react'
import { Button, makeStyles } from '@material-ui/core'
import { useHistory } from 'react-router-dom';
// import history from '../utils/history';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  button: {
    margin: 10
  }
}))

export default function Landing() {
  const {wrapper, button} = useStyles();
  const history = useHistory();

  const goTo = (page) => {
    history.push(page)
  }

  return (
    <div className={wrapper}>
      <h1>
        Välkommen till Bingo        
      </h1>
      <div>
        <Button
          variant="contained"
          color="primary"
          className={button}
          onClick={() => goTo('create')}
        >
          Create room
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className={button}
          onClick={() => goTo('join')}
        >
          Join room
        </Button>
      </div>
    </div>
  )
}
