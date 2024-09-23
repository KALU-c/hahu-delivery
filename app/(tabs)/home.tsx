import CustomHeader from '@/components/CustomHeader'
import CustomInput from '@/components/CustomInput'
import { View, Text, ScrollView, Image, FlatList, StatusBar, Pressable } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import icons from '@/constants/icons'
import EachFood from '@/components/home/EachFood'
import EachRestaurant from '@/components/home/EachRestaurant'
import { router } from 'expo-router'
import { EachRestaurantType } from '@/types/restaurant'
import { FoodListType } from '@/types/home'
import { useEffect, useState } from 'react'

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


const Home = () => {

  return (
    <>
      <SafeAreaView className='bg-white h-full'>
        <ScrollView className='px-3' showsVerticalScrollIndicator={false}>
          <CustomHeader />
          <View className='px-2'>
            <CustomInput
              placeholder='Search dishes, restaurants'
              otherStyle='mt-0'
            />

            <View>
              {/* Food List -> View All start */}
              <View className='flex-row justify-between'>
                <Text className='font-SenRegular text-[22px]'>All Categories</Text>
                <View className='flex-row gap-1 items-center'>
                  <Text className='font-SenRegular text-[20px]'>See All</Text>
                  <Image
                    source={icons.back}
                    className='w-4 h-4 rotate-180'
                    resizeMode='contain'
                    tintColor="#7E8A97"
                  />
                </View>
              </View>
              {/* Food List -> View All end */}
              {/* Food List View ->  Horizontal scroll start */}
              <View className='black py-6 flex-row -mx-2'>
                <FlatList
                  data={foodList}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  keyExtractor={item => item.id.toString()}
                  renderItem={({ item }) => (
                    <EachFood
                      name={item.name}
                      restaurant={item.restaurant}
                      price={item.price}
                      handlePress={() => router.push({ pathname: "/details/food/[id]", params: { id: item.id, item: JSON.stringify(item) } })}
                    />
                  )}
                  className='flex-1 w-full py-2'
                />
              </View>
              {/* Food List View ->  Horizontal scroll end */}
              {/* Open Restaurant -> View All start */}
              <View className='flex-row justify-between'>
                <Text className='font-SenRegular text-[22px]'>Open Restaurants</Text>
                <View className='flex-row gap-1 items-center'>
                  <Text className='font-SenRegular text-[20px]'>See All</Text>
                  <Image
                    source={icons.back}
                    className='w-4 h-4 rotate-180'
                    resizeMode='contain'
                    tintColor="#7E8A97"
                  />
                </View>
              </View>
              {/* Open Restaurant -> View All end */}
              <View className='mb-10'>
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
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
    </>
  )
}

export default Home