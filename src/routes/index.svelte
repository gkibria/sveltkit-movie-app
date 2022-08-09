<script>
	import { onMount } from 'svelte';

	import { fade, fly, scale } from 'svelte/transition';

	import Movies from '../components/Movies.svelte';
	export let movies;

	onMount(() => {
		console.log('onMount from page');
	});
</script>

<svelte:head>
	<title>SvelteKit playground</title>
</svelte:head>

<article transition:scale={{ duration: 200 }}>
	<h1>Welcome to {import.meta.env.VITE_SITE_NAME ?? 'SvelteKit'}</h1>

	<Movies {movies} containerTitle="Popular Movies" />
</article>

<style>
	h1 {
		text-align: center;
	}
</style>
