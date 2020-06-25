import React from 'react'
import { makeStyles, Button } from '@material-ui/core'

import Bingo from '../components/Bingo'
import BingoBoard from '../components/BingoBoard'
import Image from '../img/GnomeHeader02-Header-110215.jpg'
import { useSelector, useDispatch } from 'react-redux'
import { resetBingo, reset, resetTicked, showBoard } from '../redux/actions'
import Userlist from '../components/Userlist'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    height: '90%'
  },
  '@global': {
    body: {
      backgroundImage: `url(${Image})`,
      backgroundSize: 'cover'
    }
  }
}))

export default function PlayBingo() {
  const { showBingo, hasHadBingo, room: { name } } = useSelector((s) => s.User)
  const dispatch = useDispatch();
  const { container } = useStyles();

  const playAgain = () => {
    dispatch(reset());
    dispatch(resetBingo())
    dispatch(resetTicked(name))
  }

  const handleShowBoard = () => {
    dispatch(showBoard())
  }

  return (
    <>
      <div className={container}>
        {showBingo ? <Bingo /> : <BingoBoard />}
        <Userlist />
      </div>
        {showBingo && <Button variant="contained" color="primary" onClick={handleShowBoard}>Show board</Button>}
        {hasHadBingo && <Button variant="contained" color="secondary" onClick={playAgain}>Play again</Button>}
    </>
  )
}
