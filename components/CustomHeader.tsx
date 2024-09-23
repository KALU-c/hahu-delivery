import { View, Text, Image, Pressable } from 'react-native'
import icons from '@/constants/icons'
import { router } from 'expo-router'
import { useCartStore } from '@/context/useCartStore'

const CustomHeader = () => {
  const { cartItem } = useCartStore();


  return (
    <View className='flex-row justify-between pt-4'>
      <View className='flex-row gap-3 items-center'>
        {/* Menu sidebar trigger */}
        <View className='bg-gray-50 p-4 rounded-full'>
          <Image
            source={icons.menu}
            className='w-6 h-6'
            resizeMode='contain'
          />
        </View>
        {/* Customer name */}
        <View>
          <Text className='font-SenBold text-secondary text-[15px]'>GOOD AFTERNOON</Text>
          <Text className='font-SenRegular text-gray-200 text-[16px]'>Endekalu Zemenu</Text>
        </View>
      </View>
      {/* cart */}
      <Pressable className='relative bg-black-200 p-4 rounded-full' onPress={() => router.push("/cart")}>
        <Image
          source={icons.bag}
          className='w-6 h-6'
          resizeMode='contain'
        />
        {
          cartItem.length !== 0 && (
            <View className='absolute bg-secondary w-7 h-7 rounded-full items-center justify-center right-1 -top-1'>
              <Text className='text-white font-SenBold text-[15px]'>{cartItem.length}</Text>
            </View>
          )
        }
      </Pressable>
    </View>
  )
}

export default CustomHeader