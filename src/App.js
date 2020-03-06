import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Home from "./components/home/Home"
import Dashboard from "./components/dashboard/Dashboard"
import Login from "./components/auth/Login"
import Register from "./components/auth/Register"
import Redux from "./components/Redux"

// any route that is private and needs authentication will have a redirect to the login page when users attempt to visit it.
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/redux" component={Redux} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
