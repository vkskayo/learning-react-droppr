import Header from "../components/header";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Information from "../components/game-information";

export default function Game() {
  const [cover, setCover] = useState([]);
  const [title, setTitle] = useState([]);
  const [creator, setCreator] = useState([]);
  const [date, setDate] = useState([]);
  console.log(useParams());
  useEffect(() => {
    fetch(`http://localhost:3001/api/cover`)
      .then((res) => res.json())
      .then((data) => setCover(data.data[Math.floor(Math.random() * 10)].url));

    fetch("http://localhost:3001/api/title")
      .then((res) => res.json())
      .then((data) => setTitle(data.data[Math.floor(Math.random() * 10)].name));

    fetch("http://localhost:3001/api/creator")
      .then((res) => res.json())
      .then((data) =>
        setCreator(data.data[Math.floor(Math.random() * 10)].name)
      );

    fetch("http://localhost:3001/api/date")
      .then((res) => res.json())
      .then((data) => setDate(data.data[Math.floor(Math.random() * 10)].human));
  }, []);

  return (
    <>
      <Header />
      <Information
        myCover={`https:${cover}`}
        myDate={date}
        myCreator={creator}
        myTitle={title}
      />
    </>
  );
}
