import React from "react";
import { Helmet } from "react-helmet";
import Wrapper from "../../components/wrapper/Wrapper";

const Settings = () => {
	return (
		<Wrapper>
			<Helmet>
				<title>Reset Password | Ticketr</title>
			</Helmet>
			<h1>Reset Your Password</h1>
			<h2>Forgotten your password? don't worry, we got you covered</h2>
		</Wrapper>
	);
};

export default Settings;
