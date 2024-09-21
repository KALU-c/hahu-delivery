import { Stack } from 'expo-router'
import { View, Text } from 'react-native'

const DetailsLayout = () => {
  return (
    <Stack>
      <Stack.Screen name='food' options={{ headerShown: false }} />
      <Stack.Screen name='restaurant' options={{ headerShown: false }} />
    </Stack>
  )
}

export default DetailsLayout