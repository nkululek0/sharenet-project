const WorkShops = require("../models/workshops.js");
const Venues = require("../models/venues.js");
const Bookings = require("../models/bookings.js");

(async () => {
    try {
        await Promise.all([
            WorkShops,
            Venues,
            Bookings
        ].map(async (model) => {
            return await model.drop({ force: true });
        }));
        console.log("Successfully deleted tables");
    }
    catch (error) {
        throw Error(error);
    }
})();