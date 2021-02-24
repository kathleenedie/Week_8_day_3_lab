import React from 'react';

const BookingsList = ({bookings}) => {
    
    const bookingListItem = bookings.map((booking) => {
        return (
        <div>
         <li>Name: {booking.name}</li>
         <li>Email: {booking.email}</li>
         <li>Checked in: {String(booking.checked_in)}</li>
         </div>
         )
    })

    return(
        <div className ="bookings-list">
            <ul>
                {bookingListItem}
            </ul>

        </div>
    )
}

export default BookingsList