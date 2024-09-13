import { Link } from 'expo-router'
import { View, Text, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const index = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Landing Page</Text>
        <Link href="/sign-in">Go to sign in</Link>
      </View>
    </SafeAreaView>
  )
}

export default index