import { View, Text, Pressable, PressableProps } from 'react-native'
import React from 'react'

interface Props extends PressableProps{
    title: string
    isActive?: boolean
}
const TabButton = ({ isActive = false, title, ...props }: Props) => {
  return (
    <Pressable
        className={`px-2 py-1 ${isActive ? 'bg-red-500' : 'bg-transparent'} rounded-full w-20 text-center`}>
        <Text className={`text-center ${isActive ? 'text-white' : 'text-gray-500'}`}>
            {title}
        </Text>
    </Pressable>
  )
}

export default TabButton