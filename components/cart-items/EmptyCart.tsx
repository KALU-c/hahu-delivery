import { View, Text, Image } from 'react-native'
import images from '@/constants/images'

const EmptyCart = () => {
  return (
    <View className='h-full justify-center'>
      <Image
        source={images.emptyCart}
        className='w-full mt-16'
        resizeMode='contain'
      />
      <Text className='font-SenSemibold text-[30px] text-gray-200 text-center -mt-20'>Cart is Empty</Text>
    </View>
  )
}
export default EmptyCart