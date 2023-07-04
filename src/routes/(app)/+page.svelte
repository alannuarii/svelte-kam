<script>
	import Menu from '../../lib/components/Menu.svelte';
	import Timer from '../../lib/components/Timer.svelte';
	import Bottom from '../../lib/components/Bottom.svelte';
	import Personil from '../../lib/components/Personil.svelte';
	import Times from '../../lib/components/Times.svelte';
	import Info from '../../lib/components/Info.svelte';
</script>

<section>
	<div class="me-3">
		<Timer />
	</div>
	<div class="mx-3 py-3 row">
		<div class="col-9">
			<Personil />
		</div>
		<div class="col-3 d-flex align-items-center">
			<Times />
		</div>
	</div>
	<div class="mx-3 py-2">
		<Info />
	</div>
	<div class="py-5">
		<Menu />
	</div>
	<div>
		<Bottom />
	</div>
</section>
