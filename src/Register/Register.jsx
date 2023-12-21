import React, { useState } from "react";
import Axios from "axios";

export default function Register() {
	const [usernameReg, setUsernameReg] = useState(null);
	const [passwordReg, setPasswordReg] = useState(null);

	const handleRegister = () => {
		Axios.post(`http://localhost:4500/register`, {
			username: usernameReg,
			password: passwordReg,
		}).then((response) => {
			console.log(response);
			setUsernameReg(null);
			setPasswordReg(null);
		});
	};

	return (
		<div className="signup">
			<h1>SIGN UP</h1>
			<label htmlFor="username">username</label>
			<input
				type="text"
				placeholder="username"
				onChange={(e) => {
					setUsernameReg(e.target.value);
				}}
			/>
			<label htmlFor="username">password</label>
			<input
				type="password"
				placeholder="password"
				onChange={(e) => {
					setPasswordReg(e.target.value);
				}}
			/>
			<button onClick={handleRegister}>SIGN UP</button>
		</div>
	);
}
