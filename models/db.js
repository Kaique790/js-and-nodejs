// Sequelize configuration

const { query } = require('express');
const Sequelize = require('sequelize');

// connection to mysql
const sequelize = new Sequelize('crud_posts', 'root', 'Kiaq7900', {
    host: "localhost",
    dialect: "mysql",
    query: { raw: true }
});