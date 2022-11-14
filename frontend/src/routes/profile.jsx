import Header from "../components/header";
import image from "../images/userpicture.png";
import { Link } from "react-router-dom";
import { GiThreeFriends } from "react-icons/gi";
import { GiNotebook } from "react-icons/gi";
import { AiFillStar } from "react-icons/ai";
import { useState, useEffect } from "react";
import Footer from "../components/footer";

const h4 = {
  color: "honeydew",
};

const table = {
  backgroundColor: "#2c3440",
};

export default function Profile() {
  const [numReview, setnumReviews] = useState(0);

  useEffect(() => {
    fetch(`http://localhost:3001/getreview`)
      .then((res) => res.json())
      .then((data) => setnumReviews(data.data.length));
  }, [numReview]);
  return (
    <>
      <Header />

      <div className="my-5 d-flex flex-column-reverse flex-md-row col-8 col-md-8 mx-auto justify-content-around align-items-start gap-3">
        <div className="bg-secondary col-12 col-md-6 my-4">
          <p className="text-white-50 text-center my-1 p-1">
            <span className="text-light">Activities</span> (These activities are
            automatically updated)
          </p>
          <div
            style={table}
            className="d-flex flex-column flex-md-row justify-content-around align-items-center"
          >
            <div className="d-flex flex-column align-items-center my-4">
              <GiThreeFriends className="mb-3" size={40} color="deepskyblue" />
              <h4 style={h4} className="">
                Friends
              </h4>
              <p>0 connections</p>
            </div>
            <div className="d-flex flex-column align-items-center my-4">
              <GiNotebook size={40} color="red" className="mb-3" />
              <h4 style={h4} className="">
                Reviews
              </h4>
              <p>{numReview} games</p>
            </div>
            <div className="d-flex flex-column align-items-center my-4">
              <AiFillStar size={40} color="yellow" className="mb-3" />
              <h4 style={h4} className="">
                Rated
              </h4>
              <p>0 games</p>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column flex-md-row gap-3 align-items-center">
          <img alt="profile" className="rounded-circle" src={image} />
          <div className="d-flex flex-column align-items-center align-items-md-start">
            <h1 className="text-light">Username</h1>
            <Link className="position-relative inline-block" to="settings">
              <button type="button" class="btn btn-secondary my-2">
                Edit Profile
              </button>
            </Link>
          </div>
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
          necessitatibus ab soluta? Lorem, ipsum dolor sit amet consectetur
        </p>
      </div>
    </>
  );
}
