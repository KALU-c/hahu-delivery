import icons from '@/constants/icons';
import images from '@/constants/images';
import { router, useLocalSearchParams } from 'expo-router'
import { View, Text, ScrollView, Image, Pressable } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useState } from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';

type FoodDetailType = {
  id: number;
  name: string;
  price: number;
  restaurant: string;
}

const FoodDetail = () => {
  const params = useLocalSearchParams();
  const item = JSON.parse(params.item as string) as FoodDetailType;
  const { id, name, price, restaurant } = item;

  const [liked, setLiked] = useState(false);
  const [selectedSize, setSelectedSize] = useState(0);

  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView>
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
          <Text className='font-SenSemibold text-[25px]'>Burger Bistro</Text>
          <View className='flex-row items-center mb-3'>
            <Image
              source={icons.restaurantIcon}
              className='w-6 h-6 mr-2'
              resizeMode='contain'
            />
            <Text className='font-SenRegular text-[18px]'>Rose Garden</Text>
          </View>
          <View className='flex-row my-2'>
            <View className='flex-row items-center mr-5'>
              <Image
                source={icons.star}
                className='w-7 h-7 mr-1'
                resizeMode='contain'
                tintColor="#FF7622"
              />
              <Text className='text-[20px] font-SenRegular'>4.7</Text>
            </View>
            <View className='flex-row items-center mr-5'>
              <Image
                source={icons.car}
                className='w-7 h-7 mr-2'
                resizeMode='contain'
                tintColor="#FF7622"
              />
              <Text className='text-[20px] font-SenRegular'>Free</Text>
            </View>
            <View className='flex-row items-center'>
              <Image
                source={icons.time}
                className='w-7 h-7 mr-1'
                resizeMode='contain'
                tintColor="#FF7622"
              />
              <Text className='text-[20px] font-SenRegular'>20 min</Text>
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
            <Text className='text-[15px] font-SenRegular'>INGREDIENTS</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default FoodDetail