import { useState } from 'react';
import { View, Text, TextInput, Image, Pressable } from 'react-native'
import icons from '@/constants/icons';

type CustomInputProps = {
  title?: string;
  value?: string;
  handleTextChange?: (text: string) => void;
  otherStyle?: string;
  keyboardType?: string;
  placeholder?: string;
}

const CustomInput = ({ title, value, handleTextChange, otherStyle, keyboardType, placeholder }: CustomInputProps) => {

  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className={`relative gap-2 mb-8 ${otherStyle}`}>
      <Text className='font-SenMedium text-[16px]'>{title}</Text>
      <View className='relative border-2 border-black-100/10 focus:border-secondary rounded-md justify-center'>
        <TextInput
          className={`bg-gray-50 h-[55px] px-4 text-[18px] font-SenRegular rounded-md pr-11 ${placeholder?.includes("Search") && "pl-11"}`}
          value={value}
          onChangeText={handleTextChange}
          placeholder={placeholder}
          secureTextEntry={title?.toLowerCase() === "password" && !showPassword}
          autoCorrect={false}
        />
        {
          title?.toLowerCase() === "password" && (
            <Pressable
              onPress={() => setShowPassword(!showPassword)}
              className='absolute right-2'
            >
              <Image
                source={showPassword ? icons.eyeHide : icons.eye}
                className='w-7 h-7 bg-gray-50'
              />
            </Pressable>
          )
        }
        {
          placeholder?.includes("Search") && (
            <Pressable className='absolute left-2'>
              <Image
                source={icons.search}
                className='w-6 h-6'
                tintColor="#7E8A97"
              />
            </Pressable>
          )
        }
      </View>
    </View>
  )
}

export default CustomInput