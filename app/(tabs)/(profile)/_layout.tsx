import { Stack } from 'expo-router'

const ProfileLayout = () => {
  return (
    <Stack>
      <Stack.Screen name='index' options={{ headerShown: false }} />
      <Stack.Screen name='personalInfo' options={{ headerShown: true }} />
      <Stack.Screen name='address' options={{ headerShown: true }} />
      <Stack.Screen name='faq' options={{ headerShown: true }} />
      <Stack.Screen name='favorite' options={{ headerShown: true }} />
      <Stack.Screen name='notifications' options={{ headerShown: true }} />
      <Stack.Screen name='paymentMethod' options={{ headerShown: true }} />
      <Stack.Screen name='settings' options={{ headerShown: true }} />
      <Stack.Screen name='userReviews' options={{ headerShown: true }} />
    </Stack>
  )
}

export default ProfileLayout