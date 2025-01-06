import { MovieResponse } from "@/infraestructure/interfaces/movies.response"
import { api } from "./api"
import { MovieMapper } from "@/infraestructure/mappers/movie.mapper"
import { Actors, Movie, MovieDetail } from "@/infraestructure/interfaces/movie.interface"
import { ActorsResponse } from "@/infraestructure/interfaces/cast.response"
import { MovieDetailResponse } from "@/infraestructure/interfaces/detail.response"

const getMoviesRecommendations = async (id: number | string) => {
    const { data } = await api.get<MovieResponse>(`${id}/recommendations`)
    const movies: Movie[] = data.results.map(MovieMapper.mapMovieResponseToMovie);
    return movies.length > 6 ? movies.slice(0, 6) : movies;
}

const getMovieByID = async (id: number): Promise<MovieDetail> => {
    try {
        const { data } = await api.get<MovieDetailResponse>(`${id}`);
        const movie: MovieDetail = MovieMapper.mapDetailResponseToMovie(data);
        return movie;
    } catch (error) {
        console.error(error);
        throw new Error('Movie not found');
    }   
}

const getActors = async (movieId: number): Promise<Actors[]> => {
    const { data } = await api.get<ActorsResponse>(`${movieId}/credits`)
    return MovieMapper.actorsMapper(data)
}


export const moviesDetailService = {
    getMoviesRecommendations,
    getMovieByID,
    getActors
}