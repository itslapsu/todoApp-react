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
  const data = JSON.parse(localStorage.getItem("todos")) || [];

  const [todos, setTodos] = React.useState(data);

  return (
    <>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={<Home todos={todos} setTodos={setTodos} />}
          >
            <Route
              exact
              path=""
              element={
                <HomeTodo todos={todos} setTodos={setTodos} completed={0} />
              }
            />
            <Route
              exact
              path="completed"
              element={
                <HomeTodo todos={todos} setTodos={setTodos} completed={1} />
              }
            />
            <Route
              exact
              path="uncompleted"
              element={
                <HomeTodo todos={todos} setTodos={setTodos} completed={2} />
              }
            />
            <Route
              exact
              path="favorite"
              element={
                <HomeTodo todos={todos} setTodos={setTodos} completed={3} />
              }
            />
          </Route>
          <Route exact path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
      <Outlet />
    </>
  );
}
