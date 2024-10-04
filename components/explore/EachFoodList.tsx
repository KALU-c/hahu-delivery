import { View, Text, Image } from "react-native"
import images from "@/constants/images"
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

type Props = {
  name: string;
  restaurant: string;
  price: number
}

const EachFoodItem = ({ name, restaurant, price }: Props) => {
  return (
    <View className='px-2 bg-primary my-2 py-2 border-2 border-gray-50 rounded-lg'>
      <View>
        <View className='flex-row justify-between items-center w-full pr-4'>
          <View className='flex-row gap-4 items-center'>
            <Image
              source={images.burger}
              className='w-[90px] h-[90px]'
              resizeMode='contain'
            />
            <View className='gap-1'>
              <View className='flex-row justify-between items-center  w-[77%]'>
                <Text className='font-SenSemibold text-[20px]'>{name}</Text>
              </View>
              <View className='flex-row items-center py-2'>
                <Text className='font-SenSemibold text-[18px] border-r-[1px] border-r-gray-100 pr-4'>${price}</Text>
                <Text className='font-SenRegular text-[15px] text-gray-100 pl-2'>{restaurant}</Text>
              </View>
            </View>
          </View>
          <FontAwesome6 name="angle-right" size={24} color="gray" />
        </View>
      </View>
    </View>
  )
};

export default EachFoodItem;