const apiUrl = "https://api.themoviedb.org/3";
const apiKey = "api_key=b130d867055ff0c09fffec4729292241"

export default {
    getMovies() {
        return fetch(`${apiUrl}/movie/popular?${apiKey}`)
        .then((res) => res.json())
    },
    getMovie(id) {
        return fetch(`${apiUrl}/movie/${id}?${apiKey}`)
        .then((res) => res.json())
    }
}