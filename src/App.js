import React, { useState } from 'react';
import { Container, makeStyles } from '@material-ui/core';

import BingoBoard from './components/BingoBoard'
import Bingo from './components/Bingo';

const useStyles = makeStyles(theme => ({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
    margin: 30,
  }
}))

function App() {
  const [ bingo, setBingo ] = useState(false);
  const {wrapper} = useStyles();
  return (
    <Container maxWidth='md' className={wrapper}>
      {bingo ? <Bingo gotBingo={setBingo}/> : <BingoBoard gotBingo={setBingo}/>}
    </Container>
  );
}

export default App;
