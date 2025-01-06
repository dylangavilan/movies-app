import { View, Text, ScrollView, Pressable, FlatList, Image } from 'react-native';
import React from 'react'
import { router, useLocalSearchParams } from 'expo-router'
import { useMovie } from '@/hooks/useMovie'
import { Ionicons } from '@expo/vector-icons'
import DetailHeader from '@/components/detail/header'

const index = () => {
  const { id } = useLocalSearchParams()
  const { movie, isLoading, isFetching } = useMovie(+id)   

  if(isLoading || isFetching || !movie) {
    return (
      <View className='flex-1 bg-zinc-950'>
        <Text>Loading...</Text>
      </View>
    )
  } 
  return (
    <ScrollView className='bg-zinc-950 '>
      <View className='absolute top-4 left-4 z-50'>
        <Ionicons name='arrow-back' size={24} color='white' onPress={router.back}/>
      </View>
      <DetailHeader title={movie?.title} duration={movie?.runtime} poster={movie.poster} back={movie.back} date={movie.release_date} />
      <View className='px-6 flex flex-col gap-4'>
        <Text className='mt-4 text-[#CCCCCC]'>
            {movie?.overview}
        </Text>
        <Pressable className='bg-white text-black p-3 rounded-2xl  ' onPress={() => {}}>
            <Text className='text-center text-xl'>Ver mas</Text>
        </Pressable>
      </View>
      <View className='mt-4'>
        <Text className='text-white font-bold'>Elenco</Text>
        <FlatList horizontal data={movie.actors} className='gap-2' renderItem={({ item })  => (
          <Pressable className={`active:opacity-90 px-2`} >
            <Image source={{uri: item.profile_path}} className='h-36 w-32 p-4 rounded-md-xl'/>
            <Text className='text-white  text-center'>{item.name}</Text>  
            <Text className='text-gray-400  text-center'>{item.character}</Text>        
          </Pressable>
        )}/>
      </View>
    </ScrollView>
  )
}

export default index