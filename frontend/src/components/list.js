export default function list() {
  return (
    <div className="my-5 mx-3">
      <div className="d-flex gap-3 flex-column flex-md-row">
        <div className="d-flex hover-effect">
          <img src="https://images.igdb.com/igdb/image/upload/t_cover_small/nocover.png" />
          <img src="https://images.igdb.com/igdb/image/upload/t_cover_small/nocover.png" />
          <img src="https://images.igdb.com/igdb/image/upload/t_cover_small/nocover.png" />
        </div>
        <div className="mx-2">
          <h2 className="text-light fs-3">List Name</h2>

          <i class="fa-solid fa-trash fa-lg"></i>
          <i class="fa-solid fa-pen-to-square mx-3 fa-lg"></i>
        </div>
      </div>
    </div>
  );
}
