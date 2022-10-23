function game_information({ myCover, myDate, myCreator, myTitle }) {
  const url = myCover.replace("t_thumb", "t_cover_big");

  const imgStyle = {
    width: 249,
    height: 374,
  };

  return (
    <div className="col-10 mx-auto my-5">
      <div className="row">
        <img style={imgStyle} src={url} alt="Girl in a jacket" />
      </div>
      <div className="row mt-3">
        <div className="mb-3">
          <h2 className="text-light d-md-inline">{myTitle}</h2>
          <p className="text-light mx-3 d-md-inline">Release: {myDate}</p>
          <p className="text-primary fs-5 d-md-inline">
            Created By:{myCreator}
          </p>
        </div>
      </div>
      <div className="row">
        <p className="text-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          faucibus viverra est quis porta. Interdum et malesuada fames ac ante
          ipsum primis in faucibus. Aenean quam risus, imperdiet non interdum
          sit amet, ullamcorper ac lorem. Quisque facilisis eros nec orci
        </p>
      </div>
    </div>
  );
}

export default game_information;
