import React, { useState } from 'react'
import { makeStyles, Button } from '@material-ui/core'

import Bingo from '../components/Bingo'
import BingoBoard from '../components/BingoBoard'
import Image from '../img/GnomeHeader02-Header-110215.jpg'
import { useSelector, useDispatch } from 'react-redux'
import { resetBingo, reset } from '../redux/actions'

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundImage: `url(${Image})`,
      backgroundSize: 'cover'
    }
  }
}))

export default function PlayBingo() {
  const { showBingo, hasHadBingo } = useSelector((s) => s.User)
  const dispatch = useDispatch();
  useStyles();

  const playAgain = () => {
    dispatch(reset());
    dispatch(resetBingo())
  }

  return (
    <>
      {showBingo ? <Bingo /> : <BingoBoard />}
      {hasHadBingo && <Button variant="contained" color="primary" onClick={playAgain}>Play again</Button>}
    </>
  )
}
