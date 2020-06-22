import React, { useState } from 'react'
import { Button, TextField, makeStyles, FormGroup, Checkbox, FormControlLabel, FormControl } from '@material-ui/core'
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  container: {
    flexDirection: 'column',
    display: 'flex',
  },
  checkboxContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  }
}))

export default function Create({createRoom}) {
  const [ state, setState ] = useState({name: '', room: '', password: '', zones: []})
  const { container, checkboxContainer } = useStyles();
  const history = useHistory();

  const error = state.zones.length < 1;

  const handleCreateRoom = (e) => {
    e.preventDefault();
    try {
      createRoom(state);
      history.push('/')
    } catch (error) {
      console.log(error)
    }
  };

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
      />
      <TextField 
        required
        id='roomname'
        value={state.room}
        placeholder='Roomname'
        variant='outlined'
        onChange={(e) => setState({...state, room: e.target.value})}
        autoComplete='off'
      />
      <TextField 
        id='password'
        type='password'
        label='Leave blank for no password'
        value={state.password}
        placeholder='Password...'
        variant='outlined'
        onChange={(e) => setState({...state, password: e.target.value})}
        autoComplete='off'
      />
      <FormControl 
        required
        error={error}
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
      <Button type='submit' variant='contained' color='primary'>Create Room</Button>
    </form>
  )
}
