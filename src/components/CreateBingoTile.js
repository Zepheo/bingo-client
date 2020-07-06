import React, { useState }  from 'react'
import { Paper, makeStyles, Typography, Button, TextField, Dialog, DialogTitle, List, ListItem, ListItemText } from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux';
import { removePresetCard } from '../redux/actions';

const useStyles = makeStyles({
  button: {
    margin: 5,
  },
  done: {
    backgroundColor: 'green',
    color: 'white'
  },
  root: {
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: '17vh',
    width: '17vh',
    fontFamily: 'roboto',
    paddingLeft: 5,
    paddingRight: 5,
    fontSize: 20,
    '&:hover': {
      cursor: 'pointer'
    }
  },
  rootNoHover: {
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: '17vh',
    width: '17vh',
    fontFamily: 'roboto',
    paddingLeft: 5,
    paddingRight: 5,
    fontSize: 20,
  }
});

function SimpleDialog(props) {
  const { Bingo: { cards } } = useSelector(s => s);
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title">Choose preset</DialogTitle>
      <List>
        {cards.map((card) => (
          <ListItem button onClick={() => handleListItemClick(card)} key={card.data}>
            <ListItemText primary={card.data} />
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
}

export default function CreateBingoTile({data, index, submitCardText}) {
  const { done, root, rootNoHover, button } = useStyles();
  const [ state, setState ] = useState({data: data.data, editing: false});
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  
  const handleSubmit = (e) => {
    e.preventDefault();
    submitCardText(state.data, index);
    setState({...state, editing: false})
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    if (value) {
      setState({...state, data: value.data});
      submitCardText(value.data, index);
      dispatch(removePresetCard(value.id));
    }
  };

  if (data.free) {
    return (
      <Paper
      className={`${rootNoHover} ${done}`}
      variant='outlined'
    >
      <Typography>
        {data.data}
      </Typography>
    </Paper>
    )
  }

  if (state.editing) {
    return (
      <Paper
      className={root}
      variant='outlined'
    >
      <TextField
          id="outlined-multiline-static"
          label="Card text..."
          multiline
          rows={4}
          variant="outlined"
          value={state.data}
          onKeyPress={(e) => {
            if (e.charCode === 13) handleSubmit(e);
          }}
          onChange={(e) => setState({...state, data: e.target.value})}
          autoComplete='off'
          autoFocus={true}
        />
    </Paper>
    )
  }

  if (state.data) {
    return (
      <Paper
      className={root}
      variant='outlined'
      onClick={() => setState({...state, editing: true})}
    >
      <Typography>        
        {state.data}
      </Typography>
    </Paper>
    )
  }

  return (
    <Paper
      className={root}
      variant='outlined'
    >
      <Typography>
        <Button color='primary' variant='contained' onClick={() => setState({...state, editing: true})} className={button}>
          Custom
        </Button>
        <Button color='secondary' variant='contained' className={button} onClick={handleClickOpen}>
          Use preset
        </Button>
        <SimpleDialog  open={open} onClose={handleClose} />
      </Typography>
    </Paper>
  )
}
