import AntDesign from "@expo/vector-icons/AntDesign";
import { useState } from "react";
import { View, Text, Image, Pressable } from "react-native";
import images from "@/constants/images";
import icons from "@/constants/icons";


export type ReviewType = {
  id: number;
  reviewerName: string;
  reviewerId: number;
  rating: number;
  review: string;
  date: Date | string;
}

const EachReview = ({ id, reviewerName, reviewerId, rating, review, date }: ReviewType) => {
  const [viewMore, setViewMore] = useState(true);


  return (
    <View className='bg-gray-50 400 p-3 mb-2 rounded-xl'>
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
        <Text className='text-[16px] font-SenMedium tracking-tighter transition'>{!viewMore ? `${review.slice(0, 92)}...` : review}</Text>
      </View>
      <View className={`flex-row ${review.length <= 92 ? "justify-end" : "justify-between"} items-center w-full`}>
        {
          review.length > 92 && (
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

export default EachReview