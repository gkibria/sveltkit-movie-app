export async function get(ctx) {
    const res = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_MOVIE_API}`
    )
    const movies = await res.json()
    return {
        status: res.status,
        body: {
            movies: movies?.results
        }
    }
}