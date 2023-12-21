import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const UserContxt = createContext();

export const UserContxtProivder = ({ children }) => {
	const [user, setUser] = useState({
		username: "",
		password: "",
	});

	const navigate = useNavigate();

	const [loginSatus, setLoginSatus] = useState(false);

	const handleLogin = () => {
		axios.post(`http://localhost:4500/login`, user).then((response) => {
			console.log(response.data.result[0]);
			response.data.authr === false
				? setLoginSatus(false)
				: setLoginSatus(true);
			localStorage.setItem("token", response.data.token);
			navigate("/");
		});
	};

	return (
		<UserContxt.Provider value={{ user, setUser }}>
			{children}{" "}
		</UserContxt.Provider>
	);
};

// : {
// 	children: React.ReactNode;
// }
