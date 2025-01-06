import { View, Text, FlatList, Pressable, Image } from 'react-native'
import React from 'react'
import { Actors } from '@/infraestructure/interfaces/movie.interface'

interface Props {
    actors: Actors[]
}

const ActorsList = ({ actors }: Props) => {
  return (
    <FlatList horizontal data={actors} className='gap-2 ' renderItem={({ item })  => (
        <Pressable className={`active:opacity-90 px-2  max-w-36 items-center`} >
            <View className='h-44 w-32'>
                <Image source={item.profile_path ? {uri: item!.profile_path}: undefined} 
                    className='  w-full h-full rounded-xl'
                    resizeMode='cover'
                    />
            </View>
            <Text className='text-white  text-center'>{item.name}</Text>  
            <Text className='text-gray-400 text-center '>{item.character}</Text>        
        </Pressable>
    )}/>
  )
}

export default ActorsList