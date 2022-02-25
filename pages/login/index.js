import React from 'react'
import TextField from '@mui/material/TextField';
import Image from 'next/image';
import insta from '../assets/insta.png'
import Button from '@mui/material/Button';

import bg1 from '../assets/bg1.jpg';
import bg4 from '../assets/bg4.jpg';
import bg5 from '../assets/bg5.jpg';
import bg3 from '../assets/bg3.jpg';
import{Carousel} from "react-responsive-carousel"
function index() {
    return (
        <div className='login-container'>
            <div className='carbg'>
                <div className='car'>
                  <Carousel showArrows={false} showIndicators={false} showThumbs={false} showArrows={false} infiniteLoop={true} interval={2000} autoPlay={true}>
                    <Image src={bg1}></Image>
                    <Image src={bg4}></Image>
                    <Image src={bg3}></Image>
                    <Image src={bg5}></Image>
                  </Carousel>
                </div>

            </div>
            <div>
                <div className='login-card'>
                    <Image src={insta} style={{ fullWidth: '1rem' }} />
                    <TextField size="small" margin="dense" id="outlined-basic" fullWidth label="Email" variant="outlined" />
                    <TextField size="small" margin="dense" id="outlined-basic" fullWidth label="password" type="password" variant="outlined" />
                    <div style={{ color: 'red' }}>
                        Some Error Here
                    </div>

                    <Button variant="contained" fullWidth style={{ marginTop: '0.5rem' }}>

                        Login In
                    </Button>
                    <div style={{ color: 'blue', marginTop: '0.5rem' }}>
                        Forgot Password
                    </div>

                </div>
                <div className='bottom-card'>
                    Don't Have an Account? <span style={{ color: "blue" }}>
                        Sign Up
                    </span>
                </div>
            </div>
        </div>
    )
}

export default index