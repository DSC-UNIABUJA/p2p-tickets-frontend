import React from "react";
import {Helmet} from "react-helmet";
import Wrapper from "../../components/Wrapper/Wrapper";

const Settings = () => {
	return (
		<Wrapper>
			<Helmet>
				<title>Account Settings | Ticketr</title>
			</Helmet>
			<h1>Settings</h1>
		</Wrapper>
	);
};

export default Settings;
