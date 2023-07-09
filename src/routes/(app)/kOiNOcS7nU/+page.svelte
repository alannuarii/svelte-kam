<script>
	import Menu from '../../../lib/components/Menu.svelte';

	const adminMenu = [
		{
			path: '/kOiNOcS7nU/camera',
			icon: 'fi fi-rr-mode-portrait',
			name: 'Camera',
			visibility: ''
		},
		{
			path: '/apel',
			icon: 'fi fi-rr-users-alt',
			name: 'Apel',
			visibility: 'invisible'
		},
		{
			path: '/cctv',
			icon: 'fi fi-rr-camera-cctv',
			name: 'CCTV',
			visibility: 'invisible'
		},
		{
			path: '/tamu',
			icon: 'fi fi-rr-person-simple',
			name: 'Tamu',
			visibility: 'invisible'
		}
	];
</script>

<section>
	<div class="text-center">
		<h6>MENU ADMIN</h6>
	</div>
	<div class="d-flex justify-content-evenly text-center py-3">
		{#each adminMenu as menu}
			<Menu path={menu.path} icon={menu.icon} name={menu.name} visibility={menu.visibility} />
		{/each}
	</div>
</section>

<style>
	h6 {
		color: #2ec4b6;
		font-weight: 700;
		font-size: 6vw;
	}
</style>
