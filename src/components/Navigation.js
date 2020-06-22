import React from 'react';
import { makeStyles, AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1
  },
}))

export default function Navigation() {
  const { root, menuButton, title } = useStyles();
  return (
    <div className={root}>
      <AppBar position='static' color='primary'>
        <Toolbar>
          <IconButton edge='start' className={menuButton} color='inherit' aria-label='menu'>
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' className={title}>
            Bingo med Waddles
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
