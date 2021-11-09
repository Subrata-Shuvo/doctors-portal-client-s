import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import {NavLink, useLocation, useHistory} from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.png'

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const {user, loginUser, isLoading, authError, signInWithGoogle} = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData)

    }

    const handleLoginSubmit = e =>{
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleSignIn = () =>{
        signInWithGoogle(location, history)
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
                            {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">Logged in Successfully!</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
                    </form>
                    <p>------------------------</p>
                    <Button onClick={handleGoogleSignIn} type="submit" variant="contained">
                        Google sign in</Button>
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