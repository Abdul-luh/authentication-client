import React, { useState } from "react";
import Axios from "axios";
// import { useNavigate } from "react-router-dom";

export default function Login() {
	const [user, setuser] = useState({
		username: "",
		password: "",
	});

	// const navigate = useNavigate();

	const [loginSatus, setLoginSatus] = useState(false);

	const handleLogin = () => {
		Axios.post(`http://localhost:4500/login`, user).then((response) => {
			console.log(response.data.result[0]);
			response.data.authr === false
				? setLoginSatus(false)
				: setLoginSatus(true);
			localStorage.setItem("token", response.data.token);
			// navigate("/");
		});
	};

	return (
		<div className="login">
			<h1>LOGIN</h1>
			<input
				type="text"
				placeholder="username"
				onChange={(e) => {
					setuser({ ...user, username: e.target.value });
				}}
			/>
			<input
				type="password"
				placeholder="password"
				onChange={(e) => {
					setuser({ ...user, password: e.target.value });
				}}
			/>
			<button onClick={handleLogin}>LOGIN</button>
		</div>
	);
}
