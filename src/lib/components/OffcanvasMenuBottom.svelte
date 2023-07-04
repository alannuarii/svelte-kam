<script>
	const menus = [
		{
			name: 'Laporan Patroli',
			path: '/patroli/laporan',
			icon: 'fi fi-rr-refresh'
		},
		{
			name: 'Laporan Apel',
			path: '/apel/laporan',
			icon: 'fi fi-rr-users-alt'
		},
		{
			name: 'Laporan CCTV',
			path: '/cctv/laporan',
			icon: 'fi fi-rr-camera-cctv'
		},
		{
			name: 'Laporan Penerimaan Tamu',
			path: '/buku-tamu/laporan',
			icon: 'fi fi-rr-person-simple'
		}
	];
</script>

<div
	class="offcanvas offcanvas-bottom"
	tabindex="-1"
	id="menuBottom"
	aria-labelledby="offcanvasBottomLabel"
>
	<div class="offcanvas-header">
		<i class="fi fi-rr-cross btn ms-auto" data-bs-dismiss="offcanvas" aria-label="Close" />
	</div>
	<div class="offcanvas-body small">
		<div class="list-group list-group-flush">
			{#each menus as menu}
				<a href={menu.path} class="list-group-item list-group-item-action"
					><i class="{menu.icon} me-2" /> {menu.name}</a
				>
			{/each}
		</div>
	</div>
</div>

<style>
	a {
		text-decoration: none;
		font-size: 17px;
		border: none;
		padding: 12px 15px;
	}
	.offcanvas {
		border-radius: 20px 20px 0 0;
		height: 350px;
	}
	.offcanvas .offcanvas-body {
		overflow: hidden;
	}
	.btn {
		border: none;
	}
	.offcanvas-header {
		height: 20px;
		padding-top: 30px;
	}
</style>
