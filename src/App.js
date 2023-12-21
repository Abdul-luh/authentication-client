import { useEffect, useState } from "react";
import Axios from "axios";

function App() {
	const [loginSatus, setLoginSatus] = useState(false);

	Axios.defaults.withCredentials = true;

	const CheckAuthentication = () => {
		Axios.get(`http://localhost:4500/isAuthorised`, {
			headers: { "x-access-token": localStorage.getItem("token") },
		}).then((response) => console.log(response));
	};

	useEffect(() => {
		Axios.get("http://localhost:4500/login").then((response) => {
			console.log(response);
			if (response.data.loggedIn === true) {
				setLoginSatus(response.data.user[0].username);
			}
			console.log(loginSatus);
		});
	}, [loginSatus]);

	return (
		<div className="App">
			<div>
				{loginSatus && (
					<button onClick={CheckAuthentication}>check if authenticated</button>
				)}
			</div>
		</div>
	);
}

export default App;
