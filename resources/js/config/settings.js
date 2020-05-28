export const STATUS = 'local';
export const BASE_URL = {
	'local': 'http://127.0.0.1:8000/',
	'dev': 'https://10.0.0.1:80005/',
	'production': 'https://api-buenas-pelis.com/',
};
export const API_URL = BASE_URL[STATUS] + 'api/';


