import React from 'react';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import { Button, Typography, Container } from '@mui/material';
import { Box, height } from '@mui/system';

const bannerBg = {
    background: `url(${bg})`,
    
}

const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 500
}

const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item style={{...verticalCenter, textAlign:'left'}} xs={12} md={6}>
          <Box>
          <Typography sx={{mb:3}} variant="h4">Your New Smile <br/>
          Starts Here
          </Typography>
          <Typography  variant="h6" sx={{fontSize:12, fontWeight:400, color:'gray', mb:2}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi facere totam aliquam praesentium vel. Amet veniam odio vero doloremque laborum.Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          </Typography>
          <Button sx={{mb:2}} variant="contained" style={{ backgroundColor: '#1AC2EA' }}>Get Appointment</Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} style={verticalCenter}>
          <img style={{width:'500px', }} src={chair} alt=""/>
        </Grid>
        
      </Grid>
    </Container>
    );
};

export default Banner;