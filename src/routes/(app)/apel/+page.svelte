<script>
	import { getPiket } from '../../../lib/js/jadwal';

	let names = getPiket();
	import { onMount, onDestroy } from 'svelte';
	import * as faceapi from 'face-api.js';

	let videoEl;
	let canvas;
	let arrNames = [];

	async function getWebcam() {
		const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
		videoEl.srcObject = mediaStream;
		videoEl.play();
	}

	function stopWebcam() {
		if (canvas && canvas.getContext) {
			const context = canvas.getContext('2d');
			context.clearRect(0, 0, canvas.width, canvas.height);
		}

		if (videoEl && videoEl.srcObject) {
			const mediaStream = videoEl.srcObject;
			const tracks = mediaStream.getTracks();
			tracks.forEach((track) => track.stop());
		}

		if (videoEl) {
			videoEl.srcObject = null;
		}

		setTimeout(() => {
			location.reload();
		}, 1000);
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
				.detectAllFaces(videoEl, new faceapi.SsdMobilenetv1Options({ minConfidence: 0.5 }))
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

			for (let i = 0; i < results.length; i++) {
				if (
					!arrNames.includes(results[i]._label) &&
					results[i]._label !== 'unknown' &&
					results[i]._distance <= 0.4
				) {
					arrNames.push(results[i]._label);
					arrNames = [...arrNames];
				}
			}
		}, 100);
	}

	onMount(async () => {
		videoEl = document.querySelector('video');
		canvas = document.querySelector('canvas');
		await Promise.all([
			faceapi.nets.ssdMobilenetv1.loadFromUri('/models'),
			faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
			faceapi.nets.faceRecognitionNet.loadFromUri('/models')
		]);
		getWebcam();
		recognizeFaces();
	});

	onDestroy(() => {
		stopWebcam();
	});
</script>

<div class="container mb-3">
	<!-- svelte-ignore a11y-media-has-caption -->
	<video bind:this={videoEl} />
	<canvas bind:this={canvas} />
</div>
<div class="p-3">
	<form method="POST">
		<div class="mb-4">
			<div class="mb-3">
				<h6>Piket Masuk</h6>
				<div class="border py-3 px-2">
					{#each arrNames as name}
						<span class="border p-2 me-2">{name}</span>
					{/each}
				</div>
			</div>
			<div>
				<h6>Piket Keluar</h6>
				<div class="border py-3 px-2">
					{#each names as name}
						<span class="border p-2 me-2">{name}</span>
					{/each}
				</div>
			</div>
		</div>
		<div class="d-flex justify-content-center">
			<button type="reset" class="btn reset">Reset</button>
			<button type="submit" class="btn submit">Kirim</button>
		</div>
	</form>
</div>

<style>
	.container {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		overflow: hidden;
		height: 70vh;
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
	.submit {
		background-color: #2ec4b6;
		color: #ffffff;
		border-radius: 0 10px 10px 0;
		width: 30vw;
		height: 45px;
	}
	.reset {
		border-color: #2ec4b6;
		color: #2ec4b6;
		border-radius: 10px 0 0 10px;
		width: 30vw;
		height: 45px;
	}
	.border {
		border-radius: 10px;
	}
	span {
		background-color: #2b2d42;
		color: #ffffff;
		border-color: #2b2d42;
	}
</style>
