import { Genre } from './detail.response';
export interface Movie {
    adult: boolean;
    back: string;
    id: number;
    popularity: number;
    poster: string;
    release_date: string;
    title: string;
    vote_count: number;
}

export interface Actors {
    character: string,
    name: string,
    profile_path: string
}

export interface MovieDetail extends Movie {
    genres: string[];
    homepage: string;
    imdb_id: string;
    origin_country: string[];
    original_language: string;
    original_title: string;
    overview: string;
    runtime: string;
    status: string;
    video: boolean;
    vote_average: number;
}