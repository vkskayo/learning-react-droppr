import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

function Games({
  background_image,
  myKey,
  title,
  category,
  genres,
  platforms,
}) {
  const imgStyle = {
    width: 180,
    height: 240,
  };

  const [cover, setCover] = useState("");

  useEffect(() => {
    fetch(`http://localhost:3001/api/capa/${background_image}`)
      .then((res) =>
        res.json().then((data) => {
          setCover(
            "https:" + data.data[0].url.replace("t_thumb", "t_cover_big")
          );
        })
      )
      .catch((err) => {
        setCover(
          "https://images.igdb.com/igdb/image/upload/t_cover_big/nocover.png"
        );
      });
  });

  return (
    <div className="d-flex col-12 my-5 flex-column-reverse justify-content flex-md-row">
      <Link
        className="position-relative inline-block mx-md-4"
        to={`/screen/${myKey}`}
      >
        <img
          style={imgStyle}
          src={cover}
          className="img-fluid hover-effect"
          alt="..."
        />
      </Link>
      <div className="">
        <h1 className="text-light">{title}</h1>
        <h5 className="text-primary">Nintendo / IOS</h5>
        <div className="p-1 bg-secondary rounded mt-3 d-inline-block fw-bold text-light fs-6">
          Main Game
        </div>
        <p className="mt-3 text-warning">
          <span className="text-light">Genre: </span>Shooter
        </p>
      </div>
    </div>
  );
}

export default Games;
