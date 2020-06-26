import React from 'react'
import { GridList, GridListTile, makeStyles, Typography } from '@material-ui/core'

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
  const { wrapper } = useStyles();
  return (
    <div className={wrapper}>
      <Typography>
        {name}
      </Typography>
      <GridList spacing={2} cellHeight={10} cols={5} style={{width: 58}}>
        {ticked.map((bool, i) => (
          <GridListTile key={i}>
            <div style={{ height: 10, width: 10, backgroundColor: bool ? 'green' : 'red'}}/>
          </GridListTile>
        ))}
      </GridList>
    </div>
  )
}
