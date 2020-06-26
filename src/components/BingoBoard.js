import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import BingoTile from './BingoTile';
import { GridList, GridListTile } from '@material-ui/core';
import { bingo } from '../redux/actions';

export default function BingoBoard() {
  const { Bingo, User } = useSelector(s => s);
  const dispatch = useDispatch();

  useEffect(() => {
    const horizontal = [
      Bingo.slice(0,5).map(data => data.ticked).every(bool => bool),
      Bingo.slice(5,10).map(data => data.ticked).every(bool => bool),
      Bingo.slice(10,15).map(data => data.ticked).every(bool => bool),
      Bingo.slice(15,20).map(data => data.ticked).every(bool => bool),
      Bingo.slice(20,25).map(data => data.ticked).every(bool => bool)
    ]
    const vertical = [
      [Bingo[0].ticked, Bingo[5].ticked, Bingo[10].ticked, Bingo[15].ticked, Bingo[20].ticked].every(bool => bool),
      [Bingo[1].ticked, Bingo[6].ticked, Bingo[11].ticked, Bingo[16].ticked, Bingo[21].ticked].every(bool => bool),
      [Bingo[2].ticked, Bingo[7].ticked, Bingo[12].ticked, Bingo[17].ticked, Bingo[22].ticked].every(bool => bool),
      [Bingo[3].ticked, Bingo[8].ticked, Bingo[13].ticked, Bingo[18].ticked, Bingo[23].ticked].every(bool => bool),
      [Bingo[4].ticked, Bingo[9].ticked, Bingo[14].ticked, Bingo[19].ticked, Bingo[24].ticked].every(bool => bool)
    ]
    const diagonalAndCorners = [
      [Bingo[0].ticked, Bingo[6].ticked, Bingo[12].ticked, Bingo[18].ticked, Bingo[24].ticked].every(bool => bool),
      [Bingo[4].ticked, Bingo[8].ticked, Bingo[12].ticked, Bingo[16].ticked, Bingo[20].ticked].every(bool => bool),
    ]
    if(diagonalAndCorners.some(bool => bool) || horizontal.some(bool => bool) || vertical.some(bool => bool)) {
      if (!User.hasHadBingo)
      dispatch(bingo());
    }
  }, [Bingo, User, dispatch])

  return (
    <GridList cellHeight='auto' cols={5} style={{marginLeft: 10, marginRight: 10, width: '90vh', height: '90vh'}}>
      {Bingo.map((data, i) => (
        <GridListTile key={i}>
          <BingoTile data={data} index={i}/>
        </GridListTile>
      ))}
    </GridList>
  )
}
