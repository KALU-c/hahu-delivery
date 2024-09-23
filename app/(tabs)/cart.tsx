import { View, Text, StatusBar, ScrollView, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomButton from '@/components/CustomButton'
import EachCart from '@/components/cart-items/EachCart'
import { useCartStore } from '@/context/useCartStore'
import EmptyCart from '@/components/cart-items/EmptyCart'


const Cart = () => {
  const { cartItem, removeFromCart, totalPrice, addToCart, decreaseItemQuantity } = useCartStore();

  return (
    <>
      <SafeAreaView>
        <View className='bg-primary'>
          <ScrollView className={`${cartItem.length === 0 ? "h-full" : "h-[83vh]"} pt-3 pb-1 px-4`} showsVerticalScrollIndicator={false}>
            {
              cartItem.length !== 0 ? (
                <View className='flex-row justify-between px-1 mb-4'>
                  <Text className='font-SenMedium text-[20px] text-gray-200'>Cart Items: <Text className='text-dark font-SenSemibold'>{cartItem.length}</Text></Text>
                </View>
              ) : (
                <EmptyCart />
              )
            }
            <View className='mb-6'>
              {
                cartItem.map(item => (
                  <EachCart
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    price={item.price}
                    count={item.quantity}
                    handleIncrease={() => addToCart(item)}
                    handleDecrease={() => decreaseItemQuantity(item.id)}
                    handleRemove={() => removeFromCart(item.id)}
                  />
                ))
              }
            </View>
          </ScrollView>
          {
            cartItem.length !== 0 && (
              <View className='h-[10vh] bg-gray-50 rounded-t-xl px-4 border-gray-100 border-[1px] flex-row justify-between items-center'>
                <View className='flex-row gap-1 items-center'>
                  <Text className='text-[18px] font-SenRegular text-gray-100'>TOTAL: </Text>
                  <Text className='text-[25px] font-SenMedium mr-2'>${totalPrice.toFixed(2)}</Text>
                </View>
                <CustomButton
                  title='PLACE ORDER'
                  otherStyle='h-[50px] w-[55%]'
                  textStyle='text-[16px]'
                />
              </View>
            )
          }
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