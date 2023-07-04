<script>
	import OffcanvasMenuBottom from './OffcanvasMenuBottom.svelte';
</script>

<nav class="navbar fixed-bottom shadow">
	<div class="container-fluid">
		<div
			class="btn"
			data-bs-toggle="offcanvas"
			data-bs-target="#menuBottom"
			aria-controls="offcanvasBottom"
		>
			<i class="fi fi-rr-grip-lines" />
		</div>
		<OffcanvasMenuBottom />
		<div class="btn camera">
			<i class="fi fi-rr-camera" />
		</div>
		<div class="btn">
			<i class="fi fi-rr-calendar-clock" />
		</div>
	</div>
</nav>

<style>
	nav {
		height: 70px;
		border-radius: 30px 30px 0 0;
		background-color: #ffecd4;
	}
	i {
		padding: 5px 7px;
		/* border-radius: 50%; */
		font-size: 25px;
		/* background-color: #ffd59d; */
		color: #ff9f1c;
	}
	.fi-rr-camera {
		font-size: 50px;
	}
	.camera {
		position: absolute;
		top: 20%;
		left: 50%;
		transform: translate(-50%, -50%);
		/* border: 10px solid #ffffff; */
		border-radius: 50%;
		background-color: #ffffff;
		/* padding: 0px 5px; */
	}
	.camera:active{
		background-color: #ffffff;
	}
	.btn{
		border: none;
	}
</style>
