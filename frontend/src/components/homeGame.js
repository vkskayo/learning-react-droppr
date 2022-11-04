import { Link } from "react-router-dom";

function games() {
  const imgStyle = {
    width: 180,
    height: 240,
  };

  return (
    <div className="d-flex col-12 my-5 flex-column-reverse justify-content flex-md-row mx-5 mx-md-4">
      <Link
        className="position-relative inline-block mx-md-4"
        to={`/screen/whatever`}
      >
        <img
          style={imgStyle}
          src="https://images.igdb.com/igdb/image/upload/t_cover_big/nocover.png"
          className="img-fluid hover-effect"
          alt="..."
        />
      </Link>
      <div className="">
        <h1 className="text-light">Title</h1>
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

export default games;
