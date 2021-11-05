import { Container, Grid } from '@mui/material';
import React from 'react';
import chair from '../../../images/chair.png'
import Calender from '../../Shared/Calender/Calender';

const AppointmentHeader = ({date, setDate}) => {
    
    return (
        <Container >
            <Grid conatiner spacing={5} className="d-flex justify-content-end">
                <Grid item xs={12} md={6}>
                    <Calender date={date} setDate={setDate}></Calender>
                </Grid>
                
                <Grid item xs={12}  md={6}>
                    <img style={{ width: '100%'}} src={chair} alt="" />
                </Grid>
                

            </Grid>
        </Container>
    );
};

export default AppointmentHeader;