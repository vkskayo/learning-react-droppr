const axios = require("axios");
const express = require("express");
const app = express();
const http = require("http");
const { MongoClient } = require("mongodb");
const cors = require("cors");
var bodyParser = require("body-parser");
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = 3001;

app.set("port", port);
const server = http.createServer(app);

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});

const uri =
  "mongodb+srv://droppradmin:mtVnIizYYoGOghoE@cluster0.sh88dvn.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);

// Given the game id, this endpoint returns the release date of the game

app.post("/lists/new", (req, res) => {
  async function run() {
    try {
      await client.connect();
      // database and collection code goes here
      const db = client.db("Droppr");
      const coll = db.collection("game_lists");
      // insert code goes here
      const docs = [req.body];
      /*  const result = await coll.insertMany(docs); */
      // display the results of your operation
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }
  run().catch(console.dir);
  res.send(req.body);
});

app.post("/review/new", (req, res) => {
  async function run() {
    try {
      await client.connect();
      // database and collection code goes here
      const db = client.db("Droppr");
      const coll = db.collection("reviews");
      // insert code goes here
      const docs = [req.body];
      const result = await coll.insertMany(docs);
      // display the results of your operation
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }
  run().catch(console.dir);

  console.log("Hello");
  res.send(req.body);
});

app.get("/api/date/:id", (req, res) => {
  axios({
    url: "https://api.igdb.com/v4/release_dates",
    method: "POST",
    headers: {
      Accept: "application/json",
      "Client-ID": "dnz1zvhqgyb7pwacm85eu171egtel1",
      Authorization: "Bearer cmxxg3b8bfix8e02htwn8pq8tzlx8e",
    },
    data: `fields human; where game=${req.params.id};`,
  })
    .then((response) => {
      res.json({ data: response.data });
    })
    .catch((err) => {
      console.error(err);
      res.send("Error");
    });
});

// I HAVE TO FIX IT YET
// Given the game id, the api should have returned the developer. However I am having problems handling the array of games developed.
// I don't know how to make a condition to check if the array of games developed contains the id of the given game id

app.get("/api/creator/:id", (req, res) => {
  axios({
    url: "https://api.igdb.com/v4/companies",
    method: "POST",
    headers: {
      Accept: "application/json",
      "Client-ID": "dnz1zvhqgyb7pwacm85eu171egtel1",
      Authorization: "Bearer cmxxg3b8bfix8e02htwn8pq8tzlx8e",
    },
    data: `fields name; where developed=${req.params.id};`,
  })
    .then((response) => {
      res.json({ data: response.data });
    })
    .catch((err) => {
      console.error(err);
      res.send("Error");
    });
});

//Given the game id, the api returns the title, the description, which platforms are avaiable, the genres and category of the game.

app.get("/api/general/:id", (req, res) => {
  axios({
    url: "https://api.igdb.com/v4/games",
    method: "POST",
    headers: {
      Accept: "application/json",
      "Client-ID": "dnz1zvhqgyb7pwacm85eu171egtel1",
      Authorization: "Bearer cmxxg3b8bfix8e02htwn8pq8tzlx8e",
    },
    data: `fields name, summary, platforms, genres, category; where id=${req.params.id};`,
  })
    .then((response) => {
      res.json({ data: response.data });
    })
    .catch((err) => {
      console.error(err);
      res.send("Error");
    });
});

//Given the game id, the api returns the cover url of the game

app.get("/api/cover/:id", (req, res) => {
  axios({
    url: "https://api.igdb.com/v4/covers",
    method: "POST",
    headers: {
      Accept: "application/json",
      "Client-ID": "dnz1zvhqgyb7pwacm85eu171egtel1",
      Authorization: "Bearer cmxxg3b8bfix8e02htwn8pq8tzlx8e",
    },
    data: `fields url; where game=${req.params.id};`,
  })
    .then((response) => {
      res.json({ data: response.data });
    })
    .catch((err) => {
      console.error(err);
      res.send("Error");
    });
});

// Given the cover id, this return the cover url of the game
app.get("/api/capa/:id", (req, res) => {
  axios({
    url: "https://api.igdb.com/v4/covers",
    method: "POST",
    headers: {
      Accept: "application/json",
      "Client-ID": "dnz1zvhqgyb7pwacm85eu171egtel1",
      Authorization: "Bearer cmxxg3b8bfix8e02htwn8pq8tzlx8e",
    },
    data: `fields url; where id=${req.params.id};`,
  })
    .then((response) => {
      res.json({ data: response.data });
    })
    .catch((err) => {
      console.error(err);
      res.send("Error");
    });
});

app.get("/api/screenshot/:id", (req, res) => {
  axios({
    url: "https://api.igdb.com/v4/screenshots",
    method: "POST",
    headers: {
      Accept: "application/json",
      "Client-ID": "dnz1zvhqgyb7pwacm85eu171egtel1",
      Authorization: "Bearer cmxxg3b8bfix8e02htwn8pq8tzlx8e",
    },
    data: `fields url, game; where game=${req.params.id};`,
  })
    .then((response) => {
      res.json({ data: response.data });
    })
    .catch((err) => {
      console.error(err);
      res.send("Error");
    });
});

// Endpoint for gameLists in the homepage, the id represents the page in which the user is walking through.

app.get("/api/list/:id", (req, res) => {
  axios({
    url: "https://api.igdb.com/v4/games",
    method: "POST",
    headers: {
      Accept: "application/json",
      "Client-ID": "dnz1zvhqgyb7pwacm85eu171egtel1",
      Authorization: "Bearer cmxxg3b8bfix8e02htwn8pq8tzlx8e",
    },
    data: `fields name, summary, platforms, genres, category, cover; limit 15; offset ${
      req.params.id * 15
    };`,
  })
    .then((response) => {
      res.json({ data: response.data });
    })
    .catch((err) => {
      console.error(err);
      res.send("Error");
    });
});

app.get("/api/query/:name/:id", (req, res) => {
  axios({
    url: "https://api.igdb.com/v4/games",
    method: "POST",
    headers: {
      Accept: "application/json",
      "Client-ID": "dnz1zvhqgyb7pwacm85eu171egtel1",
      Authorization: "Bearer cmxxg3b8bfix8e02htwn8pq8tzlx8e",
    },
    data: `search "${req.params.name}"; fields name,cover; limit 15; offset ${
      req.params.id * 15
    };`,
  })
    .then((response) => {
      res.json({ data: response.data });
    })
    .catch((err) => {
      console.error(err);
      res.send("Error");
    });
});
