import Header from "./components/header";
import Game from "./components/games";
import axios from "axios";
import React, { useState, useEffect } from "react";

const page_size = 15;
const urlIG = "https://api.igdb.com/v4/covers";
const url =
  "https://rawg-video-games-database.p.rapidapi.com/games?key=f56abcce0fb44e88a7d084091f361c9f";

const options2 = {
  method: "POST",
  url: "https://api.igdb.com/v4/covers",
  headers: {
    Accept: "application/json",
    "Client-ID": "dnz1zvhqgyb7pwacm85eu171egtel1",
    Authorization: "Bearer cmxxg3b8bfix8e02htwn8pq8tzlx8e",
  },
  data: "fields alpha_channel,animated,checksum,game,height,image_id,url,width;",
};

export default function App() {
  const [gamesList, setGamesList] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const url2 = `https://api.rawg.io/api/games?key=f56abcce0fb44e88a7d084091f361c9f&page_size=${page_size}&page=${page}`;
    const options = {
      method: "GET",
      url: url2,
    };
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data.results);
        setGamesList(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [page]);

  return (
    <>
      <Header />
      <ul>
        {gamesList.map((e) => {
          return (
            <Game
              key={e.id}
              myKey={e.id}
              background_image={e.background_image}
            />
          );
        })}
      </ul>
      <div className="col-4 mx-auto">
        <button
          onClick={() => {
            if (page - 1 <= 0) {
              return;
            }
            setPage(page - 1);
            window.scrollTo(0, 0);
          }}
          type="button"
          className="btn btn-light btn-lg"
        >
          Previous
        </button>
        <span className="text-light mx-4">Page:{page}</span>
        <button
          onClick={() => {
            setPage(page + 1);
            window.scrollTo(0, 0);
          }}
          type="button"
          className="btn btn-light btn-lg"
        >
          Next
        </button>
      </div>
    </>
  );
}
