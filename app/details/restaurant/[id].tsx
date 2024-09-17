import { useLocalSearchParams } from 'expo-router'
import { View, Text } from 'react-native'

type RestaurantDetailType = {
  id: number;
  address: string;
  cookTime: number;
  deliveryFee: number;
  name: string;
  rating: number
}

const RestaurantDetail = () => {
  const params = useLocalSearchParams();
  const item = JSON.parse(params.item as string) as RestaurantDetailType;
  const { id, name, address, cookTime, deliveryFee, rating } = item;

  return (
    <View>
      <Text>{id}</Text>
      <Text>{name}</Text>
      <Text>{address}</Text>
      <Text>{cookTime}</Text>
      <Text>{deliveryFee}</Text>
      <Text>{rating}</Text>
    </View>
  )
}

export default RestaurantDetail