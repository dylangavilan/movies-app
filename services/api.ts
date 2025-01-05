import axios from "axios";


export const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie/',
    headers: {
        'Authorization': `Bearer ${process.env.EXPO_PUBLIC_API_KEY}`
    }
})


