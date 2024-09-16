import { View, Text, Image } from 'react-native'
import icons from '@/constants/icons'

const Header = () => {
  return (
    <View>
      <View>
        <View className='p-2 bg-gray-50'>
          <Image
            source={icons.back}
            className='w-6 h-6'
            resizeMode='contain'
          // tintColor=""
          />
        </View>
      </View>
    </View>
  )
}
export default Header