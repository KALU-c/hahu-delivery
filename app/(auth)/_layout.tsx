import { View, Text, StatusBar } from 'react-native'
import { Stack } from 'expo-router';

const AuthLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen name='sign-in' options={{ headerShown: false }} />
        <Stack.Screen name='sign-up' options={{ headerShown: false }} />
      </Stack>
      <StatusBar backgroundColor="#fff" barStyle='dark-content' />
    </>
  )
}

export default AuthLayout