import { MovieResponse } from "@/infraestructure/interfaces/movies.response";
import { api } from "./api"
import { MovieMapper } from "@/infraestructure/mappers/movie.mapper";
import { Movie } from "@/infraestructure/interfaces/movie.interface";


type movieList = 'now_playing' | 'popular' | 'top_rated' | 'upcoming';

export const getMoviesList = async (list: movieList):Promise<Movie[]> => {
    const { data } = await api.get<MovieResponse>(`${list}?language=es-AR`);
    console.log(JSON.stringify(data, null, 2))

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

export const getMovieByID = async (id: number) => {
    try {
        const response = await api.get(`${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }   
}

export const moviesService = {
    nowPlaying: () => getMoviesList('now_playing'),
    populars: () => getMoviesList('popular'),
    topRated: () => getMoviesList('top_rated'),
    upcoming: () => getMoviesList('upcoming'),  
    genres : () => getGenres(),
    getMoviesByGenre: getMoviesByGenre,
}