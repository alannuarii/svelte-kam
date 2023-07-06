<script>
	import pagi from '../img/pagi.png';
	import sore from '../img/sore.png';
	import malam from '../img/malam.png';
	import { rentangWaktu } from '../js/jadwal';

	let waktu;

	if (rentangWaktu() === 'm') {
		waktu = malam;
	} else if (rentangWaktu() === 'p') {
		waktu = pagi;
	} else {
		waktu = sore;
	}
</script>

<div>
	<img src={waktu} class="img-fluid" alt="" />
</div>
