import CustomHeader from '@/components/CustomHeader'
import CustomInput from '@/components/CustomInput'
import { View, Text, ScrollView, Image, StyleSheet, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import icons from '@/constants/icons'
import images from '@/constants/images'

type EachFoodProps = {
  name: string;
  restaurant: string;
  price: number;
};

const foodList = [
  { id: 1, name: "Burger", restaurant: "Tsnat", price: 70 },
  { id: 2, name: "Burger", restaurant: "Tsnat", price: 70 },
  { id: 3, name: "Burger", restaurant: "Tsnat", price: 70 },
  { id: 4, name: "Burger", restaurant: "Tsnat", price: 70 },
  { id: 5, name: "Burger", restaurant: "Tsnat", price: 70 },
  { id: 6, name: "Burger", restaurant: "Tsnat", price: 70 },
  { id: 7, name: "Burger", restaurant: "Tsnat", price: 70 },
  { id: 8, name: "Burger", restaurant: "Tsnat", price: 70 },
  { id: 9, name: "Burger", restaurant: "Tsnat", price: 70 },
];

const EachFood = ({ name, restaurant, price }: EachFoodProps) => {
  return (
    <View
      className='w-[160px] items-center justify-start rounded-xl shadow bg-white pb-3 mr-4 mb-3'
      style={styles.boxShadow}
    >
      <Image
        source={images.foodImagePlaceholder}
        className='h-[150px] w-[150px]'
        resizeMode='contain'
      />
      <Text className='font-SenBold text-[21px] items-start w-full px-2 mb-2'>{name}</Text>
      <View className='flex-row justify-between w-full px-2 rounded-lg'>
        <Text className='font-SenRegular text-[18px]'>{restaurant}</Text>
        <Text className='font-SenRegular text-[19px]'>${price}</Text>
      </View>
    </View>
  )
}

const Home = () => {
  return (
    <SafeAreaView className='bg-white h-full'>
      <ScrollView className='px-3'>
        <CustomHeader />
        <View className='px-2'>
          <Text className='font-SenRegular text-[18px]'>Hey Halal, <Text className='font-SenBold text-[18px]'>Good Afternoon!</Text></Text>

          <CustomInput
            placeholder='Search dishes, restaurants'
          />

          <View>
            {/* View All */}
            <View className='flex-row justify-between'>
              <Text className='font-SenRegular text-[22px]'>All Categories</Text>
              <View className='flex-row gap-1 items-center'>
                <Text className='font-SenRegular text-[20px]'>See All</Text>
                <Image
                  source={icons.back}
                  className='w-4 h-4 rotate-180'
                  resizeMode='contain'
                  tintColor="#7E8A97"
                />
              </View>
            </View>
            <View className='black py-6 flex-row -mx-2'>
              <FlatList
                data={foodList}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                  <EachFood
                    name={item.name}
                    restaurant={item.restaurant}
                    price={item.price}
                  />
                )}
                className='flex-1 w-full py-2'
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
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

    elevation: 6,
  }
})

export default Home