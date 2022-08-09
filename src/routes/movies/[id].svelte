<script context="module">
	export async function load({ fetch, params }) {
		// Without Promise.all
		//----------------------
		// const res = await fetch(
		// 	`https://api.themoviedb.org/3/movie/${params.id}?api_key=${import.meta.env.VITE_MOVIE_API}`
		// );
		// const movie = await res.json();

		// const res2 = await fetch(
		// 	`https://api.themoviedb.org/3/movie/${params.id}/credits?api_key=${
		// 		import.meta.env.VITE_MOVIE_API
		// 	}`
		// );
		// const casts = await res2.json();
		// console.log(movie, casts);
		// return {
		// 	status: res.status,
		// 	props: {
		// 		movie,
		// 		casts: casts?.cast
		// 	}
		// };

		// Promise.all implementation
		//---------------------------
		try {
			const results = await Promise.all([
				fetch(
					`https://api.themoviedb.org/3/movie/${params.id}?api_key=${
						import.meta.env.VITE_MOVIE_API
					}`
				),
				fetch(
					`https://api.themoviedb.org/3/movie/${params.id}/credits?api_key=${
						import.meta.env.VITE_MOVIE_API
					}`
				)
			]);
			// console.log(results);
			const [movie, casts] = await Promise.all(results.map((r) => r.json()));
			// console.log(movie, casts);
			return {
				status: 200,
				props: {
					movie,
					casts: casts?.cast
				}
			};
		} catch (error) {
			// console.log(error);
			throw new Error('Something is wrong');
		}
	}
</script>

<script>
	import Casts from '../../components/Casts.svelte';
	import { fade } from 'svelte/transition';

	export let movie;
	export let casts;
</script>

<article transition:fade={{ duration: 200, delay: 200 }}>
	<h1>{movie?.title}</h1>
	<p class="genres">{movie?.genres.map((item) => item.name).join(' / ')}</p>
	<img src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />
	<p class="overview">{movie?.overview}</p>
	<Casts {casts} />
</article>

<style>
	article {
		text-align: center;
	}

	img {
		width: 95vw;
		border-radius: 1rem;
	}

	.overview {
		border: 1px solid #eee;
		padding: 1rem;
		font-size: 1.25rem;
		color: #333;
	}
	.genres {
		text-transform: uppercase;
		font-weight: bold;
		font-size: 0.85rem;
		color: #666;
	}
</style>
