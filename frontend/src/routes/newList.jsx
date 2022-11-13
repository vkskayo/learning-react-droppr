import Header from "../components/header";
import { useState } from "react";
import GameBox from "../components/gameBox";

export default function NewList() {
  const objModel = (id) => {
    return {
      id: id,
      background:
        "https://images.igdb.com/igdb/image/upload/t_thumb/nocover.png",
    };
  };

  let [gameList, setGamelist] = useState([]);
  const [selectedOption, setSelectedOption] = useState(0);
  const showList = true;

  const removeGame = (id) => {
    setGamelist(gameList.filter((e) => e.id !== id));
    alert(`This is your id${id}`);
  };

  return (
    <>
      <Header />

      <div className="d-flex flex-column col-9 mx-auto my-5">
        <h3 className="bg-secondary p-2 mb-0">Create new List</h3>
        <form
          action="http://localhost:3001/lists/new"
          method="POST"
          className="bg-dark p-5"
        >
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Name your List
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="ListName"
            />
            <div id="emailHelp" class="form-text">
              Be creative naming it.
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Description
            </label>
            <div class="input-group">
              <textarea
                class="form-control"
                aria-label="With textarea"
                name="description"
              ></textarea>
            </div>
          </div>

          <div class="input-group mb-3">
            <select
              class="form-select"
              id="inputGroupSelect03"
              aria-label="Example select with button addon"
              onChange={(event) => setSelectedOption(event.target.value)}
            >
              <option value="0" selected>
                Choose a game...
              </option>
              <option value="1">The Last Of Us</option>
              <option value="2">Resident Evil 4</option>
              <option value="3">Pou</option>
            </select>
            <button
              class="btn btn-outline-secondary btn-primary btn-outline-light"
              type="button"
              onClick={() => {
                if (selectedOption !== "0" && selectedOption !== 0) {
                  setGamelist(gameList.concat(objModel(selectedOption)));
                }
              }}
            >
              Add
            </button>
            <div className="w-100 mt-3 d-flex flex-column">
              <div>
                {gameList.map((e) => {
                  return (
                    <div>
                      {showList ? (
                        <GameBox
                          deleteGame={removeGame}
                          id={e.id}
                          background={e.background}
                        />
                      ) : null}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <button type="submit" class="btn btn-primary">
            Create
          </button>
        </form>
      </div>
    </>
  );
}
