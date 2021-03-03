import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import Latest from './containers/Latest';
import Browse from './containers/Browse';
import MovieId from "./containers/MovieId";
import MovieName from "./containers/MovieName";

import Search from './containers/Search';
import Error404 from './containers/404';
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/latest' exact component={Latest} />
        <Route path='/browse/:name' exact component={Browse} />
        <Route path='/movie/id/:id' exact component={MovieId} />
        <Route path='/movie/name/:name' exact component={MovieName} />
        <Route path='/search' exact component={Search} />
        <Route exact component={Error404} />

      </Switch>
    </BrowserRouter>
  );
}

export default App;


