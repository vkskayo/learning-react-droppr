import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

function header() {
  const [search, setSearch] = useState("");

  useEffect(() => {
    console.log(search);
  }, [search]);

  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <div>
          <Link className="navbar-brand" to="/">
            Droppr
            <br />
          </Link>
          <i
            style={{
              color: "#fff",
            }}
            className="fa-solid fa-lg fa-droplet drop"
          ></i>
        </div>

        <form className="d-flex" role="search">
          <input
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-light" type="button">
            Search
          </button>
        </form>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav mt-2">
            <Link className="nav-link" to="/profile">
              Profile
            </Link>
            <Link className="nav-link" to="/friends">
              Friends
            </Link>
            <Link className="nav-link" to="/lists">
              Lists
            </Link>
            <Link className="nav-link" to="/reviews">
              Reviews
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default header;
