<script>
	import { onMount, onDestroy } from 'svelte';
	import * as faceapi from 'face-api.js';

	let videoEl;
	let canvas;

	async function getWebcam() {
		const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
		videoEl.srcObject = mediaStream;

		videoEl.addEventListener('loadedmetadata', () => {
			videoEl.play();

			const displaySize = { width: videoEl.videoWidth, height: videoEl.videoHeight };
			faceapi.matchDimensions(canvas, displaySize);

			setInterval(async () => {
				if (videoEl && videoEl.srcObject && !videoEl.paused && !videoEl.ended) {
					const detections = await faceapi
						.detectAllFaces(videoEl)
						.withFaceLandmarks()
						.withFaceDescriptors();

					const resizedDetections = faceapi.resizeResults(detections, displaySize);
					canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);

					resizedDetections.forEach((detection) => {
						const box = detection.detection.box;
						const drawOptions = {
							lineWidth: 2,
							boxColor: 'red'
						};
						const drawBox = new faceapi.draw.DrawBox(box, drawOptions);
						drawBox.draw(canvas);
					});
				}
			}, 100);
		});
	}

	function stopWebcam() {
		if (videoEl && videoEl.srcObject) {
			const mediaStream = videoEl.srcObject;
			const tracks = mediaStream.getTracks();
			tracks.forEach((track) => track.stop());
		}
		if (videoEl) {
			videoEl.srcObject = null;
		}
	}

	onMount(async () => {
		videoEl = document.querySelector('video');
		canvas = document.querySelector('canvas');
		await faceapi.nets.ssdMobilenetv1.loadFromUri('/models');
		await faceapi.nets.faceLandmark68Net.loadFromUri('/models');
		await faceapi.nets.faceRecognitionNet.loadFromUri('/models');
		getWebcam();
	});

	onDestroy(() => {
		stopWebcam();
	});
</script>

<div class="container">
	<!-- svelte-ignore a11y-media-has-caption -->
	<video bind:this={videoEl} />
	<canvas />
</div>

<style>
	.container {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
		overflow: hidden;
	}

	video {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		object-fit: cover;
	}

	canvas {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
	}
</style>
