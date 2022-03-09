import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import { useState, useEffect} from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import {Link} from 'react-router-dom';
import FormControlLabel from '@mui/material/FormControlLabel';
export default function Create() {
    const [guestCanPause, setGuestCanPause] = useState('true')
    const [votesToSkip, setVotesToSkip] = useState('3')
    const handlerGuest = (e) => {
        setGuestCanPause(e.target.value)
    }
    const handlerVotes = (e) => {
        setVotesToSkip(e.target.value)
    }
    const handlesubmit = (e) => {
        e.preventDefault();
        const requestOpt = {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                votes_to_skip: votesToSkip,
                guest_can_pause: guestCanPause
            })
        }
        fetch('http://127.0.0.1:8000/api/create-room/', requestOpt)
        .then((resp)=> resp.json())
        .then((data)=>console.log(data))
        .catch((err)=>console.log(err))
    }
    return (
        <Grid container spacing={1}>
            <h1>{guestCanPause}</h1>
            <h1>{votesToSkip}</h1>
        <Grid item xs={12} align="center">
          <Typography component='h4' variant='h4'>
            Create a Room
          </Typography>
        </Grid>
        <Grid item xs={12} align="center">
          <FormControl component="fieldset">
            <FormHelperText>
              <div align="center">
                Guest Control of Playback State
              </div>
            </FormHelperText>
            <RadioGroup row defaultValue='true' onChange={handlerGuest}>
              <FormControlLabel value="true" control={<Radio color="primary"/>} label="Play/Pause"
              labelPlacement="bottom"/>
              <FormControlLabel value="false" control={<Radio color="secondary"/>} label="No control"
              labelPlacement="bottom"/>
            </RadioGroup>
          </FormControl>
          <Grid item xs={12} sx={{ m: 3 }} align="center">
              <FormControl>
                  <TextField required={true} type="number" variant="standard" defaultValue={3}
                  inputProps={{min:1,}} onChange={handlerVotes}/>
                  <FormHelperText>
                      <div align="center">
                          Votes required to skip
                      </div>
                  </FormHelperText>
              </FormControl>
          </Grid>
          <Grid item xs={12} align="center">
              <Button sx={{mt: 2}} color="primary" variant="contained" onClick={handlesubmit}>Create a room</Button>

          </Grid>
          <Grid item xs={12} align="center">
              <Button sx={{mt: 2}} color="secondary" variant="contained" to="/" component={Link}>Back</Button>
              
          </Grid>
        </Grid>
      </Grid>
    )
}