import React from "react";
import { Helmet } from "react-helmet";
import Wrapper from "../../components/wrapper/Wrapper";

const Dashboard = () => {
	return (
		<Wrapper>
			<Helmet>
				<title>Dashboard | Ticketr</title>
			</Helmet>
			<p>Dashboard here</p>
		</Wrapper>
	);
};

export default Dashboard;
