function card() {
  return (
    <>
      <div
        className="card mb-3 m-5
        "
      >
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="https://images.igdb.com/igdb/image/upload/t_cover_big/co2zii.png"
              className="img-fluid rounded-start"
              alt="game-image"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Game title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className="card-text">
                <small className="text-muted">Reviewed at 17/04/2003</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default card;
