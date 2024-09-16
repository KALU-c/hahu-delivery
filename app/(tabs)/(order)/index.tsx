import Header from '@/components/order/Header'
import { View, Text, ScrollView, StatusBar } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
const Order = () => {
  return (
    <>
      {/* <SafeAreaView className='bg-primary h-full'> */}
      <View>
        <View className='px-4 pt-5'>
          {/* <Header /> */}
        </View>
      </View>
      {/* </SafeAreaView> */}
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
    </>
  )
}
export default Order