import React from 'react'
import { makeStyles, Button, Modal } from '@material-ui/core'

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
  bingo: {
    color: 'gold',
    fontSize: 200,
    textAlign: 'center'
  },
  button: {
    alignSelf: 'center',
    justifySelf: 'center',
    margin: 10
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
  const { container, bingo, button } = useStyles();

  const playAgain = () => {
    dispatch(reset());
    dispatch(resetBingo())
    dispatch(resetTicked(name))
  }

  const handleShowBoard = () => {
    dispatch(showBoard())
  }

  return (
    <React.Fragment>
      <div className={container}>
        <Modal
          open={showBingo}
          onClose={handleShowBoard}
        >
          <div style={{display: 'flex', flexDirection: 'column', width: '100%', outline: 0}}>
            <p className={bingo}>
              BINGO
            </p>
            <Button variant="contained" color="primary" onClick={handleShowBoard} className={button}>Show board</Button>
            <Button variant="contained" color="secondary" onClick={playAgain} className={button}>Play again</Button>
          </div>
        </Modal>
        <BingoBoard />
        <Userlist />
      </div>
        { !showBingo && hasHadBingo && <Button variant="contained" color="secondary" onClick={playAgain}>Play again</Button>}
    </React.Fragment>
  )
}
