import React, { useState, useEffect } from 'react'
import { Button, TextField, makeStyles, FormGroup, Checkbox, FormControlLabel, FormControl } from '@material-ui/core'
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { subscribeTo, addCards, logIn, create, unsubscribeFrom, createCustom, addPresetCards} from '../redux/actions';

const useStyles = makeStyles((theme) => ({
  container: {
    flexDirection: 'column',
    display: 'flex',
  },
  checkboxContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    margin: 10
  },
}))

export default function Create({createRoom}) {
  const [ state, setState ] = useState({name: '', room: '', password: '', zones: []})
  const [ roomError, setRoomError ] = useState({gotError: false, message: ''});
  const [ nameError, setNameError ] = useState({gotError: false, message: ''});
  const { container, checkboxContainer, button } = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(subscribeTo('roomCreated', (data) => {
      dispatch(addCards(data.cards))
      dispatch(logIn(data.name, data.room, data.users))
      history.push('/bingo')
    }));

    dispatch(subscribeTo('roomCreationError', (data) => {
      setRoomError({gotError: true, message: data})
    }));

    dispatch(subscribeTo('customRoomCreated', (data) => {
      console.log(data);
      dispatch(addPresetCards(data.cards))
      history.push('/createbingoboard', {
        room: data.room,
        name: data.name
      })
    }));

    return () => {
      dispatch(unsubscribeFrom('roomCreated'))
      dispatch(unsubscribeFrom('roomCreationError'))
    }
  }, [dispatch, history])

  const handleCreateRoom = (e) => {
    e.preventDefault();
    dispatch(create(state));
  };

  const handleCreateCustomRoom = () => {
    if (!state.room) setRoomError({gotError: true, message: 'Please fill out this field'});
    if (!state.name) setNameError({gotError: true, message: 'Please fill out this field'});
    if (!state.name || !state.room) return;
    
    dispatch(createCustom(state));
  }

  const handleCheckboxChange = (e) => {
    let tempZones = [...state.zones]
    if (e.target.checked) {
      tempZones.push(e.target.name)
    } else {
      tempZones = tempZones.filter((zone) => zone !== e.target.name)
    }
    setState({...state, zones: [...tempZones]})
  }

  return (
    <form id='createRoomForm' action='.' onSubmit={(e) => handleCreateRoom(e)} className={container}>
      <TextField 
        required
        id='username'
        value={state.name}
        placeholder='Username...'
        variant='outlined'
        onChange={(e) => setState({...state, name: e.target.value})}
        autoComplete='off'
        error={nameError.gotError}
        helperText={nameError.message}
      />
      <TextField 
        required
        id='roomname'
        value={state.room}
        placeholder='Roomname'
        variant='outlined'
        onChange={(e) => setState({...state, room: e.target.value})}
        autoComplete='off'
        error={roomError.gotError}
        helperText={roomError.message}
      />
      <TextField 
        id='password'
        type='password'
        helperText='Leave blank for no password'
        value={state.password}
        placeholder='Password...'
        variant='outlined'
        onChange={(e) => setState({...state, password: e.target.value})}
        autoComplete='off'
      />
      <FormControl 
        required
        component='fieldset'
      >
        <FormGroup className={checkboxContainer} onChange={(e) => handleCheckboxChange(e)}>
          <FormControlLabel
            control={
              <Checkbox
                checked={state.zones.bwl}
                name="bwl"
                color="primary"
              />
            }
            label="BWL"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={state.zones.mc}
                name="mc"
                color="primary"
              />
            }
            label="MC"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={state.zones.zg}
                name="zg"
                color="primary"
              />
            }
            label="ZG"
          />
        </FormGroup>
      </FormControl>
      <Button type='submit' variant='contained' color='primary' className={button}>Create Room</Button>
      <Button type='button' variant='contained' color='secondary' className={button} onClick={handleCreateCustomRoom}>Create room with custom cards</Button>
    </form>
  )
}
