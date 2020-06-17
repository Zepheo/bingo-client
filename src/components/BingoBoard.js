import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

import BingoTile from './BingoTile';
import { GridList, GridListTile } from '@material-ui/core';

export default function BingoBoard({gotBingo}) {
  const bingo = useSelector(s => s);

  useEffect(() => {
    const horizontal = [
      bingo.slice(0,4).map(data => data.happened).every(bool => bool),
      bingo.slice(4,8).map(data => data.happened).every(bool => bool),
      bingo.slice(8,12).map(data => data.happened).every(bool => bool),
      bingo.slice(12,16).map(data => data.happened).every(bool => bool)
    ]
    const vertical = [
      [bingo[0].happened, bingo[4].happened, bingo[8].happened, bingo[12].happened].every(bool => bool),
      [bingo[1].happened, bingo[5].happened, bingo[9].happened, bingo[13].happened].every(bool => bool),
      [bingo[2].happened, bingo[6].happened, bingo[10].happened, bingo[14].happened].every(bool => bool),
      [bingo[3].happened, bingo[7].happened, bingo[11].happened, bingo[15].happened].every(bool => bool)
    ]
    const diagonalAndCorners = [
      [bingo[0].happened, bingo[3].happened, bingo[12].happened, bingo[15].happened].every(bool => bool),
      [bingo[0].happened, bingo[5].happened, bingo[10].happened, bingo[15].happened].every(bool => bool),
      [bingo[3].happened, bingo[6].happened, bingo[9].happened, bingo[12].happened].every(bool => bool),
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
