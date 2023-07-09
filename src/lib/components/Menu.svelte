<script>
	export let path;
	export let icon;
	export let name;
	export let visibility
</script>

<a href={path} class="text-reset {visibility}">
	<i class={icon} />
	<p>{name}</p>
</a>

<style>
	i {
		/* padding: 15px 17px; */
		/* border-radius: 50%; */
		font-size: 45px;
		/* background-color: #cbf3f0; */
		color: #2ec4b6;
	}
	p {
		margin: 0;
		font-size: 3vw;
		margin-top: -7px;
		font-weight: 300;
	}
	a {
		text-decoration: none;
	}
</style>
