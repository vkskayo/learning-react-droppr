import { Link } from "react-router-dom";

function header() {
  return (
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <div>
          <Link class="navbar-brand" to="/">
            Droppr
            <br />
          </Link>
          <i
            style={{
              color: "#fff",
            }}
            class="fa-solid fa-lg fa-droplet drop"
          ></i>
        </div>

        <form class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-light" type="submit">
            Search
          </button>
        </form>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav mt-2">
            <Link class="nav-link" to="/profile">
              Profile
            </Link>
            <Link class="nav-link" to="/friends">
              Friends
            </Link>
            <Link class="nav-link" to="/lists">
              Lists
            </Link>
            <Link class="nav-link" to="/reviews">
              Reviews
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default header;
