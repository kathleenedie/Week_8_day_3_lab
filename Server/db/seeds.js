use hotel_bookings;
db.dropDatabase();

db.bookings.insertMany([
    {
        name: "Michael Ferguson",
        email: "weepanda@fergusons.com",
        checked_in: false
    },
    {
        name: "Michael Ferguson",
        email: "weepanda@fergusons.com",
        checked_in: false
    },
    {
        name: "Michael Ferguson",
        email: "weepanda@fergusons.com",
        checked_in: false
    }
]);