import { useQuery } from '@tanstack/react-query';
import { moviesService } from '@/services/movies';

export const useSeries = () => {
  const { data: nowPlaying = [], isFetching, isLoading } = 
        useQuery({ queryKey: ['movies', 'now_playing'], queryFn: moviesService.nowPlaying });

  const { data: upcoming = [] } = 
        useQuery({ queryKey: ['movies', 'upcoming'], queryFn: moviesService.upcoming });

  const { data: populars = [] } = 
        useQuery({ queryKey: ['movies', 'populars'], queryFn: moviesService.populars });


  const { data: topRated = [] } = 
        useQuery({ queryKey: ['movies', 'topRated'], queryFn: moviesService.topRated });        

  return { nowPlaying, isFetching, isLoading, upcoming, populars, topRated }
}

