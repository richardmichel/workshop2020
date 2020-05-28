import {httpResource} from '@/services/http';

const resource = "movies";

export default {
	getMyMovies() {
		return httpResource.get(`${resource}`);
	},
}