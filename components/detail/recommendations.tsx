import React from 'react'
import { View, Text, Pressable, Image } from 'react-native'
import { Movie } from '@/infraestructure/interfaces/movie.interface'
import { router } from 'expo-router'

interface Props {
    recommendations: Movie[]
}

const Recommendations = ({ recommendations }: Props) => {
  return (
  <View className='px-6'>
    <Text className='text-white font-bold'>Similares</Text>
    <View className="flex-row flex-wrap justify-between gap-x-2">
        {recommendations?.map((recommendation) => (
          <Pressable key={recommendation.id} className='h-52 w-[32%] rounded-xl' onPress={() => router.replace(`/movies/${recommendation.id}`)}>
            <Image 
              source={{uri: recommendation.poster}} 
              className='h-full w-full rounded-2xl'
              resizeMode='center' />
          </Pressable>
        ))}
    </View>
  </View>
  )
}

export default Recommendations