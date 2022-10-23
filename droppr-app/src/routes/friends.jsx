import Header from "../components/header";
import axios from "axios";
var images = [];
const options = {
  method: "GET",
  url: "https://rawg-video-games-database.p.rapidapi.com/games?key=f56abcce0fb44e88a7d084091f361c9f&page_size=5",
  headers: {
    "X-RapidAPI-Key": "503575b6d8mshdbe55bf70ab54cbp16f540jsnc3451a92eb53",
    "X-RapidAPI-Host": "rawg-video-games-database.p.rapidapi.com",
  },
};

axios
  .request(options)
  .then(function (response) {
    response.data.results.forEach((element) => {
      images.push(element.background_image);
    });
  })
  .catch(function (error) {
    console.error(error);
  });

export default function Friends() {
  var arr = ["asdf", "asfs", "asfasg"];
  const list = arr.map((e) => <h1>{e}</h1>);

  return (
    <>
      <Header />
      <h2>{arr}</h2>
    </>
  );
}
