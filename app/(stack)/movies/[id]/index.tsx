import { View, Text, ScrollView, Pressable, FlatList, Image } from 'react-native';
import React from 'react'
import { router, useLocalSearchParams } from 'expo-router'
import { useMovie } from '@/hooks/useMovie'
import { Ionicons } from '@expo/vector-icons'
import DetailHeader from '@/components/detail/header'
import ActorsList from '@/components/detail/actors-list';
import { SafeAreaView } from 'react-native-safe-area-context';
import Recommendations from '@/components/detail/recommendations';
import Overview from '@/components/detail/overview';
const index = () => {
  const { id } = useLocalSearchParams()
  const { movie, isLoading, isFetching, actors, recommendations } = useMovie(+id)   


  if(isLoading || isFetching || !movie) {
    return (
      <View className='flex-1 bg-zinc-950'>
        <Text>Loading...</Text>
      </View>
    )
  } 

  return (
    <SafeAreaView >
      <ScrollView className='bg-zinc-950 pb-20 '>
        <DetailHeader title={movie?.title} duration={movie?.runtime} poster={movie.poster} back={movie.back} date={movie.release_date} />

        <Overview overview={movie.overview} website={movie.homepage} />
        <View className='mt-4'>
          <Text className='text-white font-bold px-6'>Elenco</Text>
          <ActorsList actors={actors ?? []} />
        </View>

        <Recommendations recommendations={recommendations ?? []} />
      </ScrollView>
    </SafeAreaView>

  )
}

export default index