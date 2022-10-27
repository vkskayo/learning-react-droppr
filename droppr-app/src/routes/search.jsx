import Header from "../components/header";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import games from "../components/games";

export default function Search() {
  const [gamesList, setGamesList] = useState([]);
  const [page, setPage] = useState(0);
  const name = useParams().name;

  useEffect(() => {
    fetch(`http://localhost:3001/api/query/${name}/${page}`).then((res) =>
      res.json().then((data) => {
        setGamesList(data.data);
      })
    );
  }, [page]);
  console.log(gamesList);

  const childToParent = (childData) => {
    console.log(childData);
  };

  return (
    <>
      <Header childToParent={childToParent} />
      <h1 className="text-light">Hello world</h1>
    </>
  );
}
