function card() {
  return (
    <>
      <div
        class="card mb-3 m-5
      "
      >
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src="https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg"
              class="img-fluid rounded-start"
              alt="game-image"
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Game title</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p class="card-text">
                <small class="text-muted">Reviewed at 17/04/2003</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default card;
