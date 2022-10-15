import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Profile from "./routes/profile";
import Friends from "./routes/friends";
import Reviews from "./routes/reviews";
import Lists from "./routes/lists";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="profile" element={<Profile />} />
      <Route path="friends" element={<Friends />} />
      <Route path="reviews" element={<Reviews />} />
      <Route path="lists" element={<Lists />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
