import React from "react";
import "./App.css";
import { PokeList } from "./PokeList";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { PokeDetail } from "./PokeDetail";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <PokeList />
        </Route>

        <Route
          exact
          path="/pokemon/:name"
          component={({ match }: { match: { params: { name: string } } }) => (
            <PokeDetail name={match.params.name} />
          )}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
