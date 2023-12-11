import React, {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


function App() {
    const[p, setP]= useState(0)
    const[t, setT]= useState(0)
    const[r, setR]= useState(0)
    const[si, setSi]= useState(0)

    const calculateInterest =() => {
     setSi(p*t*r/100)
    }

  return (
    <div className='div'>
     
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           Simple Interest Calculator
          </Typography>
                 </Toolbar>
      </AppBar> <br/>
      <TextField onChange={(event)=> setP(event.target.value)} id="filled-basic" label="Principal" variant="filled" /> <br/> <br/>
      <TextField onChange={(event)=> setT(event.target.value)} id="filled-basic" label="Time" variant="filled" /> <br/> <br/>
      <TextField onChange={(event)=> setR(event.target.value)} id="filled-basic" label="Rate" variant="filled" /> <br/> <br/> <br/>
      
      <Button onClick={()=> calculateInterest()} variant="contained">Caculate</Button> <br/> <br/>

      <Typography variant="h6" gutterBottom>
        Simple Interest of given values is = {si}
      </Typography>

    </div>
  );
}

export default App;
