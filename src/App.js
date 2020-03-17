import React from "react";
import {Provider} from "react-redux";
import store from "./store";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./views/home/Home";
import CssBaseline from "@material-ui/core/CssBaseline";
import Alert from "./components/alert/Alert";
import NotFound from "./views/NotFound/NotFound";
import {createMuiTheme, ThemeProvider} from "@material-ui/core/styles";
import themeOptions from "./theme";
import Admin from "./Layouts/Admin";
import Dashboard from "./Layouts/Dashboard";
import Login from "./views/auth/Login";
import Register from "./views/Auth/Register";
import ResetPassword from "./views/Auth/ResetPassword";
import AllEvents from "./views/allEvents/AllEvents";
import Event from "./views/event/Event";
import About from "./views/about/About";

const publicRoutes = [
	{path: "/login", component: Login},
	{path: "/register", component: Register},
	{path: "/reset-password", component: ResetPassword},
	{path: "/all-events", component: AllEvents},
	{path: "/event/:eventId", component: Event},
	{path: "/about", component: About},
];

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
					<CssBaseline />
					<Alert />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path={"/admin/*"} component={Admin} />
						<Route path={"/dashboard/*"} component={Dashboard} />
						{publicRoutes.map((route, i) => (
							<Route key={i} exact path={route.path} component={route.component} />
						))}
						<Route component={NotFound} />
					</Switch>
				</ThemeProvider>
			</Router>
		</Provider>
	);
};

export default App;
