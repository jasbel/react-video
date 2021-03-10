import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Layout from '../components/Layout';
import Login from '../containers/Login';
import NotFound from '../containers/NotFound';
import Register from '../containers/Register';
import Home from '../containers/Home';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        {/* <Route exact path="/" component={Register} /> */}
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
)

export default App;
