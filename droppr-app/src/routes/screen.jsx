import Header from "../components/header";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Information from "../components/game-information";

export default function Game() {
  const [cover, setCover] = useState([]);
  const [title, setTitle] = useState([]);
  const [creator, setCreator] = useState([]);
  const [date, setDate] = useState([]);
  const id = useParams().id;
  useEffect(() => {
    fetch(`http://localhost:3001/api/cover/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCover(data.data[0].url);
      });

    fetch(`http://localhost:3001/api/title/${id}`)
      .then((res) => res.json())
      .then((data) => setTitle(data.data[0].name));

    fetch(`http://localhost:3001/api/creator/${id}`)
      .then((res) => res.json())
      .then((data) => setCreator(data.data[0].name));

    fetch(`http://localhost:3001/api/date/${id}`)
      .then((res) => res.json())
      .then((data) => setDate(data.data[0].human));
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
