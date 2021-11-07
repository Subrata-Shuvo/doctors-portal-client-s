import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import {NavLink} from 'react-router-dom';
import login from '../../../images/login.png'

const Login = () => {
    const [loginData, setLoginData] = useState({})
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData)

    }


    const handleLoginSubmit = e =>{
        alert('submitting')
        e.preventDefault();
    }

    return (
       <Container>
           <Grid container spacing={2}>
                
                <Grid item xs={4} md={6}>
                <Typography variant="h6" gutterBottom sx={{ my: 22}} className='text-info'>
                    Please Login
                    <form onSubmit={handleLoginSubmit}>
                    <TextField 
                            sx={{width:'75%', m:1}}
                            id="standard-basic" 
                            label="Your Email" 
                            name = "email"
                            onChange={handleOnChange}
                            variant="standard" /> <br/>
                    <TextField 
                            sx={{width:'75%', m:1}}
                            id="standard-basic" 
                            type="password"
                            label="Your Password" 
                            name="password"
                            onChange={handleOnChange}
                            variant="standard" />
                           <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Login</Button>
                           <NavLink
                            style={{textDecoration:'none'}} 
                            to='/register'><Button variant="text">New User? Please Register
                            </Button>
                            </NavLink>
                    </form>
                </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={login} alt="" sx={{ mx: 5 }} style={{width:"100%"}} />
                </Grid>
            </Grid>
       </Container>
    );
};


export default Login;