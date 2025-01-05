import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { Movie } from '@/infraestructure/interfaces/movie.interface'
import MovieCard from './movie-card'
import { router } from 'expo-router'

interface Props {
    movies: Movie[]
    title: string
}

const HorizontalMovies = ({ movies, title }: Props) => {
  return (
    <View className='mt-2'>
        <Text className='font-bold text-xl px-2 text-white'>
            {title}
        </Text>
        <FlatList 
            decelerationRate={0.5}
            showsHorizontalScrollIndicator={false}
            horizontal
            data={movies}
            renderItem={({ item }) => (
                <MovieCard id={item.id} poster={item.poster} size='small'/>
            )}
        />
    </View>
  )
}

export default HorizontalMovies