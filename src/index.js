import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./login/login";
import Register from "./Register/Register";
import { UserContxtProivder } from "./context/configure";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "/register",
		element: <Register />,
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<UserContxtProivder>
			<RouterProvider router={router} />
		</UserContxtProivder>
	</React.StrictMode>
);
