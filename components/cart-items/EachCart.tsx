import { View, Text, Image, Pressable } from 'react-native';
import images from '@/constants/images'
import icons from '@/constants/icons';



type EachCartProps = {
  id: number;
  name: string;
  price: number;
  size?: string;
  count: number;
  handleIncrease?: () => void,
  handleDecrease?: () => void,
  handleRemove?: () => void,
}

export const cartList = [
  { id: 1, name: "Pizza Calzone", price: 64, size: "14", count: 0 },
  { id: 2, name: "Burger", price: 41, size: "14", count: 0 },
  { id: 3, name: "Chicken", price: 15, size: "14", count: 0 },
  { id: 4, name: "Pizza", price: 82, size: "14", count: 0 },
  { id: 5, name: "Juice", price: 60, size: "14", count: 0 },
];

const EachCart = ({ id, name, price, handleIncrease, handleDecrease, handleRemove, count }: EachCartProps) => {

  return (
    <View className='w-full bg-gray-50 h-[140px] flex-row py-4 px-2 mb-3 rounded-xl'>
      <Image
        source={images.burger}
        className='h-[90px] w-[35%] self-center'
        resizeMode='contain'
      />
      <View className='px-3 justify-between'>
        <View className='flex-row justify-between w-[80%]'>
          <Text className='text-dark text-[21px] w-[80%] font-SenMedium'>{name}</Text>
          <Pressable className='h-6 p-[2px] bg-secondary items-center justify-center rounded-full'
            onPress={handleRemove}
          >
            <Image
              source={icons.close}
              className='w-5 h-6'
              resizeMode='contain'
              tintColor="white"
            />
          </Pressable>
        </View>
        <Text className='text-dark text-[20px] font-SenRegular'>
          price: <Text className='text-dark font-SenSemibold text-[20px]'>${price}</Text>
        </Text>
        <View className='flex-row justify-between w-[80%]'>
          <View className='flex-row justify-between w-[40%] items-center'>
            <Pressable className='p-[2px] bg-gray-200 rounded-full h-6 w-6 items-center justify-center'
              onPress={handleDecrease}
            >
              <Image
                source={icons.minus}
                className='w-4 h-4'
                resizeMode='contain'
                tintColor="white"
              />

            </Pressable>

            <Text className='text-[20px] font-SenSemibold text-dark'>{count}</Text>
            <Pressable className='p-[2px] h-6 w-6 bg-gray-200 rounded-full items-center justify-center' onPress={handleIncrease}>
              <Image
                source={icons.plus}
                className='w-4 h-4'
                resizeMode='contain'
                tintColor="white"
              />
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  )
}

export default EachCart;