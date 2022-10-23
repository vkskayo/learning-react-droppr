const axios = require("axios");
const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
app.use(cors());

/* const options = {
  method: "GET",
  url: "https://rawg-video-games-database.p.rapidapi.com/games/4201?key=f56abcce0fb44e88a7d084091f361c9f",
  headers: {
    "X-RapidAPI-Key": "503575b6d8mshdbe55bf70ab54cbp16f540jsnc3451a92eb53",
    "X-RapidAPI-Host": "rawg-video-games-database.p.rapidapi.com",
  },
}; */

/* axios
  .request(options)
  .then(function (response) {
    response.data.results.forEach((element) => {
      console.log(element.background_image);
    });
  })
  .catch(function (error) {
    console.error(error);
  }); */

app.set("port", 3001);
const server = http.createServer(app);

app.listen(3001, () => {
  console.log("server running 3001");
});

app.get("/api/cover", (req, res) => {
  axios({
    url: "https://api.igdb.com/v4/covers",
    method: "POST",
    headers: {
      Accept: "application/json",
      "Client-ID": "dnz1zvhqgyb7pwacm85eu171egtel1",
      Authorization: "Bearer cmxxg3b8bfix8e02htwn8pq8tzlx8e",
    },
    data: "fields url;",
  })
    .then((response) => {
      console.log(response.data);
      res.json({ data: response.data });
    })
    .catch((err) => {
      console.error(err);
      res.send("Error");
    });
});

app.get("/api/date", (req, res) => {
  axios({
    url: "https://api.igdb.com/v4/release_dates",
    method: "POST",
    headers: {
      Accept: "application/json",
      "Client-ID": "dnz1zvhqgyb7pwacm85eu171egtel1",
      Authorization: "Bearer cmxxg3b8bfix8e02htwn8pq8tzlx8e",
    },
    data: "fields human;",
  })
    .then((response) => {
      console.log(response.data);
      res.json({ data: response.data });
    })
    .catch((err) => {
      console.error(err);
      res.send("Error");
    });
});

app.get("/api/creator", (req, res) => {
  axios({
    url: "https://api.igdb.com/v4/companies",
    method: "POST",
    headers: {
      Accept: "application/json",
      "Client-ID": "dnz1zvhqgyb7pwacm85eu171egtel1",
      Authorization: "Bearer cmxxg3b8bfix8e02htwn8pq8tzlx8e",
    },
    data: "fields name;",
  })
    .then((response) => {
      console.log(response.data);
      res.json({ data: response.data });
    })
    .catch((err) => {
      console.error(err);
      res.send("Error");
    });
});

app.get("/api/title", (req, res) => {
  axios({
    url: "https://api.igdb.com/v4/games",
    method: "POST",
    headers: {
      Accept: "application/json",
      "Client-ID": "dnz1zvhqgyb7pwacm85eu171egtel1",
      Authorization: "Bearer cmxxg3b8bfix8e02htwn8pq8tzlx8e",
    },
    data: "fields name;",
  })
    .then((response) => {
      console.log(response.data);
      res.json({ data: response.data });
    })
    .catch((err) => {
      console.error(err);
      res.send("Error");
    });
});

app.get("/api/cover/:id", (req, res) => {
  axios({
    url: "https://api.igdb.com/v4/covers",
    method: "POST",
    headers: {
      Accept: "application/json",
      "Client-ID": "dnz1zvhqgyb7pwacm85eu171egtel1",
      Authorization: "Bearer cmxxg3b8bfix8e02htwn8pq8tzlx8e",
    },
    data: `fields url; where id=40104;`,
  })
    .then((response) => {
      console.log(response.data);
      res.json({ data: response.data });
    })
    .catch((err) => {
      console.error(err);
      res.send("Error");
    });
});
