const express = require ('express');
const router = express.Router();
const mysql = require('mysql')

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Eddeal00",
    database: 'drinkmixer'
})

module.exports = con