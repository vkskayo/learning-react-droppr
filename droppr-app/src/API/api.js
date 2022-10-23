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

app.get("/api/date/:id", (req, res) => {
  axios({
    url: "https://api.igdb.com/v4/release_dates",
    method: "POST",
    headers: {
      Accept: "application/json",
      "Client-ID": "dnz1zvhqgyb7pwacm85eu171egtel1",
      Authorization: "Bearer cmxxg3b8bfix8e02htwn8pq8tzlx8e",
    },
    data: `fields human; where id=${req.params.id};`,
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

app.get("/api/creator/:id", (req, res) => {
  axios({
    url: "https://api.igdb.com/v4/companies",
    method: "POST",
    headers: {
      Accept: "application/json",
      "Client-ID": "dnz1zvhqgyb7pwacm85eu171egtel1",
      Authorization: "Bearer cmxxg3b8bfix8e02htwn8pq8tzlx8e",
    },
    data: `fields name; where id=${req.params.id};`,
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

app.get("/api/title/:id", (req, res) => {
  axios({
    url: "https://api.igdb.com/v4/games",
    method: "POST",
    headers: {
      Accept: "application/json",
      "Client-ID": "dnz1zvhqgyb7pwacm85eu171egtel1",
      Authorization: "Bearer cmxxg3b8bfix8e02htwn8pq8tzlx8e",
    },
    data: `fields name; where cover=${req.params.id};`,
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
    data: `fields url; where id=${req.params.id};`,
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

// Endpoint for gameLists in the homepage, the id represents the page in which the user is walking through.

app.get("/api/list/:id", (req, res) => {
  axios({
    url: "https://api.igdb.com/v4/covers",
    method: "POST",
    headers: {
      Accept: "application/json",
      "Client-ID": "dnz1zvhqgyb7pwacm85eu171egtel1",
      Authorization: "Bearer cmxxg3b8bfix8e02htwn8pq8tzlx8e",
    },
    data: `fields url; limit 15; offset ${req.params.id * 15};`,
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

/* app.get("/api/cover", (req, res) => {
  axios({
    url: "https://api.igdb.com/v4/covers",
    method: "POST",
    headers: {
      Accept: "application/json",
      "Client-ID": "dnz1zvhqgyb7pwacm85eu171egtel1",
      Authorization: "Bearer cmxxg3b8bfix8e02htwn8pq8tzlx8e",
    },
    data: `fields alpha_channel,animated,checksum,game,height,image_id,url,width; where id=110592;`,
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
    data: `fields age_ratings,aggregated_rating,aggregated_rating_count,alternative_names,artworks,bundles,category,checksum,collection,cover,created_at,dlcs,expanded_games,expansions,external_games,first_release_date,follows,forks,franchise,franchises,game_engines,game_modes,genres,hypes,involved_companies,keywords,language_supports,multiplayer_modes,name,parent_game,platforms,player_perspectives,ports,rating,rating_count,release_dates,remakes,remasters,screenshots,similar_games,slug,standalone_expansions,status,storyline,summary,tags,themes,total_rating,total_rating_count,updated_at,url,version_parent,version_title,videos,websites; where cover=110592;`,
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
    data: `fields change_date,change_date_category,changed_company_id,checksum,country,created_at,description,developed,logo,name,parent,published,slug,start_date,start_date_category,updated_at,url,websites; where id=500;`,
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
    data: `fields category,checksum,created_at,date,game,human,m,platform,region,updated_at,y; where id=500;`,
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
 */
