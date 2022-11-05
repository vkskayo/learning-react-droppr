import React from "react";
import App from "./App";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./routes/profile";
import Friends from "./routes/friends";
import Reviews from "./routes/reviews";
import Lists from "./routes/lists";
import Screen from "./routes/screen";
import Settings from "./routes/usersettings";

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
      <Route path="/profile/settings" element={<Settings />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
