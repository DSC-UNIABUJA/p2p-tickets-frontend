import React from "react";
import {Provider} from "react-redux";
import store from "./store";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./views/home/Home";
import CssBaseline from "@material-ui/core/CssBaseline";
import Alert from "./components/alert/Alert";
import NotFound from "./views/notfound/NotFound";
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
					<CssBaseline />
					<Alert />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route component={NotFound} />
					</Switch>
				</ThemeProvider>
			</Router>
		</Provider>
	);
};

export default App;
