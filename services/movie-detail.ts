import { api } from "./api"

const getActors = async (movieId: string) => {
    const {data} = await api.get(`${movieId}/credits`)
    return data
}