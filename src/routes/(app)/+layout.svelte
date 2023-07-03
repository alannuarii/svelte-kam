<script>
	import disable from '../../lib/img/disable.gif';
	import Header from '../../lib/components/Header.svelte';
</script>

<svelte:head>
	<title>Sekap</title>
	<meta name="description" content="Sekap" />
</svelte:head>

<main id="mobile" class="d-sm-none">
	<Header />
	<div class="mt-4">
		<slot />
	</div>
</main>
<main id="desktop" class="d-none d-sm-block position-absolute top-50 start-50 translate-middle">
	<img src={disable} class="img-fluid" alt="" />
	<h1 class="text-center">Access not available for desktop!</h1>
</main>

<style>
	#desktop h1 {
		font-size: 3vw;
		font-weight: 300;
	}
</style>
