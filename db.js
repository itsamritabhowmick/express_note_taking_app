const express = require("express");
const mysql2 = require("mysql2");

const pool = mysql2.createPool({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "@mrit@sql04",
  database: "note_app1",
  connectionLimit: 10,
});

module.exports = pool;
