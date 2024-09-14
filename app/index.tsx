import { View, Text, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import PagerView from 'react-native-pager-view';

const index = () => {
  return (
    <SafeAreaView className='flex-1'>
      {/* <View>
        <Text>Hello</Text> */}
      <PagerView className='flex-1' initialPage={0}>
        <View key="1" className='items-center justify-center'>
          <Text>First page</Text>
          <Text>Swipe ➡️</Text>
        </View>
        <View className='items-center justify-center' key="2">
          <Text>Second page</Text>
        </View>
        <View className='items-center justify-center' key="3">
          <Text>Third page</Text>
        </View>
      </PagerView>
      {/* </View> */}
    </SafeAreaView>
  )
}

export default index