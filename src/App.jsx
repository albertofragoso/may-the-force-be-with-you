import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Films from './pages/Films'
import Characters from './pages/Characters';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Films} />
        <Route exact path="/:id/characters" component={Characters} />
        <Route component={() => <h1>Not Found</h1>}/>
      </Switch>
    </Layout>
  </BrowserRouter>
)

export default App;
