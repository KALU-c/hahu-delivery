import { View, StatusBar, FlatList } from 'react-native'
import { EachOrderType } from '@/types/order'
import EachOrder from '@/components/order/EachOrder'

const EachOrderList: EachOrderType[] = [
  { id: 1, restaurant: "Pizza Hut", totalPrice: 35.25, totalItem: 3, status: "Order Received" },
  { id: 2, restaurant: "McDonald", totalPrice: 40.15, totalItem: 2, status: "Preparing" },
  { id: 3, restaurant: "Starbucks", totalPrice: 10.20, totalItem: 1, status: "Preparing" },
  { id: 4, restaurant: "Pizza Hut", totalPrice: 35.25, totalItem: 3, status: "Ready for Pickup" },
  { id: 5, restaurant: "Pizza Hut", totalPrice: 35.25, totalItem: 3, status: "Delivered" },
  { id: 6, restaurant: "Pizza Hut", totalPrice: 35.25, totalItem: 3, status: "Delivered" },
  { id: 7, restaurant: "Pizza Hut", totalPrice: 35.25, totalItem: 3, status: "Delivered" },
];

const Order = () => {
  return (
    <>
      <View className='px-4 h-full bg-primary'>
        <FlatList
          data={EachOrderList}
          keyExtractor={item => item.id.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <EachOrder
              id={item.id}
              restaurant={item.restaurant}
              totalPrice={item.totalPrice}
              totalItem={item.totalItem}
              status={item.status}
            />
          )}
        />
      </View>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
    </>
  )
};


export default Order