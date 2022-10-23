import { Link } from "react-router-dom";

function games({ background_image, myKey }) {
  return (
    /*     <div className="card bg-dark text-white m-5">
      <img src={background_image} className="card-img" alt="game-image" />
      <div className="card-img-overlay">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </p>
        <p className="card-text">Last updated 3 mins ago</p>
      </div>
    </div> */
    <div className="col-md-4 mx-auto m-y-4 my-5">
      <Link className="nav-link" to={`screen/${myKey}`}>
        <img src={background_image} className="img-fluid" alt="..." />
      </Link>
    </div>
  );
}

export default games;
