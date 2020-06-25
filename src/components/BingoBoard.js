import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import BingoTile from './BingoTile';
import { Grid } from '@material-ui/core';
import { bingo } from '../redux/actions';

export default function BingoBoard() {
  const { Bingo, User } = useSelector(s => s);
  const dispatch = useDispatch();

  useEffect(() => {
    const horizontal = [
      Bingo.slice(0,4).map(data => data.ticked).every(bool => bool),
      Bingo.slice(4,8).map(data => data.ticked).every(bool => bool),
      Bingo.slice(8,12).map(data => data.ticked).every(bool => bool),
      Bingo.slice(12,16).map(data => data.ticked).every(bool => bool)
    ]
    const vertical = [
      [Bingo[0].ticked, Bingo[4].ticked, Bingo[8].ticked, Bingo[12].ticked].every(bool => bool),
      [Bingo[1].ticked, Bingo[5].ticked, Bingo[9].ticked, Bingo[13].ticked].every(bool => bool),
      [Bingo[2].ticked, Bingo[6].ticked, Bingo[10].ticked, Bingo[14].ticked].every(bool => bool),
      [Bingo[3].ticked, Bingo[7].ticked, Bingo[11].ticked, Bingo[15].ticked].every(bool => bool)
    ]
    const diagonalAndCorners = [
      [Bingo[0].ticked, Bingo[5].ticked, Bingo[10].ticked, Bingo[15].ticked].every(bool => bool),
      [Bingo[3].ticked, Bingo[6].ticked, Bingo[9].ticked, Bingo[12].ticked].every(bool => bool),
    ]
    if(diagonalAndCorners.some(bool => bool) || horizontal.some(bool => bool) || vertical.some(bool => bool)) {
      if (!User.hasHadBingo)
      dispatch(bingo());
    }
  }, [Bingo, User, dispatch])

  return (
    <Grid container spacing={1} justify='center' style={{marginLeft: 10, marginRight: 10, width: '75vw'}}>
      {Bingo.map((data, i) => (
        <Grid item xs={3}>
          <BingoTile data={data} index={i}/>
        </Grid>
      ))}
    </Grid>
  )
}
