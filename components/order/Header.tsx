import { View, Text, Image, Pressable } from 'react-native'
import icons from '@/constants/icons'

const Header = () => {
  return (
    <View className='flex-row justify-between items-center'>
      <View className='flex-row gap-3 items-center'>
        <Pressable className='p-3 bg-gray-50 400 rounded-full'>
          <Image
            source={icons.back}
            className='w-5 h-5'
            resizeMode='contain'
          />
        </Pressable>
        <Text className='text-[22px] font-SenRegular tracking-tighter'>My Orders</Text>
      </View>
      <Pressable className='p-2 bg-gray-50 rounded-full'>
        <Image
          source={icons.more}
          className='w-7 h-7 rotate-90'
          resizeMode='contain'
        />
      </Pressable>
    </View>
  )
}
export default Header