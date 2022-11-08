import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

function header() {
  const [search, setSearch] = useState("");
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container-fluid">
        <div className="mx-5">
          <Link className="navbar-brand" to="/">
            Droppr
          </Link>
          <br />
          <i
            style={{
              color: "#fff",
            }}
            className="fa-solid fa-lg fa-droplet drop"
          ></i>
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse mx-5" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link className="nav-link" to="/reviews">
                Reviews
              </Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/profile">
                Profile
              </Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/friends">
                Friends
              </Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/lists">
                Lists
              </Link>
            </li>
          </ul>
          <form class="d-flex mr-5">
            <input
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  event.preventDefault();
                  window.location.href = `/search/${search}`;
                }
              }}
            />
            <Link
              className="position-relative inline-block mx-md-4"
              to={`/search/${search}`}
            >
              <button
                onClick={() => childToParent(search)}
                className="btn btn-outline-light"
                type="button"
                id="myBtn"
              >
                Search
              </button>
            </Link>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default header;
