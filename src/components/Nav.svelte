<script>
	import { page } from '$app/stores';
	// console.log($page);
	const links = [
		{ title: 'Home', path: '/' },
		{ title: 'Movies', path: '/movies' },
		{ title: 'About', path: '/about' }
	];
</script>

<nav>
	{#each links as link}
		<a href={link.path} class:active={$page.url.pathname === link.path}>{link.title}</a>
	{/each}
</nav>

<style>
	nav {
		text-align: center;
	}

	a {
		border: 1px solid #f5f5f5;
		padding: 0.5rem;
		text-decoration: none;
		color: blueviolet;
	}

	a:hover {
		background-color: antiquewhite;
	}

	a.active {
		background-color: antiquewhite;
	}
</style>
