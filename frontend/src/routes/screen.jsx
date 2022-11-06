import Header from "../components/header";
import ScreenL from "../components/screenLucas";
import Review from "../components/review";

import "./screen.css";

import { BsFillStarFill } from "react-icons/bs";
import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";

export default function Screen() {
  return (
    <>
      <Header />
      <ScreenL />
      <hr></hr>
      <Review numOfstars={4} />
      <Review numOfstars={3} />
    </>
  );
}
