export default function GameBox({ id, deleteGame, background }) {
  return (
    <div className="w-100 my-3 border">
      <img className="w" alt="list" src={background} />
      <button
        onClick={(e) => {
          e.preventDefault();
          deleteGame(id);
        }}
      >
        Delete
      </button>
    </div>
  );
}
