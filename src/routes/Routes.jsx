import React from "react";
import Main from "../main/Main"
import About from "../about/About"
import Rates from "../rates/Rates"
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Main/>} />
      <Route path="/rates" element={<Rates/>} />
      <Route path="/about" element={<About/>} />
    </Route>
  )
);
