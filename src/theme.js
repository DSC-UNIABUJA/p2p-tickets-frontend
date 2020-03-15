import {ThemeOptions} from "@material-ui/core/styles/createMuiTheme";

/**@type {ThemeOptions}*/
const theme = {
	palette: {
		type: "light",
		primary: {
			main: "#FE463B",
		},
		secondary: {
			main: "#FAD436",
		},
		grey: {
			50: "#ffffff",
		},
		text: {},
		background: {
			default: "#212121",
		},
		tonalOffset: 0.5,
		contrastThreshold: 4,
	},
	typography: {
		fontFamily: "Montserrat, sans-serif",
		h3: {
			fontFamily: "Montserrat, sans-serif",
		},
		h4: {
			fontFamily: "Montserrat, sans-serif",
		},
		body1: {
			fontSize: "14px",
		},
	},
};

export default theme;
