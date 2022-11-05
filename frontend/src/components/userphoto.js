import image from "../images/userpicture.png";

export default function userPhoto() {
  return (
    <div className="col-3 d-flex flex-column mx-auto mx-lg-5 my-5 align-items-center justify-content-center">
      <div className="d-flex align-items-center gap-3">
        <img className="rounded-circle" src={image} />
        <h2 className="d-none d-sm-inline">Username</h2>
      </div>
      <h2 className="d-sm-none text-light">Username</h2>
    </div>
  );
}
