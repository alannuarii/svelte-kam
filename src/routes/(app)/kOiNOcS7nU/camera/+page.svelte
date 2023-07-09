<script>
	import Webcam from '../../../../lib/components/Webcam.svelte';
</script>

<div class="px-3">
	<form method="POST">
		<div class="mb-3">
			<Webcam />
		</div>
		<div class="form-floating mb-3">
			<input
				type="text"
				class="form-control"
				id="floatingInput"
				placeholder="Masukkan label"
				name="label"
				required
			/>
			<label for="floatingInput">Label</label>
		</div>
		<div class="text-center">
			<button type="submit" class="btn">Kirim</button>
		</div>
	</form>
</div>

<style>
	button {
		background-color: #2ec4b6;
		color: #ffffff;
		border-radius: 10px;
		width: 30vw;
		height: 45px;
	}
	input {
		border-radius: 10px;
	}
</style>
