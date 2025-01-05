import { View, Text } from 'react-native'
import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { moviesService } from '@/services/movies'

export const useMovie = (id: number) => {
    const { isLoading, data: movie, isFetching } = useQuery({ 
        queryKey: ['movie', id], 
        queryFn: () => moviesService.getMovieByID(id),
        staleTime: 1000 * 60 * 60 * 24
    })

    return { movie, isLoading, isFetching }
}

