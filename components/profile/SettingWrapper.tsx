import { View, Text, Image, Pressable } from 'react-native'
import Feather from '@expo/vector-icons/Feather';
import icons from '@/constants/icons';

type SettingWrapperProps = {
  icon: any;
  title: string;
  handlePress?: () => void;
}

const SettingWrapper = ({ icon, title, handlePress }: SettingWrapperProps) => {
  return (
    <Pressable className='flex-row justify-between items-center py-2 mt-1 bg-gray-50 rounded-md px-2' onPress={handlePress}>
      <View className='flex-row items-center'>
        <View className='p-2 bg-primary rounded-full'>
          {icon}
        </View>
        <Text className='font-SenRegular text-[20px] ml-3'>{title}</Text>
      </View>
      <Image
        source={icons.back}
        className='w-4 h-4 rotate-180'
        resizeMode='contain'
        tintColor="#A0A5BA"
      />
    </Pressable>
  )
}

export default SettingWrapper