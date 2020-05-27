import {httpResource} from '@/services/http';

const resource = "movies";

export default {
	get() {
		return httpResource.post(`${resource}`);
	},
}