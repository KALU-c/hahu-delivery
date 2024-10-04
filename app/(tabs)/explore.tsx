import { View, Text, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Explore = () => {
  return (
    <SafeAreaView className='bg-white h-full'>
      <ScrollView>
        <Text>Cafe</Text>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Explore