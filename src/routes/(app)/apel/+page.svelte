<script>
	import { onMount, onDestroy } from 'svelte';
	import * as faceapi from 'face-api.js';

	export let data;
	const photos = data.data.length > 0 ? data.data : [];

	let videoEl;
	let mediaStream;

	async function getWebcam() {
		mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
		videoEl.srcObject = mediaStream;
		videoEl.play();
	}

	function stopWebcam() {
		if (mediaStream) {
			const tracks = mediaStream.getTracks();
			tracks.forEach((track) => track.stop());
		}
		if (videoEl) {
			videoEl.srcObject = null;
		}
	}

	onMount(async () => {
		getWebcam();
		await Promise.all([
			faceapi.nets.ssdMobilenetv1.loadFromDisk('../../lib/models'),
			faceapi.nets.faceLandmark68Net.loadFromDisk('../../lib/models'),
			faceapi.nets.faceRecognitionNet.loadFromDisk('../../lib/models')
		]);
	});

	onDestroy(() => {
		stopWebcam();
	});
</script>

<div>
	<!-- svelte-ignore a11y-media-has-caption -->
	<video bind:this={videoEl} />
</div>
