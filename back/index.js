const express = require("express");
const app = express();
const port = 3000;
const axios = require("axios");

app.get("/", (req, res) => {
  connection.query("", (err, results) => {
    if (err) {
      res.status(500).send("Erreur lors de la récupération des données");
    } else {
      res.json(results);
    }
  });
});

app.listen(port, err => {
  if (err) {
    throw new Error("Something bad happened...");
  }

  console.log(`Server is listening on ${port}`);
});
