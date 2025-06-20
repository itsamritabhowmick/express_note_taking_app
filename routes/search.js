const express = require("express");
const route = express.Router();
const pool = require("../db");

route.use((req, res, next) => {
  console.log("Search Middleware");
  next();
});

route.get("/", (res, req) => {
  const { srch } = req.query;
  console.log(req.query);
  console.log(srch);

  const sql = `SELECT * FROM note WHERE noteHead LIKE ? or noteDesc LIKE ?`;

  const wildCard = `%${srch}%`;

  pool.query(sql, [wildCard, wildCard], (err, results, fields) => {
    if (err) {
      console.log("No Match found ", err.message);
      return;
    }
    res.render("index", { noteObj: results });
  });
});

module.exports = route;
