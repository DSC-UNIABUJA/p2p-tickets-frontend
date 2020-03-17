import React from "react";
import Overview from "../Views/Admin/Overview";
import Login from "../Views/Admin/Login";
import Payments from "../Views/Admin/Payments";
import Users from "../Views/Admin/Users";
import {Route} from "react-router-dom";

const routes = [
	{path: "/admin/overview", component: Overview},
	{path: "/admin/login", component: Login},
	{path: "/admin/payments", component: Payments},
	{path: "/admin/users", component: Users},
];

const Admin = () => {
	return (
		<>
			{routes.map((route, i) => (
				<Route key={i} exact path={route.path} component={route.component} />
			))}
		</>
	);
};

export default Admin;
