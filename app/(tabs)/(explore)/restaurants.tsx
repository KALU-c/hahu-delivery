import CustomInput from '@/components/CustomInput';
import EachRestaurant from '@/components/home/EachRestaurant';
import { EachRestaurantType } from '@/types/restaurant';
import { router } from 'expo-router';
import { View, Pressable, ScrollView } from 'react-native'

const restaurants: EachRestaurantType[] = [
  {
    id: 1,
    name: "The Gourmet Bistro",
    address: "123 Flavor Street, Foodtown",
    rating: 4.5,
    deliveryFee: "Free",
    cookTime: 20,
  },
  {
    id: 2,
    name: "Pasta Palace",
    address: "456 Noodle Lane, Pasta City",
    rating: 4.7,
    deliveryFee: 3.50,
    cookTime: 15,
  },
  {
    id: 3,
    name: "Burger Haven",
    address: "789 Burger Boulevard, Grilltown",
    rating: 4.2,
    deliveryFee: 4.00,
    cookTime: 25,
  },
  {
    id: 4,
    name: "Sushi World",
    address: "101 Sushi Street, Sushi City",
    rating: 4.8,
    deliveryFee: 6.00,
    cookTime: 30,
  },
  {
    id: 5,
    name: "Taco Fiesta",
    address: "202 Taco Road, Tex-Mex Town",
    rating: 4.3,
    deliveryFee: 2.99,
    cookTime: 18,
  },
  {
    id: 6,
    name: "Pizza Palace",
    address: "303 Pizza Plaza, Slice City",
    rating: 4.6,
    deliveryFee: 4.50,
    cookTime: 22,
  },
  {
    id: 7,
    name: "Salad Central",
    address: "404 Veggie Way, Healthy Town",
    rating: 4.1,
    deliveryFee: 3.00,
    cookTime: 10,
  },
  {
    id: 8,
    name: "Deli Delights",
    address: "505 Sandwich Street, Deli City",
    rating: 4.4,
    deliveryFee: 3.75,
    cookTime: 12,
  },
  {
    id: 9,
    name: "Indian Spice",
    address: "606 Curry Lane, Spice Town",
    rating: 4.9,
    deliveryFee: 5.50,
    cookTime: 35,
  },
];

const Restaurants = () => {
  return (
    <ScrollView className='bg-white'>
      <View className='mb-10 px-3'>
        <CustomInput
          placeholder='Search restaurants'
          otherStyle='-mt-4 mb-0'
        />
        {
          restaurants.map(item => (
            <Pressable key={item.id} onPress={() => router.push({ pathname: "/details/restaurant/[id]", params: { id: item.id, item: JSON.stringify(item) } })}>
              <EachRestaurant
                id={item.id}
                name={item.name}
                rating={item.rating}
                address={item.address}
                cookTime={item.cookTime}
                deliveryFee={item.deliveryFee}
              />
            </Pressable>
          ))
        }
      </View>
    </ScrollView>
  )
}
export default Restaurants