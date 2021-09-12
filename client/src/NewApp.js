import React from 'react';
import { Switch, Route, useParams } from 'react-router-dom';
import Container from './components/layout/Container';
import Home from './pages/Home';

export default function App() {
  return (
    <Switch>
      <Route path="/report/:id">
        <Report />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}

function Report() {
  let { id } = useParams();
  return (
    <Container>
      <h2>Report ID: {id}</h2>
    </Container>
  );
}
