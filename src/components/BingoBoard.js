import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import BingoTile from './BingoTile';
import { GridList, GridListTile } from '@material-ui/core';
import { bingo, sendCardOrder } from '../redux/actions';

export default function BingoBoard() {
  const { Bingo: { cards, cardOrder}, User } = useSelector(s => s);
  const { room : { name } } = User;
  const dispatch = useDispatch();

  useEffect(() => {
    const horizontal = [
      cards.slice(0,5).map(data => data.ticked).every(bool => bool),
      cards.slice(5,10).map(data => data.ticked).every(bool => bool),
      cards.slice(10,15).map(data => data.ticked).every(bool => bool),
      cards.slice(15,20).map(data => data.ticked).every(bool => bool),
      cards.slice(20,25).map(data => data.ticked).every(bool => bool)
    ]
    const vertical = [
      [cards[0].ticked, cards[5].ticked, cards[10].ticked, cards[15].ticked, cards[20].ticked].every(bool => bool),
      [cards[1].ticked, cards[6].ticked, cards[11].ticked, cards[16].ticked, cards[21].ticked].every(bool => bool),
      [cards[2].ticked, cards[7].ticked, cards[12].ticked, cards[17].ticked, cards[22].ticked].every(bool => bool),
      [cards[3].ticked, cards[8].ticked, cards[13].ticked, cards[18].ticked, cards[23].ticked].every(bool => bool),
      [cards[4].ticked, cards[9].ticked, cards[14].ticked, cards[19].ticked, cards[24].ticked].every(bool => bool)
    ]
    const diagonalAndCorners = [
      [cards[0].ticked, cards[6].ticked, cards[12].ticked, cards[18].ticked, cards[24].ticked].every(bool => bool),
      [cards[4].ticked, cards[8].ticked, cards[12].ticked, cards[16].ticked, cards[20].ticked].every(bool => bool),
    ]
    if(diagonalAndCorners.some(bool => bool) || horizontal.some(bool => bool) || vertical.some(bool => bool)) {
      if (!User.hasHadBingo)
      dispatch(bingo());
    }
  }, [cards, User, dispatch])

  useEffect(() => {
    dispatch(sendCardOrder({cardOrder, room: name}));
  }, [name, cardOrder, dispatch])

  return (
    <GridList cellHeight='auto' cols={5} style={{marginLeft: 10, marginRight: 10, width: '90vh', height: '90vh'}}>
      {cards.map((data, i) => (
        <GridListTile key={i}>
          <BingoTile data={data} index={i}/>
        </GridListTile>
      ))}
    </GridList>
  )
}
