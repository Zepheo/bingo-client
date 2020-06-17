import React, { useState } from 'react';
import { Container, makeStyles } from '@material-ui/core';

import BingoBoard from './components/BingoBoard'
import Bingo from './components/Bingo';

const useStyles = makeStyles({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column'
  }
})

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
