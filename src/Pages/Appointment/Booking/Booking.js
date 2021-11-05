import { Grid } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import BookingModal from '../BookingModal/BookingModal';




const Booking = ({booking,date}) => {
    const {name, time, space} = booking;
    const [openBooking, setOpenBooking] = React.useState(false);
    const handleBookingOpen = () => setOpenBooking(true);
    const handleBookingClose = () => setOpenBooking(false);
    return (
        <>
        <Grid item xs={12} sm={6} md={4}>
             <Paper sx={{py:5}} elevation={3}> 
             <Typography sx={{ color: 'info.main', fontWeight: 600 }} variant="h5" gutterBottom component="div">
                {name}
            </Typography>
             <Typography variant="h6" gutterBottom component="div">
                {time}
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
                {space} Spaces Available
            </Typography>
            <Button onClick={handleBookingOpen} variant="contained">BOOK APPOINTMENT</Button>

            </Paper>      
        </Grid>
        <BookingModal
        date={date}
        booking={booking}
        openBooking={openBooking}
        handleBookingClose={handleBookingClose}
        >
        </BookingModal>
        </>
    );
};

export default Booking;