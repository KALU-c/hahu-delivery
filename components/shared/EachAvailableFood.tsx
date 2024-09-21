import images from "@/constants/images";
import Entypo from "@expo/vector-icons/Entypo";
import { View, Text, Image, StyleSheet } from "react-native";

export type AvailableFoodType = {
  id: number;
  name: string;
  restaurant: string;
  price: number;
  rating: number;
  deliveryFee: number;
  cookTime: number;
}

const EachAvailableFood = ({ name, restaurant, price }: Partial<AvailableFoodType>) => {

  return (
    <View className='justify-center p-4 rounded-xl bg-primary mb-4' style={styles.boxShadow}>
      <Image
        source={images.burger}
        className='w-[140px] h-[100px] rounded-xl'
        resizeMode='contain'
      />
      <Text className='font-SenSemibold text-[18px] mt-2'>{name}</Text>
      <Text className='font-SenRegular text-[15px] mt-[3px] text-gray-200'>{restaurant}</Text>
      <View className='flex-row justify-between items-center mt-3 px-1'>
        <Text className='text-[17px] font-SenSemibold'>${price}</Text>
        <View className='p-2 bg-secondary rounded-full'>
          <Entypo name="plus" size={16} color="white" />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  boxShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 7,
  }
});

export default EachAvailableFood