import { BsStarFill } from "react-icons/bs";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ScreenLucas({
  myCover,
  myDate,
  myCreator,
  myTitle,
  myDescription,
  myScreenshot,
  myRatingAvg,
}) {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [text_review, setTextReview] = useState("");

  const [message, setMessage] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const imgStyle = {
    width: 249,
    height: 374,
  };
  let url = myCover.replace("t_thumb", "t_cover_big");
  let finalImage = "https:" + myScreenshot;
  let finalImage2 = finalImage.replace("t_thumb", "t_screenshot_big");

  // If there is no image, render the nocover image.
  if (url === "https:") {
    url = "https://images.igdb.com/igdb/image/upload/t_cover_big/nocover.png";
  }
  //If there is no screenshot image.
  if (finalImage2 === "https:") {
  }

  const back = {
    backgroundImage: `url(${finalImage2})`,
    width: "100%",
    height: 374,
    opacity: 0.4,

    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
    backgroundPositionY: "center",
  };

  const customHeaders = {
    "Content-Type": "application/json",
  };
  const game_id = useParams().id;

  let HandleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://localhost:3001/review/new", {
        method: "POST",
        headers: customHeaders,
        body: JSON.stringify({
          text_review: text_review,
          game_id: game_id,
          rating: rating,
          date: new Date().toLocaleDateString("pt-BR"),
        }),
      });

      if (res.status === 200) {
        setTextReview("");
        setRating(null);
        setMessage("Review created successfully");
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <header className="mb-3" style={back}></header>
      <section id="Game-Content">
        <div id="Poster">
          <img style={imgStyle} src={url} alt="Girl in a jacket" />
          <h4 className="my-3" id="avrgRating">
            Average rating:{" "}
            <span className="text-warning">{` ${Math.round(
              myRatingAvg
            )} / 100`}</span>
          </h4>
          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            data-bs-whatever="@mdo"
          >
            Rate and Review
          </button>
        </div>

        <div id="Game-Informations">
          <div class="HeadDescription">
            <h2 id="Game-Name">{myTitle}</h2>
            <h5 className="fs-4">{myDate}</h5>
            <h5 className="text-primary fs-4">Created By:{myCreator}</h5>
          </div>
          <p id="Description" className="text-light">
            {myDescription}
          </p>
        </div>
      </section>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title text-dark" id="exampleModalLabel">
                Give it a Drop!
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form onSubmit={HandleSubmit}>
                <div class="stars">
                  {[...Array(5)].map((star, i) => {
                    const ratingValue = i + 1;

                    return (
                      <label>
                        <input
                          type="radio"
                          value={ratingValue}
                          onClick={() => setRating(ratingValue)}
                        />
                        <BsStarFill
                          className="star"
                          color={
                            ratingValue <= (hover || rating)
                              ? "0077b6"
                              : "e4e5e9"
                          }
                          size={50}
                          onMouseEnter={() => setHover(ratingValue)}
                          onMouseLeave={() => setHover(null)}
                        />
                        ;
                      </label>
                    );
                  })}
                </div>
                <div class="mb-3">
                  <label for="message-text" class="col-form-label text-dark">
                    Drop:
                  </label>
                  <textarea
                    name="text_review"
                    value={text_review}
                    onChange={(e) => setTextReview(e.target.value)}
                    class="form-control"
                    id="message-text"
                  ></textarea>
                  <input value={useParams().id} type="hidden" />
                </div>
                <div class="mb-3">
                  <div class="dropdown">
                    <button
                      class="btn btn-secondary dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Status
                    </button>

                    <ul
                      class="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <p class="dropdown-item" href="#">
                          Playing
                        </p>
                      </li>

                      <li>
                        <p class="dropdown-item" href="#">
                          Finished
                        </p>
                      </li>

                      <li>
                        <p class="dropdown-item" href="#">
                          All achievements
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
                <button type="submit" class="btn btn-primary">
                  Send message
                </button>
              </form>
            </div>
            <div class="modal-footer">
              {message ? (
                <p className="text-success mx-auto">{message}</p>
              ) : null}

              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              {/*     <button type="submit" class="btn btn-primary">
                Send message
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ScreenLucas;
