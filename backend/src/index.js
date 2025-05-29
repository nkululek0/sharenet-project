const express = require("express");
const server = express();
const cors = require("cors");
const WorkShops = require("./database/models/workshops.js");
const Venues = require("./database/models/venues.js");
const Bookings = require("./database/models/bookings.js");

server.use(cors());
server.get("/workshops", async (req, res) => {
    try {
        const workshops = await WorkShops.findAll({
            raw: true,
            include: [{
                model: Venues
            }]
        });
        res.json({
            workshops: workshops
        });
    }
    catch (error) {
        console.log("There was an issue while retrieving workshops");
    }
});

server.post("/workshops/:id", async (req, res) => {
    try {
        const workshopId = Number(req.params.id);
        await Bookings.create({
            user_email: "internal_delayed@sharenet.co.za",
            workshop_id: workshopId
        });
        const updatedWorkShop = await WorkShops.findByPk(workshopId);
        const newBookedSeats = updatedWorkShop.booked_seats +1;
        // await updatedWorkShop.increment("booked_seats");
        await updatedWorkShop.save();
        res.json({ message: "Booked Successfully" });
    }
    catch (error) {
        console.log("There was an issue while attempting to book workshop");
        console.error(error);
    }
});

const { testConnection } = require("./database/database.js");

server.listen(process.env.SERVER_PORT, async (error)=> {
    if (error) {
        console.log(error);
    }
    console.log(`server listening on port: ${ process.env.SERVER_PORT }`);
    testConnection();
});