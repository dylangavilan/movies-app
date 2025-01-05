import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import Tabs from '@/components/tabs'

const StackLayout = () => {
  return (
    <>
     <Stack screenOptions={{ headerShown: false }}/>
    </>
  )
}

export default StackLayout