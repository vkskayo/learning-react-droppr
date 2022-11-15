import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Review({
  numOfstars,
  text_review,
  game_id,
  date,
  checkOut,
}) {
  let stars = [];
  for (let i = 0; i < numOfstars; i++) {
    stars.push(<i class="fa-solid fa-star text-warning"></i>);
  }

  const imgDimensions = {
    width: "90px",
    height: "120px",
  };

  const [coverReview, setCoverReview] = useState(
    "https://images.igdb.com/igdb/image/upload/t_cover_small/nocover.png"
  );
  const [titleReview, setTitleReview] = useState("Title");
  const [yearRelease, setYearRelease] = useState("Unknown");

  useEffect(() => {
    fetch(`http://localhost:3001/api/cover/${game_id}`)
      .then((res) => res.json())
      .then((data) =>
        setCoverReview(
          "https:" + data.data[0].url.replace("t_thumb", "t_cover_small")
        )
      )
      .catch((error) => console.log(error));
    fetch(`http://localhost:3001/api/date/${game_id}`)
      .then((res) => res.json())
      .then((data) => setYearRelease(data.data[0].y))
      .catch((error) => console.log(error));

    fetch(`http://localhost:3001/api/general/${game_id}`)
      .then((res) => res.json())
      .then((data) => setTitleReview(data.data[0].name))
      .catch((error) => console.log(error));
  }, [game_id]);

  return (
    <div className="d-flex flex-column gap-2 mx-3 mx-md-5 my-5">
      <div className="d-flex gap-3">
        <img
          alt="review"
          style={imgDimensions}
          /* src="https://images.igdb.com/igdb/image/upload/t_cover_small/nocover.png" */
          src={coverReview}
        />
        <div className="d-flex flex-column">
          <div className="d-flex gap-3">
            <h3>{titleReview}</h3>
            <h4 className="text-secondary">{yearRelease}</h4>
          </div>
          <div className="d-flex gap-2">
            <div className="">
              {stars.map((e) => {
                return e;
              })}
            </div>
            <p className="text-secondary d-none d-md-inline">Uploaded {date}</p>
          </div>
          <p className="text-secondary d-md-none">Uploaded 22 may 2020</p>
          <p className="text-light d-none d-md-inline">{text_review}</p>
        </div>
      </div>
      <p className="d-inline d-md-none text-light">{text_review}</p>
      {checkOut ? (
        <Link to={`/screen/${game_id}`}>
          <button className="bg-primary text-light w-25">Check it Out</button>
        </Link>
      ) : null}
    </div>
  );
}
