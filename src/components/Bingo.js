import React from 'react'
import { makeStyles, Button } from '@material-ui/core'
import { useDispatch } from 'react-redux';
import {reset} from '../redux/actions';

const useStyles = makeStyles({
  bingo: {
    color: 'gold',
    fontSize: 200
  }
})

export default function Bingo({gotBingo}) {
  const {bingo} = useStyles();
  const dispatch = useDispatch();

  const playAgain = () => {
    gotBingo(false)
    dispatch(reset());
  }
  
  return (
    <>
      <p className={bingo}>
        BINGO
      </p>
      <Button variant="contained" color="primary" onClick={playAgain}>Play again</Button>
    </>
  )
}
