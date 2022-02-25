import React from 'react'
import TextField from '@mui/material/TextField';
import Image from 'next/image';
import insta from'../assets/insta.png'
import Button from '@mui/material/Button';

function index() {
  return (
    <div className='signup-container'>
        <div className='signup-card'>
            <Image src={insta} style={{fullWidth:'1rem'}}/>
        <TextField size="small" margin="dense"id="outlined-basic" fullWidth label="Email" variant="outlined" />
        <TextField size="small" margin="dense"id="outlined-basic" fullWidth label="password" type="password" variant="outlined" />
        <TextField size="small" margin="dense"id="outlined-basic" fullWidth label="Full Name" variant="outlined" />
        <Button variant="outlined"fullWidth component="label" style={{marginTop:'0.5rem'}}>
            <input type="file" accept='image/*' style={{display:'none',marginRight:'0.5rem'}}/>
         Upload
         </Button>
         <Button variant="contained"fullWidth  style={{marginTop:'0.5rem'}}>
            
         Sign Up
         </Button>

        </div>
        <div className='bottom-card'>
             Already have an Account? <span style={{color:"blue"}}>
             Login
             </span>
        </div>
    </div>
  )
}

export default index