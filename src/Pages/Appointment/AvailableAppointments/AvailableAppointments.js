import React from 'react';

const AvailableAppointments = ({date}) => {
    return (
        <div>
            <h2 className="mt-3 text-info">Available Appointments : {date.toDateString()}</h2>
        </div>
    );
};

export default AvailableAppointments;