import { View, Text, Image } from 'react-native'
import images from '@/constants/images'

const ProfileInfoWrapper = () => {
  return (
    <View className='flex-row gap-8 items-center px-2 mb-6'>
      <View className='border-[1px] border-secondary rounded-full'>
        <Image
          source={images.profile2}
          className='w-[100px] h-[100px] rounded-full'
        />
      </View>
      <View>
        <Text className='text-[22px] font-SenSemibold'>Endekalu Zemenu</Text>
        <Text className='text-[19px] font-SenRegular text-gray-200 tracking-tighter mt-1'>I love fast food</Text>
        <Text className='text-[14px] font-SenMedium text-gray-100 mt-3'>ID: #18725</Text>
      </View>
    </View>
  )
}

export default ProfileInfoWrapper