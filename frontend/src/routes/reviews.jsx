import Header from "../components/header";
import Review from "../components/review";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Reviews() {
  const [reviewList, setReviewList] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/getreview`)
      .then((res) => res.json())
      .then((data) => setReviewList(data.data));
  }, []);

  return (
    <>
      <Header />
      <div className="my-5">
        <div className="col-11 mx-auto border-bottom border-secondary d-flex gap-4">
          <div className=" border-bottom border-light">
            <Link to="/reviews">
              <p className="text-light fs-6">Reviews</p>
            </Link>
          </div>

          <Link to="/reviews/favorites">
            <p className="text-light fs-6">Favorites</p>
          </Link>
          <Link to="/reviews/popular">
            <p className="text-light fs-6">Popular</p>
          </Link>
        </div>
      </div>
      {reviewList.map((e) => {
        return (
          <Review
            numOfstars={e.rating}
            game_id={e.game_id}
            text_review={e.text_review}
          />
        );
      })}
    </>
  );
}
