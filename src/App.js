import "./App.css";
import React from "react";
import Header from "./MyComponents/Header";
import Length from "./MyComponents/Length";
import Angle from "./MyComponents/Angle";
import Temperature from "./MyComponents/Temperature";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { Link } from "react-router-dom";
// import { useState } from "react";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/temperature">
          <Temperature />
        </Route>
        <Route path="/length">
          <Length />
        </Route>
        <Route path="/angle">
          <Angle />
        </Route>
      </Switch>
      <p className="text-center">Click menu/Select Unit to change unit.</p>
    </Router>
  );
}

export default App;
// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <h2>Click this Button</h2>
//       <button onClick={() => setCount(count + 1)}>{count}</button>
//     </>
//   );
// }

/* <Calculator /> */
