import React from "react";
import {Route} from "react-router-dom";
import Overview from "../Views/Dashboard/Overview";
import Settings from "../Views/Dashboard/Settings";
import MyEvents from "../Views/Dashboard/MyEvents";

const routes = [
	{path: "/dashboard/overview", component: Overview},
	{path: "/dashboard/settings", component: Settings},
	{path: "/dashboard/my-events", component: MyEvents},
];

const Dashboard = () => {
	return (
		<>
			{routes.map((route, i) => (
				<Route key={i} exact path={route.path} component={route.component} />
			))}
		</>
	);
};

export default Dashboard;
