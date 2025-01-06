import { View, Text, Image } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'

interface Props {
  poster: string
  back: string
  title: string
  date: string
  duration: string
}

const DetailHeader = ({ poster, back, date, duration, title }: Props) => {
  return (
    <>
      <View className='absolute top-4 left-4 z-50'>
        <Ionicons name='arrow-back' size={24} color='white' onPress={router.back}/>
      </View>
      <View className="relative">
        <Image
          source={{
            uri: back,
          }}
          className="w-full h-64 object-cover rounded-b-[24px]"
        />
      </View>
      <View className="-mt-28 gap-4 flex flex-row items-end px-6">
            <View className='rounded-2xl'>
                <Image source={{uri: poster}} className='h-48 w-32  rounded-2xl' resizeMode='contain'/>
            </View>
            <View>
                <Text className="text-white text-2xl font-bold">
                    {title}
                </Text>
                <Text className="text-gray-400 text-lg">{date} {duration}</Text>
            </View>
      </View>    
    </>
  )
}

export default DetailHeader