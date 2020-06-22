import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core'

import Bingo from '../components/Bingo'
import BingoBoard from '../components/BingoBoard'
import Image from '../img/GnomeHeader02-Header-110215.jpg'

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundImage: `url(${Image})`,
      backgroundSize: 'cover'
    }
  }
}))

export default function PlayBingo() {
  const [ bingo, setBingo ] = useState(false);
  useStyles();
  return (bingo ? <Bingo gotBingo={setBingo}/> : <BingoBoard gotBingo={setBingo}/>)
}
