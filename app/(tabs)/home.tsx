import CustomHeader from '@/components/CustomHeader'
import { View, Text, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
const Home = () => {
  return (
    <SafeAreaView className='bg-white h-full'>
      <ScrollView className='px-3'>
        <CustomHeader />
      </ScrollView>
    </SafeAreaView>
  )
}
export default Home