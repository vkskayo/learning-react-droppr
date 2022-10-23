import { Link } from "react-router-dom";

function games({ background_image, myKey }) {
  const url = "https:" + background_image.replace("t_thumb", "t_cover_big");

  const imgStyle = {
    width: 180,
    height: 240,
  };
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
    <div className="d-flex col-md-4 my-5">
      <Link className="nav-link" to={`screen/${myKey}`}>
        <img style={imgStyle} src={url} className="img-fluid" alt="..." />
      </Link>
      <div>
        <h1 className="text-light">Nauro</h1>
        <h5 className="text-primary">Nintendo / IOS</h5>
      </div>
    </div>
  );
}

export default games;
