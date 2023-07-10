<script>
	export let image;
	export let id;
	export let url;
</script>

<div class="modal fade" {id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
	<div class="modal-dialog modal-dialog-centered">
		<div class="modal-content bg-transparent border-0">
			<div class="modal-body d-flex flex-column justify-content-center">
				<img src={image} class="img-fluid" alt="" />
				<form method="POST">
					<div class="text-center mt-1">
						<input type="hidden" name="url" value={url} />
						<button type="submit" class="btn"><i class="fi fi-sr-trash text-danger" /></button>
					</div>
				</form>
			</div>
		</div>
	</div>
</div>

<style>
	.modal-content {
		height: 70vh;
	}
	i {
		font-size: 40px;
	}
	img {
		border-radius: 20px;
	}
	.btn{
		border: none;
	}
</style>
