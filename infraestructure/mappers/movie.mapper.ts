import { Movie } from "../interfaces/movie.interface";
import { MovieResponse } from "../interfaces/movies.response";

export class MovieMapper {
    static mapMovieResponseToMovie(movieResponse: MovieResponse): Movie {
        return {
            adult: movieResponse.adult,
            back: `https://image.tmdb.org/t/p/w500/${movieResponse.backdrop_path}`,
            id: movieResponse.id,
            popularity: movieResponse.popularity,
            poster: `https://image.tmdb.org/t/p/w500/${movieResponse.poster_path}`,
            release_date: movieResponse.release_date,
            title: movieResponse.title,
            video: movieResponse.video,
            vote_count: movieResponse.vote_count
        }

    }

}