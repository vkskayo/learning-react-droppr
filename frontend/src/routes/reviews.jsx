import Header from "../components/header";
import Review from "../components/review";
import { Link } from "react-router-dom";

export default function Reviews() {
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
      <Review numOfstars={4} />
      <Review numOfstars={3} />
    </>
  );
}
