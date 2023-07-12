import {API_ENDPOINT} from '../../../lib/js/endpoint';

export const load = async (params) => {
	const res = await fetch(`${API_ENDPOINT}/get/photo-training`);
	const data = await res.json();

	return data;
};
