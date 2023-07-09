<script>
	import Menu from '../../lib/components/Menu.svelte';
	import Timer from '../../lib/components/Timer.svelte';
	import Bottom from '../../lib/components/Bottom.svelte';
	import Personil from '../../lib/components/Personil.svelte';
	import Times from '../../lib/components/Times.svelte';
	import Info from '../../lib/components/Info.svelte';

	const menuRow1 = [
		{
			path: '/patroli',
			icon: 'fi fi-rr-refresh',
			name: 'Patroli'
		},
		{
			path: '/apel',
			icon: 'fi fi-rr-users-alt',
			name: 'Apel'
		},
		{
			path: '/cctv',
			icon: 'fi fi-rr-camera-cctv',
			name: 'CCTV'
		},
		{
			path: '/tamu',
			icon: 'fi fi-rr-person-simple',
			name: 'Tamu'
		}
	];
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
	<div class="py-5 text-center">
		<div class="d-flex justify-content-evenly">
			{#each menuRow1 as menu}
				<Menu path={menu.path} icon={menu.icon} name={menu.name} />
			{/each}
		</div>
	</div>
	<div>
		<Bottom />
	</div>
</section>
