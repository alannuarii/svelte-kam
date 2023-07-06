<script>
	import { getPiket } from '../js/jadwal';

	let names = getPiket();
</script>

<h6>Petugas Piket</h6>
{#each names as nama}
	<div class="d-flex align-items-center">
		<i class="fi fi-sr-user" />
		<p>{nama}</p>
	</div>
{/each}

<style>
	i {
		font-size: 25px;
		color: #2b2d42;
	}
	p {
		margin: 0px;
		margin-left: 5px;
		color: #2ec4b6;
		font-weight: 500;
		font-size: 4vw;
	}
</style>
