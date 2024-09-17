import { useCartContext } from '@/context/CartContext';
import { View, Text, Image, Pressable } from 'react-native';
import images from '@/constants/images'
import icons from '@/constants/icons';



type EachCartProps = {
  id: number;
  name: string;
  price: number;
  size: string;
  count: number;
}

export const cartList = [
  { id: 1, name: "Pizza Calzone", price: 64, size: "14", count: 0 },
  { id: 2, name: "Burger", price: 41, size: "14", count: 0 },
  { id: 3, name: "Chicken", price: 15, size: "14", count: 0 },
  { id: 4, name: "Pizza", price: 82, size: "14", count: 0 },
  { id: 5, name: "Juice", price: 60, size: "14", count: 0 },
];

const EachCart = ({ id, name, price, size }: EachCartProps) => {
  const { cartItems, setCartItems } = useCartContext();

  const handleIncrease = () => {
    const currentFoodItem = cartItems.find(item => item.id == id);
    if (!currentFoodItem) {
      setCartItems(cartList);
    }
    setCartItems(prevItems => (
      prevItems.map(item => (
        item.id == id ? { ...item, count: item.count + 1 } : item
      ))
    ))
  };

  const handleDecrease = () => {
    setCartItems(prevItems => (
      prevItems.map(item => (
        item.id == id ? { ...item, count: Math.max(0, item.count - 1) } : item
      ))
    ))
  };

  const currentItem = cartItems.find(item => item.id === id);

  return (
    <View className='w-full bg-gray-50 h-[140px] flex-row py-4 px-2 mb-3 border-[1px] border-gray-100 rounded-xl'>
      <Image
        source={images.burger}
        className='h-[90px] w-[35%] self-center'
        resizeMode='contain'
      />
      <View className='px-3 justify-between'>
        <View className='flex-row justify-between w-[80%] py-2'>
          <Text className='text-dark text-[21px] w-[80%] font-SenMedium'>{name}</Text>
          <View className='h-6 p-[2px] bg-secondary items-center justify-center rounded-full'>
            <Image
              source={icons.close}
              className='w-5 h-6'
              resizeMode='contain'
              tintColor="white"
            />
          </View>
        </View>
        <Text className='text-dark text-[20px] font-SenRegular'>
          price: <Text className='text-dark font-SenSemibold text-[20px]'>${price}</Text>
        </Text>
        <View className='flex-row justify-between w-[80%]'>
          <Text className='text-[18px] text-gray-200 font-SenRegular'>{size}"</Text>
          <View className='flex-row justify-between w-[40%] items-center '>
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

            <Text className='text-[20px] font-SenSemibold text-dark'>{currentItem?.count || 0}</Text>
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