import { View, Text, Pressable, ActivityIndicator } from 'react-native'

type CustomButtonProps = {
  title: string;
  handlePress?: () => void;
  isSubmitting?: boolean;
  otherStyle?: string;
  textStyle?: string;
}

const CustomButton = ({ title, otherStyle, handlePress, isSubmitting, textStyle }: CustomButtonProps) => {
  return (
    <Pressable
      className={`${isSubmitting ? "bg-secondary/50" : "bg-secondary"} h-[55px] rounded-md items-center justify-center ${otherStyle}`}
      onPress={handlePress}
      disabled={isSubmitting}
    >
      {isSubmitting ? (
        <View className='flex-row gap-2 items-center'>
          <ActivityIndicator size={27} color="#fff" />
          <Text className={`text-primary font-SenSemibold text-[20px] ${textStyle}`}>{title}</Text>
        </View>
      ) : (
        <Text className={`text-primary font-SenSemibold text-[20px] ${textStyle}`}>{title}</Text>
      )}

    </Pressable>
  )
}

export default CustomButton