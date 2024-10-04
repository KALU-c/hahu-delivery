import CustomInput from '@/components/CustomInput';
import EachFoodItem from '@/components/explore/EachFoodList';
import { FoodListType } from '@/types/home';
import { router } from 'expo-router';
import { View, Pressable, ScrollView } from 'react-native'

const foodList: FoodListType[] = [
  { id: 1, name: "Burger", restaurant: "The Burger Joint", price: 8.99, rating: 4.2, deliveryFee: 2.4, cookTime: 30, reviews: [{ id: 1, review: "Great Burger", date: "20-10-2024", reviewerName: "Jane Doe" }] },
  { id: 2, name: "Pizza", restaurant: "Pizza Paradise", price: 12.99, rating: 3.1, deliveryFee: 8.0, cookTime: 120 },
  { id: 3, name: "Sushi", restaurant: "Sushi World", price: 15.99, rating: 4.7, deliveryFee: 7.4, cookTime: 20 },
  { id: 4, name: "Pasta", restaurant: "Pasta Palace", price: 10.99, rating: 2.5, deliveryFee: 3.5, cookTime: 40 },
  { id: 5, name: "Salad", restaurant: "Fresh Greens", price: 7.99, rating: 3.4, deliveryFee: "Free", cookTime: 10 },
  { id: 6, name: "Tacos", restaurant: "Taco Haven", price: 9.49, rating: 5.0, deliveryFee: 3.7, cookTime: 35 },
  { id: 7, name: "Steak", restaurant: "The Grill House", price: 20.99, rating: 4.0, deliveryFee: 7.0, cookTime: 15 },
  { id: 8, name: "Sandwich", restaurant: "Deli Delights", price: 6.99, rating: 3.8, deliveryFee: "Free", cookTime: 10 },
  { id: 9, name: "Chicken Wings", restaurant: "Wing Central", price: 11.99, rating: 4.1, deliveryFee: 2.4, cookTime: 50 },
];
const Foods = () => {
  return (
    <ScrollView className='bg-white'>
      <View className='mb-10 px-3'>
        <CustomInput
          placeholder='Search foods'
          otherStyle='-mt-4 mb-0'
        />
        {
          foodList.map(item => (
            <Pressable key={item.id} onPress={() => router.push({ pathname: "/details/food/[id]", params: { id: item.id, item: JSON.stringify(item) } })}>
              <EachFoodItem
                name={item.name}
                restaurant={item.restaurant}
                price={item.price}
              />
            </Pressable>
          ))
        }
      </View>
    </ScrollView>
  )
}
export default Foods