//axios

import * as  utilsHttp from '@/services/partials/utilsHttp';
const {requestF, requestError, responseF, responseError} = utilsHttp;
import {
	API_URL,
} from '@/config/settings'

import axios from 'axios';
const headersDefault = _ =>{
	return {
		'X-Requested-With': 'XMLHttpRequest',
		'Accept': 'application/json',
		'Content-Type': 'application/json'
	}
};

// For common config
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.common = headersDefault();
axios.interceptors.request.use(requestF, requestError);
axios.interceptors.response.use(responseF, responseError);

// create a new axios instance
const httpResource = axios.create({
	baseURL: `${API_URL}v1/`
});
httpResource.defaults.headers.post["Content-Type"] = "application/json";
httpResource.defaults.headers.common = headersDefault();
httpResource.interceptors.request.use(requestF, requestError);
httpResource.interceptors.response.use(responseF, responseError);
export {
	httpResource
}
