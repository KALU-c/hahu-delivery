import { useLocalSearchParams } from 'expo-router'
import { View, Text } from 'react-native'

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

  return (
    <View>
      <Text>{id}</Text>
      <Text>{name}</Text>
      <Text>{price}</Text>
      <Text>{restaurant}</Text>
    </View>
  )
}

export default FoodDetail