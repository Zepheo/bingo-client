import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10,
    width: '75vw'
  },
  bingo: {
    color: 'gold',
    fontSize: 200
  }
})

export default function Bingo() {
  const {bingo, container} = useStyles();

  
  return (
    <div className={container}>
      <p className={bingo}>
        BINGO
      </p>
    </div>
  )
}
