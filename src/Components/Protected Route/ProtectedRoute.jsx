import React from "react";
import { Redirect, Route } from "react-router";

export default function ProtectedRoute({ component: Component, ...rest }) {
	let user = localStorage.getItem("User");
	if (user)
		return <Route {...rest} render={(props) => <Component {...props} />} />;
	else return <Redirect to="/" />;
}