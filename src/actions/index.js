import axios from 'axios';

const ROOT_URL = "https://api.wheretheiss.at/v1/satellites/";


export const FETCH_SATELLITE = 'FETCH_SATELLITE';

export function fetchData(id, rate) {
	const url = `${ROOT_URL}${id}`;
	const request = axios.get(url);

	console.log("request: ", request);

	return {
		type:FETCH_SATELLITE,
		payload: request
	};
}