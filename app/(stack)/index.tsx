import { View, Text } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const index = () => { 
  const safeArea = useSafeAreaInsets()
  return (
    <View className='mt-2' style={{paddingTop: safeArea.top}}>  
      <Text>index</Text>
    </View>
  )
}

export default index