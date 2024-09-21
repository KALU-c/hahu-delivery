import icons from '@/constants/icons';
import images from '@/constants/images';
import { router, useLocalSearchParams } from 'expo-router'
import { View, Text, ScrollView, Image, Pressable, StatusBar } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useState } from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
import { FoodListType } from '@/types/home';
import CustomButton from '@/components/CustomButton';

type ReviewType = {
  id: number;
  reviewerName: string;
  reviewerId: number;
  rating: number;
  review: string;
  date: Date | string;
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
]

const EachReview = ({ id, reviewerName, reviewerId, rating, review, date }: ReviewType) => {
  const [viewMore, setViewMore] = useState(false);


  return (
    <View className='bg-gray-50 border-[1px] border-red-400 p-3 mb-2 rounded-xl'>
      <View className='flex-row justify-between'>
        <View className='flex-row items-center'>
          <Image
            source={images.profile2}
            className='w-12 h-12 rounded-full mr-2'
            resizeMode='contain'
          />
          <View>
            <Text className='text-[16px] font-SenSemibold tracking-tighter'>{reviewerName}</Text>
            <Text className='text-gray-100'>#{reviewerId}</Text>
          </View>
        </View>
        <View className='flex-row pt-1'>
          <Image
            source={icons.star}
            className='w-5 h-5 mr-1'
            resizeMode='contain'
            tintColor="#FF7622"
          />
          <Text className='font-SenMedium text-[16px]'>{rating}</Text>
        </View>
      </View>
      <View className='py-3 transition-all'>
        <Text className='text-[16px] font-SenMedium tracking-tighter transition'>{!viewMore ? `${review.slice(0, 80)}...` : review}</Text>
      </View>
      <View className={`flex-row ${review.length <= 80 ? "justify-end" : "justify-between"} items-center`}>
        {
          review.length > 80 && (
            <Pressable className='flex-row items-center' onPress={() => setViewMore(!viewMore)}>
              <Text className='text-gray-200 mr-[2px] font-SenRegular text-[16px]'>View More</Text>
              <AntDesign name={!viewMore ? "right" : "up"} size={12} color="black" />
            </Pressable>
          )
        }
        <Text className='font-SenRegular text-gray-100'>{typeof date === 'string' ? date : date.toLocaleDateString()}</Text>
      </View>
    </View>
  )
}

const FoodDetail = () => {
  const params = useLocalSearchParams();
  const item = JSON.parse(params.item as string) as FoodListType;
  const { id, name, price, restaurant, deliveryFee, cookTime, rating, reviews } = item;

  const [liked, setLiked] = useState(false);
  const [selectedSize, setSelectedSize] = useState(0);

  return (
    <>
      <SafeAreaView className='bg-primary h-full px-3'>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <Image
              source={images.detailImagePlaceholder}
              className='w-full h-[350px]'
              resizeMode='contain'
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
          <View className='pt-6 px-6 gap-2'>
            <View className='flex-row justify-between pb-2 items-center'>
              <Text className='font-SenSemibold text-[25px]'>{name}</Text>
              <Text className='text-[20px] font-SenMedium'>${price}</Text>
            </View>
            <View className='flex-row items-center mb-3'>
              <Image
                source={icons.restaurantIcon}
                className='w-6 h-6 mr-2'
                resizeMode='contain'
              />
              <Text className='font-SenRegular text-[18px]'>{restaurant}</Text>
            </View>
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
            <View className='py-3'>
              <Text className='text-[17px] font-SenRegular text-gray-100'>
                Maecenas sed diam eget risus varius blandit sit amet non magna. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
              </Text>
            </View>
            <View className='flex-row items-center py-2'>
              <Text className='mr-4 font-SenRegular text-[20px] text-gray-100'>SIZE: </Text>
              <View className='flex-row'>
                <Pressable className={`${selectedSize === 10 ? "bg-secondary" : "bg-gray-50"} p-4 rounded-full items-center mr-4`}
                  onPress={() => setSelectedSize(10)}
                >
                  <Text className={`text-[20px] font-SenMedium ${selectedSize === 10 ? "text-primary" : "text-dark"}`}>10</Text>
                </Pressable>
                <Pressable className={`${selectedSize === 14 ? "bg-secondary" : "bg-gray-50"} p-4 rounded-full items-center mr-4`}
                  onPress={() => setSelectedSize(14)}
                >
                  <Text className={`text-[20px] font-SenMedium ${selectedSize === 14 ? "text-primary" : "text-dark"}`}>14</Text>
                </Pressable>
                <Pressable className={`${selectedSize === 16 ? "bg-secondary" : "bg-gray-50"} p-4 rounded-full items-center mr-4`}
                  onPress={() => setSelectedSize(16)}
                >
                  <Text className={`text-[20px] font-SenMedium ${selectedSize === 16 ? "text-primary" : "text-dark"}`}>16</Text>
                </Pressable>
              </View>
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
        <View className='h-[60px] flex-row items-center justify-between'>
          <CustomButton
            title='ADD TO CART'
            otherStyle='rounded-md h-[40px] px-2 w-[48%]'
            textStyle='text-[15px]'
          />
          <CustomButton
            title='ADD TO FAVORITE'
            otherStyle='rounded-md h-[40px] px-2 w-[48%] bg-transparent border-[1px] border-secondary'
            textStyle='text-[15px] text-secondary'
          />
          {/* <Text className='text-[15px] font-SenRegular'>INGREDIENTS</Text> */}
        </View>
      </SafeAreaView>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
    </>
  )
}


export default FoodDetail