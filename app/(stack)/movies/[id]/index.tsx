import { View, Text, ScrollView, Image, useWindowDimensions, Pressable,  } from 'react-native'
import React, { useEffect } from 'react'
import { router, useLocalSearchParams } from 'expo-router'
import { moviesService } from '@/services/movies'
import { useMovie } from '@/hooks/useMovie'
import { Ionicons } from '@expo/vector-icons'

const index = () => {
  const { id } = useLocalSearchParams()
  const { movie, isLoading, isFetching } = useMovie(+id)   
//   console.log(movie)
  const { height } = useWindowDimensions()

  if(isLoading || isFetching) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    )
  } 
  console.log(id)
  return (
    <ScrollView className='bg-zinc-950 '>
      <View className='absolute top-4 left-4 z-50'>
        <Ionicons name='arrow-back' size={24} color='white' onPress={router.back}/>
      </View>
      <View className="relative">
        <Image
          source={{
            uri: movie?.back,
          }}
          className="w-full h-64 object-cover rounded-b-[24px]"
        />
      </View>
      <View className="-mt-28 gap-4 flex flex-row items-end px-6">
            <View className='rounded-2xl'>
                <Image source={{uri: movie?.poster}} className='h-48 w-32  rounded-2xl' resizeMode='contain'/>
            </View>
            <View>
                <Text className="text-white text-2xl font-bold">
                    {movie?.title}
                </Text>
                <Text className="text-gray-400 text-lg">{movie?.release_date} {movie?.runtime}</Text>
            </View>
      </View>
      <View className='px-6 flex flex-col gap-4'>
        <Text className='mt-4 text-[#CCCCCC]'>
            {movie?.overview}
        </Text>
        <Pressable className='bg-white text-black p-3 rounded-2xl  ' onPress={() => {}}>
            <Text className='text-center text-xl'>Ver mas</Text>
        </Pressable>
      </View>
    </ScrollView>
  )
}

export default index