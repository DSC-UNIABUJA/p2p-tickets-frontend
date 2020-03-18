import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function Loader() {
	return (
		<div style={{marginLeft: "auto", marginRight: "auto", textAlign: "center"}}>
			<CircularProgress disableShrink />
		</div>
	);
}
