<script>
	import ZoomDelete from '../../../../lib/components/ZoomDelete.svelte';
	export let data;

	const photos = data.data.length > 0 ? data.data : [];
</script>

<div class="px-3">
	<div class="row gx-3 gy-3">
		{#each photos as photo}
			<div class="col-6">
				<img
					src={`${photo.url}`}
					class="img-fluid"
					data-bs-toggle="modal"
					data-bs-target="#{photo.filename}"
					alt=""
				/>
				<ZoomDelete image={`${photo.url}`} id={photo.filename} url={photo.url} />
				<p class="text-center fst-italic">{photo.label}</p>
			</div>
		{/each}
	</div>
</div>

<style>
	img {
		border-radius: 20px;
	}
	p {
		margin: 0px;
	}
</style>
