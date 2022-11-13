import Header from "../components/header";
import ScreenL from "../components/screenLucas";
import Review from "../components/review";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./screen.css";

export default function Screen() {
  const [cover, setCover] = useState([]);
  const [title, setTitle] = useState([]);
  const [creator, setCreator] = useState([]);
  const [date, setDate] = useState([]);
  const [description, setDescription] = useState("");
  const [screenshot, setScreenshot] = useState("");

  const id = useParams().id;
  useEffect(() => {
    fetch(`http://localhost:3001/api/cover/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCover(data.data[0].url);
      });

    fetch(`http://localhost:3001/api/general/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setTitle(data.data[0].name);
        setDescription(data.data[0].summary);
      });

    fetch(`http://localhost:3001/api/creator/${id}`)
      .then((res) => res.json())
      .then((data) => setCreator(data.data[0].name));

    fetch(`http://localhost:3001/api/date/${id}`)
      .then((res) => res.json())
      .then((data) => setDate(data.data[0].human));

    fetch(`http://localhost:3001/api/screenshot/${id}`)
      .then((res) => res.json())
      .then((data) => setScreenshot(data.data[0].url));
  });
  return (
    <>
      <Header />
      <ScreenL
        myCover={`https:${cover}`}
        myDate={date}
        myCreator={creator}
        myTitle={title}
        myDescription={description}
        myScreenshot={screenshot}
      />
      <hr></hr>
      <Review numOfstars={4} />
      <Review numOfstars={3} />
    </>
  );
}
