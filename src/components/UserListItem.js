import React from 'react'
import { GridList, GridListTile, makeStyles, Typography, Tooltip } from '@material-ui/core'
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5
  },
}))

export default function UserListItem({ user:{ name, ticked } }) {
  const { Bingo } = useSelector(s => s);
  const { wrapper } = useStyles();

  return (
    <div className={wrapper}>
      <Typography>
        {name}
      </Typography>
      <GridList spacing={2} cellHeight={10} cols={5} style={{width: 58}}>
        {ticked.map((c, i) => {
          let text = '';
          if (c.hasOwnProperty('id') && c.id) {
            console.log(c);
            const { data } = Bingo.find(card => card.id === c.id)
            text = data;
          }
          return (
            <Tooltip title={text || 'Loading...'} placement="bottom">
              <GridListTile key={i}>
                <div style={{ height: 10, width: 10, backgroundColor: c.ticked || i === 12 ? 'green' : 'red'}}/>
              </GridListTile>
            </Tooltip>
          )
        })}
      </GridList>
    </div>
  )
}
