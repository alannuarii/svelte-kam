<script>
	import DropdownHeader from '../components/DropdownHeader.svelte';
	import { page } from '$app/stores';

	$: path = $page.url.pathname;

	function refresh() {
		window.location.reload();
	}
</script>

<nav class="navbar shadow-sm">
	<div class="container-fluid">
		{#if path === '/'}
			<a class="navbar-brand logo" href="/"><i class="fi fi-sr-shield-check" /></a>
			<p class="text-center ms-auto">Security App</p>
			<div class="ms-auto"><DropdownHeader /></div>
		{:else}
			<a class="navbar-brand" href="/"><i class="fi fi-rr-angle-left" /></a>
			<p class="text-center ms-auto">Security App</p>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<div class="ms-auto" on:click={refresh}><i class="fi fi-rr-rotate-right me-2" /></div>
		{/if}
	</div>
</nav>

<style>
	nav {
		height: 70px;
		background-color: #ffd59d;
	}
	.logo {
		margin-top: -10px;
		position: absolute;
		top: 10%;
	}
	.fi-sr-shield-check {
		font-size: 90px;
		color: #2b2d42;
	}
	p {
		margin: 0;
		font-size: 5vw;
		font-weight: 700;
	}
</style>
