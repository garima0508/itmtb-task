import React, { useState } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Reco from "./Reco";
import Postreco from "./Postreco";
import Navbar from "./Navbar";

const App = () => {
  const [addItem, setAddItem] = useState([]);
  const addNote = (note) => {
    setAddItem((prevData) => {
      return [...prevData, note];
    });
  };

  return (
    <>
      <Router>
        <Navbar />
        <main>
          <Switch>
            <Route path="/" exact>
              <div>Home Page</div>
            </Route>
            <Route
              exact
              path="/postReco"
              render={() => <Postreco passNote={addNote} />}
            ></Route>
            <Route
              exact
              path="/reco"
              render={() => <Reco add={addItem} />}
            ></Route>
          </Switch>
        </main>
      </Router>
    </>
  );
};
export default App;
