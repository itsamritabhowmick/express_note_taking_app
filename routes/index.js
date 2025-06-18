const express = require("express");
const route = express.Router();

const pool = require("../db");
route.use((req, res, next) => {
  console.log("Index middleware");
  next();
});

route.get("/", (req, res) => {
  const sql = `SELECT * FROM note1`;
  pool.query(sql, (err, results, fields) => {
    if (err) {
      console.log("Insertion failed", err.message);
      return res.status(500).send("Fetch fail");
    }
    res.render("index", { noteObject: results });
  });
});

// post route
route.post("/", (req, res) => {
  const { nhead, ndesc } = req.body;
  console.log(req.body);

  const val = [nhead, ndesc];
  const sql = `INSERT INTO note1 (nhead, ndesc) VALUES (?,?)`;
  pool.query(sql, val, (err, results, fields) => {
    if (err) {
      console.log("Insertion failed", err.message);
      return res.status(500).send("Insertion failed");
    }
    console.log("Insertion Successful");
    res.redirect("/");
  });
});

module.exports = route;
