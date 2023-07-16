<script>
	import { onMount, onDestroy } from 'svelte';
	import * as faceapi from 'face-api.js';

	let videoEl;
	let canvas;

	async function getWebcam() {
		const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
		videoEl.srcObject = mediaStream;
		videoEl.play();
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

	function getLabeledFaceDescriptions() {
		const labels = ['Alan', 'Gagi'];
		return Promise.all(
			labels.map(async (label) => {
				const descriptions = [];
				for (let i = 1; i <= 2; i++) {
					const img = await faceapi.fetchImage(`training/${label}/${i}.jpeg`);
					const detections = await faceapi
						.detectSingleFace(img)
						.withFaceLandmarks()
						.withFaceDescriptor();
					descriptions.push(detections.descriptor);
				}
				return new faceapi.LabeledFaceDescriptors(label, descriptions);
			})
		);
	}

	async function recognizeFaces() {
		const labeledFaceDescriptors = await getLabeledFaceDescriptions();
		const faceMatcher = new faceapi.FaceMatcher(labeledFaceDescriptors, 0.6);

		canvas.width = videoEl.videoWidth;
		canvas.height = videoEl.videoHeight;
		const displaySize = { width: videoEl.videoWidth, height: videoEl.videoHeight };

		faceapi.matchDimensions(canvas, displaySize);

		setInterval(async () => {
			const detections = await faceapi
				.detectAllFaces(videoEl)
				.withFaceLandmarks()
				.withFaceDescriptors();

			const resizedDetections = faceapi.resizeResults(detections, displaySize);

			canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
			faceapi.draw.drawDetections(canvas, resizedDetections);
			// faceapi.draw.drawFaceLandmarks(canvas, resizedDetections);

			const results = resizedDetections.map((d) => faceMatcher.findBestMatch(d.descriptor));

			results.forEach((result, i) => {
				const box = resizedDetections[i].detection.box;
				const { label, distance } = result;

				new faceapi.draw.DrawTextField(
					[`${label} (${Math.round(distance * 100) / 100})`],
					box.bottomLeft
				).draw(canvas);
			});
			console.log(results);
		}, 100);
	}

	onMount(async () => {
		videoEl = document.querySelector('video');
		canvas = document.querySelector('canvas');
		await faceapi.nets.ssdMobilenetv1.loadFromUri('/models');
		await faceapi.nets.faceLandmark68Net.loadFromUri('/models');
		await faceapi.nets.faceRecognitionNet.loadFromUri('/models');
		getWebcam();
		recognizeFaces();
	});

	onDestroy(() => {
		stopWebcam();
	});
</script>

<div class="container">
	<!-- svelte-ignore a11y-media-has-caption -->
	<video bind:this={videoEl} />
	<canvas bind:this={canvas} />
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
