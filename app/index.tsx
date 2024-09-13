import { Link } from 'expo-router'
import { View, Text } from 'react-native'

const index = () => {
  return (
    <View>
      <Text>index</Text>
      <Link href="/home">Go to Home</Link>
    </View>
  )
}

export default index