const { sequelize } = require("../database.js");
const { DataTypes } = require("sequelize");
const WorkShops = require("./workshops.js");

const Bookings = sequelize.define("bookings", {
    user_email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    workshop_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    freezeTableName: true
});

Bookings.belongsTo(WorkShops, {
    foreignKey: {
        field: "workshop_id",
        type: DataTypes.INTEGER
    }
});

module.exports = Bookings;