import React from 'react';
import {useState, useEffect} from 'react';
import BookingsService from '../services/BookingsService';
import BookingsList from '../components/BookingsList';
import BookingsForm from '../components/BookingsForm';

const BookingsContainer = () => {

    const [bookings, setBookings] = useState([])

    useEffect(() => {
        BookingsService.getBookings()
        .then(bookings => setBookings(bookings))
    }, [])

    const createBooking = newBooking => {
        BookingsService.postBooking(newBooking)
        .then(savedBooking => setBookings([...bookings, savedBooking]))
    }


    return(
        <>
        <BookingsForm bookings={bookings} createBooking = {createBooking} />
        <BookingsList bookings = {bookings}/>
        </>
        )
}

export default BookingsContainer