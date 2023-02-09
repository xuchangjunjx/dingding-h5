import axios from "axios";
let config = {
	baseURL: "/",
	timeout: 60 * 1000, // Timeout
	// withCredentials: true, // Check cross-site Access-Control
	headers: {
		// "Content-Type": "application/json"
	}
};
const _axios = axios.create(config);

export default _axios;
