import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import {NavLink} from 'react-router-dom';
import login from '../../../images/login.png'


const Register = () => {
    const [loginData, setLoginData] = useState({});

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData)

    }

    const handleLoginSubmit = e =>{
        if(loginData.password !== loginData.password2){
            alert('Password not matched');
            return
        }
        e.preventDefault();
    }
    return (
        <Container>
           <Grid container spacing={2}>
                
                <Grid item xs={4} md={6}>
                <Typography variant="h6" gutterBottom sx={{ my: 22}} className='text-info'>
                    Register
                    <form onSubmit={handleLoginSubmit}>
                    <TextField 
                            sx={{width:'75%', m:1}}
                            id="standard-basic" 
                            label="Your Email" 
                            name = "email"
                            type="email"
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
                    <TextField 
                            sx={{width:'75%', m:1}}
                            id="standard-basic" 
                            type="password"
                            label="Confirm Password" 
                            name="password2"
                            onChange={handleOnChange}
                            variant="standard" />
                           <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Register</Button>
                           <NavLink
                            style={{textDecoration:'none'}} 
                            to='/login'><Button variant="text">ALL REGISTERED? Please Login
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

export default Register;