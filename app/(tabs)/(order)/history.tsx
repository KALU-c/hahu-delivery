import { View, StatusBar, FlatList } from 'react-native'
import { EachHistoryType } from '@/types/order';
import EachHistory from '@/components/order/EachHistory';

const EachHistoryList: EachHistoryType[] = [
  { id: 1, restaurant: "Pizza Hut", totalPrice: 35.25, totalItem: 3, date: "29 Jan, 12:30" },
  { id: 2, restaurant: "McDonald", totalPrice: 40.15, totalItem: 2, date: "29 Jan, 04:20" },
  { id: 3, restaurant: "Starbucks", totalPrice: 10.20, totalItem: 1, date: "29 Jan, 6:15" },
  { id: 4, restaurant: "Pizza Hut", totalPrice: 35.25, totalItem: 3, date: "19 Jan, 12:10" },
  { id: 5, restaurant: "Pizza Hut", totalPrice: 35.25, totalItem: 3, date: "10 Jan, 02:10" },
  { id: 6, restaurant: "Pizza Hut", totalPrice: 35.25, totalItem: 3, date: "03 Jan, 12:10" },
  { id: 7, restaurant: "Pizza Hut", totalPrice: 35.25, totalItem: 3, date: "03 Jan, 04:10" },
];

const History = () => {
  return (
    <>
      <View className='px-4 h-full bg-primary'>
        <FlatList
          data={EachHistoryList}
          keyExtractor={item => item.id.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <EachHistory
              id={item.id}
              restaurant={item.restaurant}
              totalPrice={item.totalPrice}
              totalItem={item.totalItem}
              date={item.date}
            />
          )}
        />
      </View>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
    </>
  )
};


export default History