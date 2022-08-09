<script>
	export let containerTitle = 'Latest Movies';
	export let movies = [];
</script>

<section>
	<h2>{containerTitle}</h2>
	<div class="movie_container">
		{#each movies as movie}
			<a href={`/movies/${movie?.id}`}>
				<div class="movie_card">
					<img src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`} alt={movie?.title} />
					<p class="movie_title">{movie?.title}</p>
					<p class="movie_year">{movie?.release_date}</p>
				</div>
			</a>
		{/each}
	</div>
</section>

<style>
	h2 {
		text-align: center;
		text-transform: uppercase;
	}
	.movie_container {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
		gap: 1rem;
	}

	.movie_card:hover {
		box-shadow: 5px 5px 5px #eee;
	}

	.movie_card {
		border: 1px solid #ddd;
		text-align: center;
		padding-top: 1rem;
		border-radius: 1%;
	}

	img {
		width: 250px;
		object-fit: cover;
	}

	.movie_title {
		font-weight: bold;
	}

	.movie_title,
	.movie_year {
		color: black;
	}

	.movie_container a {
		text-decoration: none;
	}
</style>
