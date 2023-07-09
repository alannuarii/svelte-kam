import { API_ENDPOINT } from '../../../../lib/js/endpoint';

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();

		const formData = new FormData();
		formData.append('foto', data.get('foto'));
		formData.append('label', data.get('label'));

		const parsedData = {};
		for await (const [name, value] of formData.entries()) {
			parsedData[name] = value;
		}

		const res = await fetch(`${API_ENDPOINT}/post/photo-trainin`, {
			method: 'POST',
			body: JSON.stringify(parsedData),
			headers: {
				'Content-Type': 'application/json'
			}
		});

		const result = res.json();

		return result;
	}
};
