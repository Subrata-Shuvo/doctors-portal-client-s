import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png';
import bg from '../../../images/appointment-bg.png';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';


const appointmentBanner = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(45, 58, 74, 0.9)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: 150
}

const AppointmentBanner = () => {
    return (
        <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
            <img 
            style={{width: '400px', marginTop:'-120px'}}
            src={doctor} alt='doctor'/>
        </Grid>
        <Grid item xs={12} md={6}
           sx={{ display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            textAlign: 'left'
            }}>
            <Box>
           <Typography variant="h6" sx={{mb:3}} style={{ color: '#5CE7ED' }}>
                Appointment
            </Typography>
            <Typography variant="h4" sx={{mb:2}}  style={{color: 'white'}}>
                Make An Appointment Today
            </Typography>
            <Typography variant="h6" sx={{mb:2}}  style={{color: 'white', fontSize: 14,fontWeight: 300}}>
            "It is a long established fact that a reader will be distracted by the <br/> readable content of  a page when looking at its"
            </Typography>
            <Button variant="contained" style={{ backgroundColor: '#1AC2EA' }}>Learn More</Button>
           </Box>
        </Grid>
        
      </Grid>
    </Box>
    );
};

export default AppointmentBanner;