import React, { useState } from 'react';
import BookingsService from '../services/BookingsService'


const BookingsForm = ({bookings, createBooking}) => {

    const [newBooking, setNewBooking] = useState({});

    const onChange = (event) => {
        newBooking[event.target.id] = event.target.value;
        setNewBooking(newBooking)
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(newBooking);
        BookingsService.postBooking(newBooking)
        .then(() => {
          createBooking(newBooking);  
        });

    }

            
    return(
        <form  onSubmit ={handleSubmit} className = "booking-form">
            <label for = "name">Name:</label>
            <input onChange = {onChange} type = "text" id = "name" value = {bookings.name} placeholder = "customer name"/>
            <label for = "email">Email:</label>
            <input onChange = {onChange} type = "email" id = "email" value = {bookings.email} placeholder = "customer e-mail address"/>
            <label for = "checked-in">Checked in? </label>
            <input onChange = {onChange} type ="checkbox" id = "checked-in" value ={bookings.checked_in} defaultChecked={bookings.checked_in}/>

            <input type ="submit" name= "submit" value ="Book"/>

        </form>


    )
}

export default BookingsForm;