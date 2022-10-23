import Header from "./components/header";
import Game from "./components/games";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function App() {
  const [gamesList, setGamesList] = useState([]);
  const [page, setPage] = useState(0);

  console.log(gamesList);

  useEffect(() => {
    fetch(`http://localhost:3001/api/list/${page}`).then((res) =>
      res.json().then((data) => setGamesList(data.data))
    );
  }, [page]);

  return (
    <>
      <Header />
      <ul>
        {gamesList.map((e) => {
          return <Game key={e.id} myKey={e.id} background_image={e.url} />;
        })}
      </ul>
      <div className="col-4 mx-auto">
        <button
          onClick={() => {
            if (page - 1 < 0) {
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
