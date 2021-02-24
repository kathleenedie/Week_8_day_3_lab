const baseURL = 'http://localhost:5000/api/bookings'

const BookingsService = {
    getBookings(){
        return fetch(baseURL)
        .then(res => res.json())
    },

    postBooking(payload) {
        return fetch(baseURL, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {'Content-Type': 'application/json'}
        })
        .then(res => res.json())
    }
}

export default BookingsService;