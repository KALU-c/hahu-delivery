import images from "@/constants/images";
import { useCartStore } from "@/context/useCartStore";
import Entypo from "@expo/vector-icons/Entypo";
import { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";

export type AvailableFoodType = {
  id: number;
  name: string;
  restaurant: string;
  price: number;
  rating: number;
  deliveryFee: number;
  cookTime: number;
  handleAddToCart?: () => void;
  handleRemoveFromCart?: () => void;
}

const EachAvailableFood = ({ name, restaurant, price, handleAddToCart, handleRemoveFromCart, id }: Partial<AvailableFoodType>) => {
  const [itemInCart, setItemInCart] = useState(false);

  const { cartItem } = useCartStore();

  useEffect(() => {
    const itemExist = cartItem.find(item => item.id === id);
    console.log(itemExist);

    if (itemExist) {
      setItemInCart(true);
    } else {
      setItemInCart(false);
    }

  }, [cartItem])

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
        <Pressable className='p-2 bg-secondary rounded-full' onPress={itemInCart ? handleRemoveFromCart : handleAddToCart}>
          {
            itemInCart
              ? <Entypo name="minus" size={16} color="white" />
              : <Entypo name="plus" size={16} color="white" />
          }
        </Pressable>
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