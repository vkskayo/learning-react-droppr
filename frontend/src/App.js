import Header from "./components/header";
import Game from "./components/homeGame";
import Footer from "./components/footer";
import { useState, useEffect } from "react";
import { BsFillDropletFill } from "react-icons/bs";
import Review from "./components/review";

export default function App() {
  const [gamesList, setGamesList] = useState([]);
  const [page, setPage] = useState(0);
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:3001/api/list/${page}`).then((res) =>
      res.json().then((data) => {
        setGamesList(data.data);
        setDisplay(true);
      })
    );
  }, [page]);

  const childToParent = (childData) => {
    fetch(`http://localhost:3001/api/query/${childData}/${0}`).then((res) =>
      res.json().then((data) => {
        setGamesList(data.data);
      })
    );
  };

  return (
    <>
      <Header childToParent={childToParent} />
      <div className="d-flex flex-md-row flex-column-reverse">
        <div className="col-lg-7">
          <ul className="m-0 p-0">
            {gamesList.map((e) => {
              return (
                <Game
                  key={e.id}
                  myKey={e.id}
                  background_image={e.cover}
                  title={e.name}
                  category={e.category}
                  genres={e.genres}
                  platforms={e.platforms}
                />
              );
            })}
          </ul>
          {display ? (
            <div className="col-6 mx-auto">
              <button
                onClick={() => {
                  if (page - 1 < 0) {
                    return;
                  }
                  setPage(page - 1);
                  window.scrollTo(0, 0);
                }}
                type="button"
                className="btn btn-light btn-lg"
              >
                Previous
              </button>
              <span className="text-light mx-4">Page:{page}</span>
              <button
                onClick={() => {
                  setPage(page + 1);
                  window.scrollTo(0, 0);
                }}
                type="button"
                className="btn btn-light btn-lg"
              >
                Next
              </button>
            </div>
          ) : null}
        </div>
        <div className="d-flex flex-column align-items-center">
          <h1 className="mt-5 text-light text-center mx-auto">
            Welcome to Droppr
          </h1>
          <BsFillDropletFill color="deepskyblue" size={50} />
          <div className="my-5">
            <div className="mx-auto border-bottom border-secondary">
              <p className="text-secondary fs-6">
                Recent reviews (last 30 days)
              </p>
            </div>
            <div className="d-flex flex-column">
              <Review />
              <Review />
            </div>
          </div>
        </div>
      </div>

      {display ? <Footer /> : null}
    </>
  );
}
