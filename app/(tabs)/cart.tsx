import { View, Text, StatusBar, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useEffect } from 'react'
import CustomButton from '@/components/CustomButton'
import { useCartContext } from '@/context/CartContext'
import EachCart, { cartList } from '@/components/cart-items/EachCart'


const Cart = () => {
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
          <ScrollView className='h-[83vh] pt-3 pb-1 px-4' showsVerticalScrollIndicator={false}>
            <View className='flex-row justify-between px-1 mb-4'>
              <Text className='font-SenMedium text-[20px] text-gray-200'>Cart Items: <Text className='text-dark font-SenSemibold'>5</Text></Text>
            </View>
            <View className='mb-6'>
              {
                cartList.map(item => (
                  <EachCart
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    price={item.price}
                    size={item.size}
                    count={item.count}
                  />
                ))
              }
            </View>
          </ScrollView>
          <View className='h-[10vh] bg-gray-50 rounded-t-xl px-4 border-gray-100 border-[1px] flex-row justify-between items-center'>
            <View className='flex-row gap-1 items-center'>
              <Text className='text-[18px] font-SenRegular text-gray-100'>TOTAL: </Text>
              <Text className='text-[25px] font-SenMedium'>${totalPrice}</Text>
            </View>
            <CustomButton
              title='PLACE ORDER'
              otherStyle='h-[50px] w-[65%]'
              textStyle='text-[16px]'
            />
          </View>
        </View>
      </SafeAreaView>
      <StatusBar
        backgroundColor="#fff"
        barStyle="dark-content"
      />
    </>
  )
}


export default Cart