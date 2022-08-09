<script>
	export let containerTitle = 'Casts';
	export let casts = [];
	const castImage = (cast) => {
		return cast.profile_path
			? `https://image.tmdb.org/t/p/w500/${cast?.profile_path}`
			: 'https://via.placeholder.com/500x750?text=No Image';
	};
</script>

<section>
	<h2>{containerTitle}</h2>
	<div class="movie_container">
		{#if casts}
			{#each casts as person}
				<div class="movie_card">
					<img src={castImage(person)} alt={person?.name} />
					<p class="movie_title">{person?.name}</p>
					<p class="movie_year">{person?.character}</p>
				</div>
			{/each}
		{:else}
			no props passed
		{/if}
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

	.movie_year {
		font-size: 0.8rem;
	}
</style>
