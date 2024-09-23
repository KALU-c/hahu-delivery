import { View, Text, Image } from 'react-native'
import images from '@/constants/images'

const EmptyCart = () => {
  return (
    <View className='h-full justify-center'>
      <Image
        source={images.emptyCart}
        className='w-[250px] mt-20 self-center'
        resizeMode='contain'
      />
      <Text className='font-SenSemibold text-[25px] text-gray-200 text-center -mt-32'>Cart is Empty</Text>
    </View>
  )
}
export default EmptyCart