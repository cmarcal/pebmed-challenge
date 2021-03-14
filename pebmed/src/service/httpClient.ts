import axios from 'axios';

const httpClient = axios.create({
	headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', 'Accept': '*/*' },
	baseURL: 'https://604b7df6ee7cb900176a23a7.mockapi.io/api/v1/'
});

httpClient.interceptors.request.use((config) => {
	return config;
});

export default httpClient;
