import { View, Text, Pressable } from 'react-native'
import React from 'react'

interface Props {
    overview: string;
    website: string;
}

const Overview = ({ overview, website }: Props) => {
  return (
    <View className='px-6 flex flex-col gap-4'>
        <Text className='mt-4 text-[#CCCCCC]'>
            {overview}
        </Text>
        <Pressable className='bg-white text-black p-3 rounded-2xl  ' onPress={() => {}}>
            <Text className='text-center text-xl'>Ver mas</Text>
        </Pressable>
    </View>
  )
}

export default Overview