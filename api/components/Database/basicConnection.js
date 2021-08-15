const express = require('express');
const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Maklemore7',
  database: 'acme'
});

db.connect()

module.exports = db;