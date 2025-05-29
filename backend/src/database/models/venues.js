const { sequelize } = require("../database.js");
const { DataTypes } = require("sequelize");

const Venues = sequelize.define("venues", {
    location: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    }
}, {
    freezeTableName: true
});

module.exports = Venues;