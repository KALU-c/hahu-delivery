import { View, Text, Image, Pressable, StatusBar, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import icons from '@/constants/icons'
import { useEffect, useState } from 'react'
import CustomInput from '@/components/CustomInput'
import CustomButton from '@/components/CustomButton'
import { useCartContext } from '@/context/CartContext'
import EachCart, { cartList } from '@/components/cart-items/EachCart'


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
        <View className='bg-primary'>
          <View className='h-[73vh] pt-3 pb-1 px-4'>
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
          <View className='h-[23vh] bg-primary rounded-t-3xl px-6 pt-6 border-gray-100 border-[1px]'>
            {/* <View className='flex-row justify-between items-center'>
              <Text className='text-[20px] font-SenRegular text-gray-100 tracking-tighter'>DELIVERY ADDRESS</Text>
              <Pressable onPress={() => setEdit(!edit)}>
                <Text className={`text-[20px] font-SenRegular text-secondary tracking-tighter underline`}>{edit ? "CONFIRM" : "EDIT"}</Text>
              </Pressable>
            </View> */}
            {/* <CustomInput
              value={address}
              handleTextChange={text => setAddress(text)}
              editable={edit}
              otherStyle='mb-6'
            /> */}
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
        barStyle="dark-content"
      />
    </>
  )
}


export default Cart