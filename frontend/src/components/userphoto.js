import image from "../images/userpicture.png";

export default function userPhoto() {
  return (
    <>
      <div>
        <div className="col-4 d-flex flex-column mx-2">
          <div className="d-flex align-items-center gap-3 col-12 col-lg-5">
            <img alt="userPhoto" className="rounded-circle w-50" src={image} />
            <h4 className="fs-5 fs-md-4">Username</h4>
          </div>
        </div>
        <div className="col-12 mx-auto border-bottom border-secondary d-flex gap-4 my-3"></div>
      </div>
    </>
  );
}
