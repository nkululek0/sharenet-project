const WorkShops = require("../models/workshops.js");
const Venues = require("../models/venues.js");
const Bookings = require("../models/bookings.js");
const { sequelize } = require("../database.js");

(async () => {
    try {
        await sequelize.sync({ alter: true });
        console.log("Successfully migrated tables");

        await Venues.bulkCreate([
            {
                "location": "Bellvista Lodge"
            },
            {
                "location": "MSP Chambers Venue Hire"
            },
            {
                "location": "Traduire Guest Lodge and Conference Lounge"
            }
        ]);
        console.log("Successfully inserted mock venues into database");

        await WorkShops.bulkCreate([
            {
                "title": "Trading Strategies",
                "description": "The teachings of formidable trading Strategies in the current economic crises",
                "venue_id": 1,
                "start_date": "2025-08-19 15:30:00.0",
                "end_date": "2025-08-19 19:00:00.0",
                "total_seats": 50,
                "booked_seats": 40
            },
            {
                "title": "Wealth Planning",
                "description": "How to make your money work for you and last for generations to come.",
                "venue_id": 2,
                "start_date": "2025-08-22 10:30:00.0",
                "end_date": "2025-08-22 14:00:00.0",
                "total_seats": 30,
                "booked_seats": 30
            },
            {
                "title": "Savings Account Conference",
                "description": "Make the money that is in your pocket stay in your pocket",
                "venue_id": 3,
                "start_date": "2025-09-23 12:00:00.0",
                "end_date": "2025-09-23 15:00:00.0",
                "total_seats": 30,
                "booked_seats": 30
            },
            {
                "title": "Picking A Package",
                "description": "For those feeling overwhelmed as to where to start and what to start with. This workshop is for you",
                "venue_id": 1,
                "start_date": "2025-10-30 10:00:00.0",
                "end_date": "2025-10-30 17:00:00.0",
                "total_seats": 130,
                "booked_seats": 30
            }
        ]);
        console.log("Successfully created mock workshops");

        await Bookings.create({
            "user_email": "nkululekovuyo0103@gmail.com",
            "workshop_id": 1
        });
        console.log("Successfully created mock booking");
    }
    catch (error) {
        console.log(error);
    }
})();