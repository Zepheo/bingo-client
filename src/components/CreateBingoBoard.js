import React from 'react'

import CreateBingoTile from './CreateBingoTile';
import { GridList, GridListTile, makeStyles, Button } from '@material-ui/core';
import { useState } from 'react';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    height: '90%'
  },
}))

export default function CreateBingoBoard({submitCards}) {
  const [ cards, setCards ] = useState(Array.from(Array(25), (v, i) => i === 12 ? ({ id: i, data: 'Free', free: true }) : ({ id: i, data: '' })));
  const { container } = useStyles();

  const handleSubmitCardText = (text, index) => {
    setCards((s) => s.map((card) => card.id === index ? ({...card, data: text}) : card));
  } 

  return (
    <div className={container}>
      <GridList cellHeight='auto' cols={5} style={{marginLeft: 10, marginRight: 10, width: '90vh', height: '90vh'}}>
        {cards.map((data, i) => (
          <GridListTile key={i}>
            <CreateBingoTile data={data} index={i} submitCardText={handleSubmitCardText}/>
          </GridListTile>
        ))}
      </GridList>
      {cards.every(v => v.data) &&
        <Button 
          variant='contained'
          color='primary'
          onClick={() => {
            const cardsToSend = cards.filter(v => !v.free)
            submitCards(cardsToSend);
          }}
        >
          Create
        </Button>
      }
    </div>
  )
}