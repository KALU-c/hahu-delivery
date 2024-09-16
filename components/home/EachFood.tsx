import { View, Image, Text, StyleSheet } from "react-native";
import images from "@/constants/images";

type EachFoodProps = {
  name: string;
  restaurant: string;
  price: number;
};

const EachFood = ({ name, restaurant, price }: EachFoodProps) => {
  return (
    <View
      className='w-[160px] items-center justify-start rounded-xl shadow bg-white pb-3 mr-2 ml-2 mb-3'
      style={styles.boxShadow}
    >
      <Image
        source={images.burger}
        className='h-[150px] w-[150px]'
        resizeMode='contain'
      />
      <Text className='font-SenBold text-[21px] items-start w-full px-2 mb-2'>{name}</Text>
      <View className='flex-row justify-between w-full px-2 rounded-lg'>
        <Text className='font-SenRegular text-[18px]'>{restaurant}</Text>
        <Text className='font-SenRegular text-[19px]'>${price}</Text>
      </View>
    </View>
  );
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

    elevation: 6,
  }
});

export default EachFood;