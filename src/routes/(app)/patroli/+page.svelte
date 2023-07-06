<script>
	import Webcam from '../../../lib/components/Webcam.svelte';

	let kondisi = false;
</script>

<div class="px-3">
	<div class="mb-3">
		<Webcam />
	</div>
	<div class="kondisi p-3 border mb-4">
		<label for="exampleRadios1" class="form-label">Kondisi</label>
		<div class="form-check">
			<input
				class="form-check-input"
				type="radio"
				name="kondisi"
				id="exampleRadios1"
				value="Aman"
				bind:group={kondisi}
			/>
			<label class="form-check-label" for="exampleRadios2"> Aman </label>
		</div>
		<div class="form-check">
			<input
				class="form-check-input"
				type="radio"
				name="kondisi"
				id="exampleRadios2"
				value="Tidak Aman"
				bind:group={kondisi}
			/>
			<label class="form-check-label" for="exampleRadios1"> Tidak Aman </label>
		</div>
		{#if kondisi === 'Tidak Aman'}
			<div>
				<input class="form-control" type="text" />
			</div>
		{/if}
	</div>
	<div class="d-flex justify-content-center">
		<button type="reset" class="btn reset">Reset</button>
		<button type="submit" class="btn submit">Kirim</button>
	</div>
</div>

<style>
	.kondisi {
		border-radius: 20px;
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
</style>
