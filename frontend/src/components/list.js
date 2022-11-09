import { BsFillTrashFill } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";

export default function list() {
  /*   let first = {
    left: "10px",
    position: "absolute",
  };

  let second = {
    left: "50px",
    position: "absolute",
  };

  let third = {
    left: "90px",
    position: "absolute",
  }; */

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
        {/*        <div className="hover-effect position-relative">
          <img
            style={first}
            src="https://images.igdb.com/igdb/image/upload/t_cover_small/nocover.png"
          />
          <img
            style={second}
            src="https://images.igdb.com/igdb/image/upload/t_cover_small/nocover.png"
          />
          <img
            style={third}
            src="https://images.igdb.com/igdb/image/upload/t_cover_small/nocover.png"
          />
        </div> */}

        <div className="mx-2">
          <h2 className="text-light fs-3">List Name</h2>

          <BsFillTrashFill color="lightgrey" size={20} />
          <AiFillEdit className="mx-2" color="lightgrey" size={20} />
        </div>
      </div>
    </div>
  );
}
