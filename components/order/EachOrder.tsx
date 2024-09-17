import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons"
import { View, Text, Image } from "react-native"
import { EachOrderType } from "@/types/order"
import images from "@/constants/images"
import CustomButton from "../CustomButton"

const EachOrder = ({ id, restaurant, totalPrice, totalItem, status }: EachOrderType) => {
  return (
    <View className='px-2 bg-primary my-2 py-4 border-2 border-gray-50 rounded-lg'>
      <View>
        <View className='flex-row justify-between items-start w-full py-4'>
          <View className='flex-row gap-4 items-center'>
            <Image
              source={images.foodImagePlaceholder}
              className='w-[100px] h-[100px]'
              resizeMode='contain'
            />
            <View className='gap-1'>
              <View className='flex-row justify-between items-center  w-[77%]'>
                <Text className='font-SenSemibold text-[20px]'>{restaurant}</Text>
                <Text className='font-SenRegular text-gray-100 text-[16px] underline'>#{id}</Text>
              </View>
              <View className='flex-row items-center py-2'>
                <Text className='font-SenSemibold text-[18px] border-r-[1px] border-r-gray-100 pr-4'>${totalPrice}</Text>
                <Text className='font-SenRegular text-[15px] text-gray-100 pl-4'>{totalItem < 10 ? `0${totalItem}` : totalItem} Items</Text>
              </View>
              <View className=' flex-row items-center'>
                {/* <MaterialCommunityIcons name="clock-check-outline" size={16} color="#A0A5BA" /> */}
                <MaterialCommunityIcons name="clock-fast" size={18} color="#A0A5BA" />

                <Text className='ml-1 font-SenRegular text-[15px] text-gray-100'>
                  {/* 29 Jan, 12:30 */}
                  {status}
                </Text>
              </View>
            </View>
          </View>

        </View>
        <View className='flex-row w-full justify-between'>
          <CustomButton
            title='Track Order'
            otherStyle='w-[45%] h-[45px]'
            textStyle=' text-[17px]'
          />
          <CustomButton
            title='Cancel'
            otherStyle='w-[45%] h-[45px] bg-transparent border-2 border-secondary'
            textStyle='text-secondary text-[17px]'
          />
        </View>
      </View>
    </View>
  )
};

export default EachOrder;