import { AxiosPromise } from 'axios';

import httpClient from './httpClient';

export function get(url: string): AxiosPromise {
	return httpClient.get(url);
}

export function post(url: string, dataBody = null): AxiosPromise {
	return httpClient.post(url, dataBody);
}
