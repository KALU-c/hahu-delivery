import { useLocalSearchParams, router } from 'expo-router'
import icons from '@/constants/icons';
import { View, Text, ScrollView, Image, Pressable, StatusBar } from 'react-native'
import images from '@/constants/images';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useState } from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import EachReview, { ReviewType } from '@/components/shared/EachReview';
import EachAvailableFood, { AvailableFoodType } from '@/components/shared/EachAvailableFood';

type RestaurantDetailType = {
  id: number;
  address: string;
  cookTime: number;
  deliveryFee: number;
  name: string;
  rating: number
}

const FoodReviewList: ReviewType[] = [
  {
    id: 1,
    reviewerName: "John Doe",
    reviewerId: 101,
    rating: 4.5,
    review: "The food was delicious and fresh. Delivery was fast, but the packaging could be improved.",
    date: "2024-09-18",
  },
  {
    id: 2,
    reviewerName: "Emily Smith",
    reviewerId: 102,
    rating: 5,
    review: "Absolutely loved the taste and presentation. Will definitely order again!",
    date: "2024-09-17",
  },
  {
    id: 3,
    reviewerName: "Michael Johnson",
    reviewerId: 103,
    rating: 3.8,
    review: "Good taste, but portion size was a bit small for the price.",
    date: "2024-09-16",
  },
  {
    id: 4,
    reviewerName: "Sophia Brown",
    reviewerId: 104,
    rating: 4.2,
    review: "The meal was tasty, but the sides were a little underwhelming. Overall, a good experience.",
    date: "2024-09-15",
  },
  {
    id: 5,
    reviewerName: "David Lee",
    reviewerId: 105,
    rating: 4.7,
    review: "Great flavor and well-cooked. The delivery was on time, and I’m impressed with the quality.",
    date: "2024-09-14",
  },
];

const availableFoodListType = ["Burger", "Sandwich", "Pizza", "Juice"];

const availableFoodList: AvailableFoodType[] = [
  { id: 1, name: "Burger", restaurant: "Food Hub", price: 8.99, rating: 4.5, deliveryFee: 2.99, cookTime: 15 },
  { id: 2, name: "Pizza", restaurant: "Food Hub", price: 12.49, rating: 4.7, deliveryFee: 3.49, cookTime: 20 },
  { id: 3, name: "Sushi", restaurant: "Food Hub", price: 15.99, rating: 4.8, deliveryFee: 4.99, cookTime: 25 },
  { id: 4, name: "Pasta", restaurant: "Food Hub", price: 10.99, rating: 4.6, deliveryFee: 3.99, cookTime: 18 },
  { id: 5, name: "Tacos", restaurant: "Food Hub", price: 6.49, rating: 4.3, deliveryFee: 2.49, cookTime: 10 },
  { id: 6, name: "Salad", restaurant: "Food Hub", price: 7.99, rating: 4.4, deliveryFee: 1.99, cookTime: 12 }
];


const RestaurantDetail = () => {
  // const [selectedFoodType, setSelectedFoodType] = useState("");
  const params = useLocalSearchParams();

  const item = JSON.parse(params.item as string) as RestaurantDetailType;

  const { name, address, cookTime, deliveryFee, rating } = item;

  const [liked, setLiked] = useState(false);

  return (
    <>
      <SafeAreaView className='bg-primary h-full px-2'>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <Image
              source={images.restaurant2}
              className='w-full h-[270px] rounded-xl'
            // resizeMode='contain'
            />
            <View className='absolute flex-row py-6 justify-between w-full px-4 items-center'>
              <Pressable
                className='p-3 bg-primary rounded-full'
                onPress={() => router.back()}
              >
                <AntDesign name="left" size={24} color="black" />
              </Pressable>
              <Pressable className='p-3 bg-primary rounded-full' onPress={() => setLiked(!liked)}>
                {
                  liked ? (
                    <MaterialIcons name="favorite" size={24} color="#FF7622" />
                  ) : (
                    <MaterialIcons name="favorite-border" size={24} color="black" />
                  )
                }
              </Pressable>
            </View>
          </View>
          <View className='pt-6 px-4 gap-2'>
            <View className='flex-row my-2'>
              <View className='flex-row items-center mr-5'>
                <Image
                  source={icons.star}
                  className='w-6 h-6 mr-1'
                  resizeMode='contain'
                  tintColor="#FF7622"
                />
                <Text className='text-[18px] font-SenMedium'>{rating}</Text>
              </View>
              <View className='flex-row items-center mr-5'>
                <Image
                  source={icons.car}
                  className='w-6 h-6 mr-2'
                  resizeMode='contain'
                  tintColor="#FF7622"
                />
                <Text className='text-[18px] font-SenMedium'>
                  {typeof deliveryFee === 'string' ? deliveryFee : `$ ${deliveryFee}`}
                </Text>
              </View>
              <View className='flex-row items-center'>
                <Image
                  source={icons.time}
                  className='w-6 h-6 mr-1'
                  resizeMode='contain'
                  tintColor="#FF7622"
                />
                <Text className='text-[18px] font-SenMedium'>{cookTime} min</Text>
              </View>
            </View>
            <View className='mb-2'>
              <Text className='font-SenSemibold text-[25px] mb-1'>{name}</Text>
              <View className='flex-row items-center'>
                <Entypo name="location-pin" size={20} color="#808080" />
                <Text className='font-SenRegular text-[15px] text-gray-200'>{address}</Text>
              </View>
            </View>

            <View className='py-1'>
              <Text className='text-[17px] font-SenRegular text-gray-100'>
                Maecenas sed diam eget risus varius blandit sit amet non magna. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
              </Text>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View className='flex-row my-3'>
                {
                  availableFoodListType.map((item, index) => (
                    <View className='border-[1px] border-gray-100 py-3 px-5 rounded-full mr-3' key={index}>
                      <Text className='font-SenMedium text-[18px]'>{item}</Text>
                    </View>
                  ))
                }
              </View>
            </ScrollView>
            <View className='flex-row justify-between flex-wrap'>
              {
                availableFoodList.map(item => (
                  <Pressable key={item.id} onPress={() => router.push({
                    pathname: "/details/food/[id]",
                    params: { id: item.id, item: JSON.stringify(item) }
                  })}>
                    <EachAvailableFood
                      name={item.name}
                      restaurant={item.restaurant}
                      price={item.price}
                    />
                  </Pressable>
                ))
              }
            </View>
            <View>
              <View className='flex-row justify-between mb-4 mx-2'>
                <Text className='text-[20px] font-SenMedium text-green-600'>Reviews</Text>
                <Text className='text-[20px] font-SenMedium text-gray-100'>13</Text>
              </View>
              {
                FoodReviewList.map(item => (
                  <EachReview
                    key={item.id}
                    id={item.id}
                    reviewerName={item.reviewerName}
                    reviewerId={item.reviewerId}
                    rating={item.rating}
                    review={item.review}
                    date={item.date}
                  />
                ))
              }
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
    </>
  )
}


export default RestaurantDetail