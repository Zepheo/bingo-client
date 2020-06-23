import React from 'react'
import { makeStyles, Button } from '@material-ui/core'
import { useDispatch } from 'react-redux';
import {reset, showBoard, resetBingo} from '../redux/actions';

const useStyles = makeStyles({
  bingo: {
    color: 'gold',
    fontSize: 200
  }
})

export default function Bingo() {
  const {bingo} = useStyles();
  const dispatch = useDispatch();

  const playAgain = () => {
    dispatch(reset());
    dispatch(resetBingo())
  }

  const handleShowBoard = () => {
    dispatch(showBoard())
  }
  
  return (
    <>
      <p className={bingo}>
        BINGO
      </p>
      <Button variant="contained" color="primary" onClick={handleShowBoard}>Show board</Button>
    </>
  )
}
