
import { View, Text } from 'react-native'
import React from 'react'
import TabButton from './ui/tab-button'

const Tabs = () => {
  return (
    <View className='flex flex-row gap-2 mt-2'>
      <TabButton title="Movies" isActive />
      <TabButton title="Series" />

    </View>
  )
}

export default Tabs