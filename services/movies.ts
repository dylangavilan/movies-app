import { MovieResponse } from "@/infraestructure/interfaces/movies.response";
import { api } from "./api"
import { MovieMapper } from "@/infraestructure/mappers/movie.mapper";
import { Actors, Movie, MovieDetail } from "@/infraestructure/interfaces/movie.interface";
import { MovieDetailResponse } from "@/infraestructure/interfaces/detail.response";
import { ActorsResponse } from "@/infraestructure/interfaces/cast.response";


type movieList = 'now_playing' | 'popular' | 'top_rated' | 'upcoming';

export const getMoviesList = async (list: movieList):Promise<Movie[]> => {
    const { data } = await api.get<MovieResponse>(`${list}?language=es-AR`);
    const movies: Movie[] = data.results.map(MovieMapper.mapMovieResponseToMovie);
    return movies; 
}

export const getMoviesByGenre = async(genre_id: number): Promise<Movie[]> => {
    const response = await api.get<MovieResponse>(`discover/movie?with_genres=${genre_id}`);
    const movies: Movie[] = response.data.results.map(MovieMapper.mapMovieResponseToMovie);
    return movies;
}

export const getGenres = async () => { 
    try {
        const response = await api.get('genre/movie/list');
        return response.data.genres;
    } catch (error) {
        console.error(error);
    }
}

const getMovieByID = async (id: number | string): Promise<MovieDetail> => {
    try {
        const { data } = await api.get<MovieDetailResponse>(`${id}`);
        const actors = await getActors(id.toString());
        const movie: MovieDetail = MovieMapper.mapDetailResponseToMovie(data, actors);

        return movie;
    } catch (error) {
        console.error(error);
        throw new Error('Movie not found');
    }   
}

const getActors = async (movieId: string): Promise<Actors[]> => {
    const { data } = await api.get<ActorsResponse>(`${movieId}/credits`)
    console.log(JSON.stringify(data, null, 2))

    return MovieMapper.actorsMapper(data)
}

export const moviesService = {
    nowPlaying: () => getMoviesList('now_playing'),
    populars: () => getMoviesList('popular'),
    topRated: () => getMoviesList('top_rated'),
    upcoming: () => getMoviesList('upcoming'),  
    genres : () => getGenres(),
    getMoviesByGenre: getMoviesByGenre,
    getMovieByID: getMovieByID
}