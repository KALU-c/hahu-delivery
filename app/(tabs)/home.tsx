import CustomHeader from '@/components/CustomHeader'
import CustomInput from '@/components/CustomInput'
import { View, Text, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
const Home = () => {
  return (
    <SafeAreaView className='bg-white h-full'>
      <ScrollView className='px-3'>
        <CustomHeader />
        <View className='px-2'>
          <Text className='font-SenRegular text-[18px]'>Hey Halal, <Text className='font-SenBold text-[18px]'>Good Afternoon!</Text></Text>

          <CustomInput
            placeholder='Search dishes, restaurants'
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
export default Home