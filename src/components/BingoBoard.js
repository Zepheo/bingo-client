import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

import BingoTile from './BingoTile';
import { GridList, GridListTile } from '@material-ui/core';

export default function BingoBoard({gotBingo}) {
  const bingo = useSelector(s => s.Bingo);

  useEffect(() => {
    const horizontal = [
      bingo.slice(0,4).map(data => data.ticked).every(bool => bool),
      bingo.slice(4,8).map(data => data.ticked).every(bool => bool),
      bingo.slice(8,12).map(data => data.ticked).every(bool => bool),
      bingo.slice(12,16).map(data => data.ticked).every(bool => bool)
    ]
    const vertical = [
      [bingo[0].ticked, bingo[4].ticked, bingo[8].ticked, bingo[12].ticked].every(bool => bool),
      [bingo[1].ticked, bingo[5].ticked, bingo[9].ticked, bingo[13].ticked].every(bool => bool),
      [bingo[2].ticked, bingo[6].ticked, bingo[10].ticked, bingo[14].ticked].every(bool => bool),
      [bingo[3].ticked, bingo[7].ticked, bingo[11].ticked, bingo[15].ticked].every(bool => bool)
    ]
    const diagonalAndCorners = [
      // [bingo[0].ticked, bingo[3].ticked, bingo[12].ticked, bingo[15].ticked].every(bool => bool),
      [bingo[0].ticked, bingo[5].ticked, bingo[10].ticked, bingo[15].ticked].every(bool => bool),
      [bingo[3].ticked, bingo[6].ticked, bingo[9].ticked, bingo[12].ticked].every(bool => bool),
    ]
    if(diagonalAndCorners.some(bool => bool) || horizontal.some(bool => bool) || vertical.some(bool => bool)) gotBingo(true)
  }, [bingo, gotBingo])

  return (
    <GridList cellHeight={200} cols={4}>
      {bingo.map(data => (
        <GridListTile key={data.id}>
          <BingoTile data={data}/>
        </GridListTile>
      ))}
    </GridList>
  )
}
