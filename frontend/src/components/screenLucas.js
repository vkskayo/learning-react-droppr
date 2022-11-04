function screenLucas() {
  return (
    <>
      <section id="Game-Content">
        <div id="Poster">
          <img
            className=""
            src="https://i.imgur.com/ucCzKQv.png"
            alt="Game-Image"
          />
          <h4 className="my-3">Average rating: 4.8</h4>
          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            data-bs-whatever="@mdo"
          >
            Rate and Review
          </button>
        </div>

        <div id="Game-Informations">
          <div class="HeadDescreption">
            <h2 id="Game-Name">Celeste</h2>
            <h5>Year: 2018</h5>
            <h5>Created by: Maddy Torson</h5>
          </div>
          <p id="Description">
            Celeste is a 2018 platform game designed, directed and written by
            Maddy Thorson and programmed by Thorson and Noel Berry. It is a
            fully-fledged version of the 2016 PICO-8 game of the same name,
            which was made in four days solely by Thorson and Berry during a
            game jam. Set on a fictional version of Mount Celeste, it follows a
            young woman named Madeline who attempts to climb the mountain, and
            must face her inner demons in her quest to reach the summit. Celeste
            was released worldwide independently on January 25, 2018, on
            Windows, Nintendo Switch, PlayStation 4, Xbox One, macOS, and Linux,
            followed by a release on Google's Stadia on July 28, 2020. It
            consists of eight chapters, plus a free downloadable content chapter
            titled Farewell that acts as an epilogue to the story, released on
            September 9, 2019. Celeste received critical acclaim upon release,
            being praised for its story, gameplay, and soundtrack. It won
            several awards, including the Best Independent Game and Games for
            Impact awards at The Game Awards 2018, where it was also nominated
            for Game of the Year. Celeste was also a financial success, selling
            over a million copies by the end of 2019.
          </p>
        </div>
      </section>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title text-dark" id="exampleModalLabel">
                New message
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form>
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label text-dark">
                    Game Phrase:
                  </label>
                  <input type="text" class="form-control" id="recipient-name" />
                </div>
                <div class="mb-3">
                  <label for="message-text" class="col-form-label text-dark">
                    Review:
                  </label>
                  <textarea class="form-control" id="message-text"></textarea>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Send message
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default screenLucas;
