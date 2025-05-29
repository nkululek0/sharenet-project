const { sequelize } = require("../database.js");
const { DataTypes } = require("sequelize");
const Venues = require("./venues.js");

const WorkShops = sequelize.define("workshops", {
    title: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    venue_id: {
        type: DataTypes.INTEGER
    },
    start_date: {
        type: DataTypes.STRING,
        allowNull: false
    },
    end_date: {
        type: DataTypes.STRING,
        allowNull: false
    },
    total_seats: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    booked_seats: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    freezeTableName: true
});

WorkShops.belongsTo(Venues, {
    foreignKey: {
        field: "venue_id",
        type: DataTypes.INTEGER
    }
});

module.exports = WorkShops;