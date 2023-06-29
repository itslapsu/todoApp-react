import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
import React from "react";

import Home from "./Home/Home";
import HomeTodo from "../components/HomeTodo/HomeTodo";
import PageNotFound from "./PageNotFound/PageNotFound";

export default function RouteScreens() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}>
            <Route exact path="" element={<HomeTodo completed={0} />} />
            <Route
              exact
              path="completed"
              element={<HomeTodo completed={1} />}
            />
            <Route
              exact
              path="uncompleted"
              element={<HomeTodo completed={2} />}
            />
            <Route exact path="favorite" element={<HomeTodo completed={3} />} />
          </Route>
          <Route exact path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
      <Outlet />
    </>
  );
}
