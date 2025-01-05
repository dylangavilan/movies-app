import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { Movie } from '@/infraestructure/interfaces/movie.interface'
import MovieCard from './movie-card'

interface Props {
    movies: Movie[]
    title: string
}

const HorizontalMovies = ({ movies, title }: Props) => {
  return (
    <View className='mt-2' >
        <Text className='font-bold text-xl px-2'>
            {title}
        </Text>
        <FlatList 
            showsHorizontalScrollIndicator={false}
            horizontal
            data={movies}
            renderItem={({ item }) => (
                <MovieCard id={item.id} poster={item.poster} size='small' />
            )}
            style={{ display: 'flex', flexDirection: 'row',gap: 16, marginTop: 10 }}
        />
    </View>
  )
}

export default HorizontalMovies