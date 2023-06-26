import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
import React from "react";

import Home from "./Home/Home";
import HomeTodo from "../components/HomeTodo/HomeTodo";

export default function RouteScreens() {
  const backEndData = [
    {
      id: 2,
      title: "Second task",
      isDone: true,
    },
    {
      id: 1,
      title: "First task",
      isDone: false,
    },
  ];

  const [todos, setTodos] = React.useState(backEndData);

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
            <Route exact path="*" element={<div>Page not found</div>} />
          </Route>
        </Routes>
      </Router>
      <Outlet />
    </>
  );
}
