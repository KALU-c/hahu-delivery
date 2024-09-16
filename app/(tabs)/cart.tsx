import { View, Text, ScrollView, Image, Pressable, StatusBar, Alert, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import images from '@/constants/images'
import icons from '@/constants/icons'
import { useEffect, useState } from 'react'
import CustomInput from '@/components/CustomInput'
import CustomButton from '@/components/CustomButton'
import { useCartContext } from '@/context/CartContext'

type EachCartProps = {
  id: number;
  name: string;
  price: number;
  size: string;
  count: number;
}

const cartList = [
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
    <View className='w-full h-[140px] flex-row py-4 px-2 mb-3'>
      <Image
        source={images.burger}
        className='h-[90px] w-[35%] self-center'
        resizeMode='contain'
      />
      <View className='px-3 justify-between'>
        <View className='flex-row justify-between w-[80%] py-2'>
          <Text className='text-primary text-[21px] w-[80%] font-SenRegular'>{name}</Text>
          <View className='h-6 p-[2px] bg-red-500 items-center justify-center rounded-full'>
            <Image
              source={icons.close}
              className='w-5 h-6'
              resizeMode='contain'
              tintColor="white"
            />
          </View>
        </View>
        <Text className='text-primary text-[20px] font-SenMedium'>
          price: <Text className='text-primary font-SenSemibold text-[20px]'>${price}</Text>
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
            <Text className='text-[20px] font-SenSemibold text-primary'>{currentItem?.count || 0}</Text>
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

const Cart = () => {
  const [address, setAddress] = useState("");
  const [edit, setEdit] = useState(false);

  const { totalPrice, setTotalPrice, cartItems } = useCartContext();

  const calculateTotalPrice = () => {
    const total = cartItems.reduce((acc, item) => acc + item.price * item.count, 0);
    setTotalPrice(total);
  };

  useEffect(() => {
    calculateTotalPrice();
  }, [cartItems]);

  return (
    <>
      <SafeAreaView>
        <View className='bg-dark'>
          <View className='h-[55vh] py-3 px-4'>
            <FlatList
              data={cartList}
              keyExtractor={item => item.id.toString()}
              renderItem={({ item }) => (
                <EachCart
                  id={item.id}
                  name={item.name}
                  price={item.price}
                  size={item.size}
                  count={item.count}
                />
              )}
              showsVerticalScrollIndicator={false}
              className='flex-1'
            />
          </View>
          <View className='h-[40vh] bg-primary rounded-t-3xl px-6 pt-6'>
            <View className='flex-row justify-between items-center'>
              <Text className='text-[20px] font-SenRegular text-gray-100 tracking-tighter'>DELIVERY ADDRESS</Text>
              <Pressable onPress={() => setEdit(!edit)}>
                <Text className={`text-[20px] font-SenRegular text-secondary tracking-tighter underline`}>{edit ? "CONFIRM" : "EDIT"}</Text>
              </Pressable>
            </View>
            <CustomInput
              value={address}
              handleTextChange={text => setAddress(text)}
              editable={edit}
              otherStyle='mb-6'
            />
            <View className='flex-row justify-between items-center mb-8'>
              <View className='flex-row gap-1 items-center'>
                <Text className='text-[18px] font-SenRegular text-gray-100'>TOTAL: </Text>
                <Text className='text-[28px] font-SenMedium'>${totalPrice}</Text>
              </View>
              <View className='flex-row items-center gap-1'>
                <Text className='text-[19px] font-SenRegular text-secondary'>Breakdown</Text>
                <Image
                  source={icons.back}
                  className='w-4 h-4 rotate-180'
                  resizeMode='contain'
                  tintColor="#7E8A97"
                />
              </View>
            </View>
            <CustomButton
              title='PLACE ORDER'
              otherStyle='h-[60px]'
              textStyle='text-[16px]'
            />
          </View>
        </View>
      </SafeAreaView>
      <StatusBar
        backgroundColor="#121223"
        barStyle="light-content"
      />
    </>
  )
}

export default Cart