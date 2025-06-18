const express = require("express");
const route = express.Router();

const pool = require("../db");

route.use((req, res, next) => {
  console.log("Index middleware");
  next();
});

route.get("/:id", (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  const val = [id];
  const sql = `DELETE FROM note1 WHERE id = ?`;
  pool.query(sql, val, (err, results, fields) => {
    if (err) {
      console.log("Deletion failed", err.message);
      return res.status(500).send("Deletion failed");
    }
    console.log("Deletion successful");
    res.redirect("/");
  });
});

module.exports = route;
