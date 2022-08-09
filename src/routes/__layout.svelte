<script>
	import { onMount } from 'svelte';

	import Nav from '../components/Nav.svelte';

	onMount(() => {
		console.log('onMount from layout');
	});
</script>

<main>
	<Nav />
	<slot />
</main>

<style>
	main {
		padding: 1rem;
	}
</style>
