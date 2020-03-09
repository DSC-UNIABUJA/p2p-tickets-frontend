import React, { useState } from "react";
import Fade from "@material-ui/core/Fade";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";

import PropTypes from "prop-types";

function Alert(props) {
	return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles(theme => ({
	root: {
		width: "100%",
		"& > * + *": {
			marginTop: theme.spacing(2)
		}
	}
}));

const AlertComponent = ({ alert }) => {
	const classes = useStyles();

	const [open, setOpen] = useState(true);

	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}

		setOpen(false);
	};

	const alertContent = () => {
		if (alert.type.toLowerCase() === "error") {
			return (
				<Snackbar
					TransitionComponent={Fade}
					anchorOrigin={{ vertical: "top", horizontal: "center" }}
					open={open}
					autoHideDuration={5000}
					onClose={handleClose}
				>
					<Alert onClose={handleClose} severity="error">
						{alert.message}
					</Alert>
				</Snackbar>
			);
		} else if (alert.type.toLowerCase() === "info") {
			return (
				<Snackbar
					TransitionComponent={Fade}
					anchorOrigin={{ vertical: "top", horizontal: "center" }}
					open={open}
					autoHideDuration={5000}
					onClose={handleClose}
				>
					<Alert onClose={handleClose} severity="info">
						{alert.message}
					</Alert>
				</Snackbar>
			);
		} else if (alert.type.toLowerCase() === "success") {
			return (
				<Snackbar
					TransitionComponent={Fade}
					anchorOrigin={{ vertical: "top", horizontal: "center" }}
					open={open}
					autoHideDuration={5000}
					onClose={handleClose}
				>
					<Alert onClose={handleClose} severity="success">
						{alert.message}
					</Alert>
				</Snackbar>
			);
		} else {
			return (
				<Alert icon={false} severity="success">
					{alert.message}
				</Alert>
			);
		}
	};
	return <div className={classes.root}>{alertContent()}</div>;
};

AlertComponent.propTypes = {
	alert: PropTypes.object.isRequired
};

export default AlertComponent;
