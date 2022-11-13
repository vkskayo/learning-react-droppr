import { BsFillTrashFill } from "react-icons/bs";
import { BsPencilFill } from "react-icons/bs";

export default function list() {
  const handleDeleteButton = () => {
    alert("Are you sure you want to delete this list?");
  };

  const btnb = {
    backgroundColor: "white",
  };

  return (
    <div className="my-5 mx-3">
      <div className="d-flex gap-3 flex-column flex-md-row">
        <div className="d-flex hover-effect">
          <img
            alt="list"
            src="https://images.igdb.com/igdb/image/upload/t_cover_small/nocover.png"
          />
          <img
            alt="list"
            src="https://images.igdb.com/igdb/image/upload/t_cover_small/nocover.png"
          />
          <img
            alt="list"
            src="https://images.igdb.com/igdb/image/upload/t_cover_small/nocover.png"
          />
        </div>

        <div className="mx-2">
          <h2 className="text-light fs-3">List Name</h2>
          <div className="d-flex gap-2">
            <button onClick={handleDeleteButton} style={btnb}>
              <BsFillTrashFill color="black" size={20} />
            </button>
            <button style={btnb}>
              <BsPencilFill color="black" size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
