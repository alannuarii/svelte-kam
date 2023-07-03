export const convertDate = (tanggal) => {
	// membuat objek Date dengan parameter waktu Sat, 06 May 2023 00:00:00 GMT
	const date = new Date(tanggal);
	const months = [
		'Januari',
		'Februari',
		'Maret',
		'April',
		'Mei',
		'Juni',
		'Juli',
		'Agustus',
		'September',
		'Oktober',
		'November',
		'Desember'
	];
	const day = date.getDate();
	const monthIndex = date.getMonth();
	const year = date.getFullYear();
	const formattedDate = `${day} ${months[monthIndex]} ${year}`;
	return formattedDate;
	// 6 Mei 2023
};

export function date(tanggal) {
	const date = new Date(tanggal);
	const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
	const result = date.toLocaleDateString('id-ID', options);
	return result;
	// 'Senin, 20 Februari 2023'
}

export const getToday = () => {
	let tomorrow = new Date();
	tomorrow.setHours(tomorrow.getHours() + 8);
	tomorrow = tomorrow.toISOString().slice(0, 10);
	return tomorrow;
	// 2023-02-21 tanggal hari ini
};
