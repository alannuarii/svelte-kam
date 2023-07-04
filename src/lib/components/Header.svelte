<script>
	import DropdownHeader from '../components/DropdownHeader.svelte';
</script>

<nav class="navbar shadow-sm">
	<div class="container-fluid">
		<a class="navbar-brand" href="/"><i class="fi fi-sr-shield-check" /></a>
		<p class="text-center ms-auto">Security App</p>
		<div class="ms-auto"><DropdownHeader /></div>
	</div>
</nav>

<style>
	nav {
		height: 70px;
		background-color: #ffd59d;
	}
	a {
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
