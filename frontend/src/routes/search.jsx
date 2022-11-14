import Header from "../components/header";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Game from "../components/homeGame";

export default function Search() {
  const numPagination = 15;

  const [gamesList, setGamesList] = useState([]);
  const [page, setPage] = useState(0);
  const [displayNext, setDisplayNext] = useState(true);
  const [gameCount, setGameCount] = useState(0);
  const [pageCount, setPageCount] = useState(0);

  const name = useParams().name;
  useEffect(() => {
    fetch(`http://localhost:3001/api/query/${name}/${page}`).then((res) =>
      res.json().then((data) => {
        if (data.data.length > 0) {
          setGamesList(data.data);
        }
      })
    );
    fetch(`http://localhost:3001/api/count/${name}`)
      .then((res) => res.json())
      .then((data) => {
        setGameCount(data.data[0].count);
        setPageCount(Math.floor(data.data[0].count / numPagination));
      });
  }, [page, name]);

  console.log(gameCount);
  return (
    <>
      <Header />
      <h5 className="mt-5 mx-5 text-secondary">
        Encontrado {gameCount} jogos para sua busca:{" "}
      </h5>
      <h5 className=" mx-5 text-secondary">Numero de paginas = {pageCount};</h5>
      <ul>
        {gamesList.map((e) => {
          return (
            <Game
              key={e.id}
              myKey={e.id}
              background_image={e.cover}
              title={e.name}
              category={e.category}
              genres={e.genres}
              platforms={e.platforms}
            />
          );
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
