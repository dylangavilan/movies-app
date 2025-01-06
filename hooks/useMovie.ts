import { useQuery } from '@tanstack/react-query'
import { moviesDetailService as service} from '@/services/movie-detail'


export const useMovie = (id: number) => {
    const { isLoading, data: movie, isFetching } = useQuery({ 
        queryKey: ['movie', id], 
        queryFn: () => service.getMovieByID(id),
        staleTime: 1000 * 60 * 60 * 24
    })
    const { data: actors } = useQuery({
        queryKey: ['actors', id],
        queryFn: () => service.getActors(id),
        staleTime: 1000 * 60 * 60 * 24
    })

    const { data: recommendations } = useQuery({
        queryKey: (['recommendations', id]),
        queryFn: () => service.getMoviesRecommendations(id),
        staleTime: 1000 * 60 * 60 * 24  
    })

    
    return { movie, isLoading, isFetching, actors, recommendations }
}

