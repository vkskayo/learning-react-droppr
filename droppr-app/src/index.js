import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Profile from "./routes/profile";
import Friends from "./routes/friends";
import Reviews from "./routes/reviews";
import Lists from "./routes/lists";
import Screen from "./routes/screen";
import React from "react";
import Search from "./routes/search";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="profile" element={<Profile />} />
      <Route path="friends" element={<Friends />} />
      <Route path="reviews" element={<Reviews />} />
      <Route path="lists" element={<Lists />} />
      <Route path="screen/:id" element={<Screen />} />
      <Route path="search/:name" element={<Search />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
