import { View, Text, Image, Pressable } from 'react-native'
import icons from '@/constants/icons'

type ProfileHeaderProps = {
  title: string;
  handleBackButton?: () => void;
  handleMoreButton?: () => void;
}

const ProfileHeader = ({ handleBackButton, handleMoreButton, title }: ProfileHeaderProps) => {
  return (
    <View className='flex-row justify-between items-center'>
      <View className='flex-row gap-3 items-center'>
        <Pressable className='p-3 bg-gray-50 400 rounded-full' onPress={handleBackButton}>
          <Image
            source={icons.back}
            className='w-5 h-5'
            resizeMode='contain'
          />
        </Pressable>
        <Text className='text-[22px] font-SenRegular tracking-tighter'>{title}</Text>
      </View>
      <Pressable className='p-2 bg-gray-50 rounded-full' onPress={handleMoreButton}>
        <Image
          source={icons.more}
          className='w-7 h-7 rotate-90'
          resizeMode='contain'
        />
      </Pressable>
    </View>
  )
}
export default ProfileHeader