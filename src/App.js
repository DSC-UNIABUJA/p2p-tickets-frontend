import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./views/home/Home";
import Dashboard from "./views/dashboard/Dashboard";
import Login from "./views/auth/Login";
import Register from "./views/auth/Register";
import Alert from "./components/alert/Alert";
import Settings from "./views/settings/Settings";
import NotFound from "./views/notfound/NotFound";
import About from "./views/about/About";
import AllEvents from "./views/allEvents/AllEvents"
import Event from "./views/event/Event"
import MyEvent from "./views/myEvent/MyEvent"

// any route that is private and needs authentication will have a redirect to the login page when users attempt to visit it.
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Alert />
        <Switch>
          {/* public routes */}
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route path="/event/:eventId" component={Event} />
          <Route exact path="/about" component={About} />
          <Route exact path="/all-events" component={AllEvents} />
          {/* private routes. configure their redirection properly when API is ready */}
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/settings" component={Settings} />
          <Route path="/my-event/:eventId" component={MyEvent} />
          <Route exact path="/reset-password" />
          <Route exact path="/forgot-password" />

          <Route component={NotFound} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
