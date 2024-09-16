import Header from '@/components/order/Header'
import { View, Text, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
const Order = () => {
  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView>
        <View className='px-4 pt-2'>
          <Header />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
export default Order