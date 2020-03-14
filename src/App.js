import React from "react";
import {Provider} from "react-redux";
import store from "./store";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./views/home/Home";
import Dashboard from "./views/dashboard/Dashboard";
import Login from "./views/auth/Login";
import ResetPassword from "./views/auth/ResetPassword";
import Register from "./views/auth/Register";
import Alert from "./components/alert/Alert";
import Settings from "./views/settings/Settings";
import NotFound from "./views/notfound/NotFound";
import About from "./views/about/About";
import AllEvents from "./views/allEvents/AllEvents";
import Event from "./views/event/Event";
import MyEvent from "./views/myEvent/MyEvent";
import {createMuiTheme, ThemeProvider} from "@material-ui/core/styles";
import themeOptions from "./theme";

const App = () => {
	// Leave this for adding dark mode later in the future
	const [mode, setMode] = React.useState("light");

	const theme = React.useMemo(() => {
		themeOptions.palette.type = mode;
		themeOptions.palette.background.default = mode === "light" ? "#fff" : "#212121";
		themeOptions.palette.text.primary = mode === "light" ? "#656a72" : "#e3e3e3";
		return createMuiTheme(themeOptions);
	}, [mode]);

	return (
		<Provider store={store}>
			<Router>
				<ThemeProvider theme={theme}>
					<Alert />
					<Switch>
						{/* public routes */}
						<Route exact path="/" component={Home} />
						<Route exact path="/register" component={Register} />
						<Route exact path="/login" component={Login} />
						<Route path="/event/:eventId" component={Event} />
						<Route exact path="/about" component={About} />
						<Route exact path="/all-events" component={AllEvents} />
						<Route exact path="/reset-password" component={ResetPassword} />
						{/* private routes. configure their redirection properly when API is ready */}
						<Route exact path="/dashboard" component={Dashboard} />
						<Route exact path="/settings" component={Settings} />
						<Route path="/my-event/:eventId" component={MyEvent} />

						<Route component={NotFound} />
					</Switch>
				</ThemeProvider>
			</Router>
		</Provider>
	);
};

export default App;
