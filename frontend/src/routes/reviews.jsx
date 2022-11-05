import Header from "../components/header";
import Review from "../components/review";

export default function Reviews() {
  let sty = {
    height: "0,1px",
  };
  return (
    <>
      <Header />
      <div className="my-5">
        <div className="col-11 mx-auto border-bottom border-secondary d-flex gap-4">
          <p className="text-light fs-6">Reviews</p>
          <p className="text-light">Favorites</p>
          <p className="text-light">Popular</p>
        </div>
      </div>
      <Review />
      <Review />
    </>
  );
}
