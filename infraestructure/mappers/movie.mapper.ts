import { Actors, Movie, MovieDetail } from "../interfaces/movie.interface";
import { MovieResponse } from "../interfaces/movies.response";
import { MovieDetailResponse } from "../interfaces/detail.response";
import { ActorsResponse } from "../interfaces/cast.response";
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
            vote_count: movieResponse.vote_count
        }
    }
    static actorsMapper(actors: ActorsResponse): Actors[] {
        return actors.cast.map((actor: any) => {
            return {
                character: actor.character,
                name: actor.name,
                profile_path: actor.profile_path ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}` : ''
            }
        })
    }
    static mapDetailResponseToMovie(movieResponse: MovieDetailResponse, cast: Actors[]): MovieDetail {
        return {
            adult: movieResponse.adult,
            back: `https://image.tmdb.org/t/p/w500/${movieResponse.backdrop_path}`,
            id: movieResponse.id,
            popularity: movieResponse.popularity,
            poster: `https://image.tmdb.org/t/p/w500/${movieResponse.poster_path}`,
            release_date: movieResponse.release_date,
            title: movieResponse.title,
            vote_count: movieResponse.vote_count,
            genres: movieResponse.genres.map((genre) => genre.name),
            homepage: movieResponse.homepage,
            imdb_id: movieResponse.imdb_id,
            origin_country: movieResponse.origin_country,
            original_language: movieResponse.original_language,
            original_title: movieResponse.original_title,
            overview: movieResponse.overview,
            runtime: movieResponse.runtime,
            status: movieResponse.status,
            video: movieResponse.video,
            vote_average: movieResponse.vote_average,
            actors: cast
        }
    }
}