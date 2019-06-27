// Call dependencies require, define the port of the server and files require

const express = require("express");
const app = express();
const port = 8000;
const campuses = require("./campuses.json");
const wilders = require("./wilders.json");
const matches = require("./matches.json");
const elo = require("./elo")

// Routes GET

// Call campuses.json

app.get("/campuses", (req, res) => {
  res.status(200).send({ campuses });
});

// Call wilders.json

app.get("/wilders", (req, res) => {
  res.status(200).send({ wilders });
});

// Call matches.json

app.get("/matches", (req, res) => {
  res.status(200).send({ matches });
});

app.get("/ranking", (req, res) => {
  const response = elo();
  let eloRankingObject = {};
  response.forEach((v, k) => (eloRankingObject[k] = v));
  res.send(eloRankingObject);
});

// Listening server on port 8000

app.listen(port, err => {
  if (err) {
    throw new Error("Something bad happened...");
  }

  console.log(`Server is listening on ${port}`);
});
