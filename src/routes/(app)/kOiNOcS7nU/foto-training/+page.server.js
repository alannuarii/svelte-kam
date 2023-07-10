import { API_ENDPOINT } from '../../../../lib/js/endpoint';

export const load = async (params) => {
	const res = await fetch(`${API_ENDPOINT}/get/photo-training`);
	const data = await res.json();

	return data;
};

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();

		const formData = new FormData();
		formData.append('url', data.get('url'));

		const parsedData = {};
		for await (const [name, value] of formData.entries()) {
			parsedData[name] = value;
		}

		const res = await fetch(`${API_ENDPOINT}/delete/photo-training`, {
			method: 'DELETE',
			body: JSON.stringify(parsedData),
			headers: {
				'Content-Type': 'application/json'
			}
		});

		return res.json();
	}
};
