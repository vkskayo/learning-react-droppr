import Header from "../components/header";
import image from "../images/userpicture.png";
import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <>
      <Header />
      <div className="my-5 d-flex flex-column flex-sm-row col-4 mx-auto justify-content-center align-items-center gap-3">
        <img className="rounded-circle" src={image} />
        <div className="d-flex flex-column">
          <h1 className="text-light">Username</h1>
          <Link className="position-relative inline-block" to="settings">
            <button type="button" class="btn btn-secondary my-2">
              Edit Profile
            </button>
          </Link>
        </div>
      </div>

      <div className="col-11 mx-auto">
        <div className="col-11 mx-auto border-bottom border-secondary">
          <p className="text-secondary fs-6">BIO</p>
        </div>
        <p className="text-secondary col-11 mx-auto my-3">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil fugit,
          harum fuga tempore odit quod temporibus voluptas assumenda,
          perferendis dicta vitae sint, iste quibusdam totam vero rerum
          necessitatibus ab soluta?
        </p>
      </div>
    </>
  );
}
