import CustomHeader from '@/components/CustomHeader'
import CustomInput from '@/components/CustomInput'
import { View, Text, ScrollView, Image, FlatList, StatusBar } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import icons from '@/constants/icons'
import EachFood from '@/components/home/EachFood'
import EachRestaurant from '@/components/home/EachRestaurant'

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

const Home = () => {

  return (
    <>
      <SafeAreaView className='bg-white h-full'>
        <ScrollView className='px-3' showsVerticalScrollIndicator={false}>
          <CustomHeader />
          <View className='px-2'>
            {/* <Text className='font-SenRegular text-[18px] mb-8'>Hey Halal, <Text className='font-SenBold text-[18px]'>Good Afternoon!</Text></Text> */}

            <CustomInput
              placeholder='Search dishes, restaurants'
              otherStyle='mt-0'
            />

            <View>
              {/* Food List -> View All start */}
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
              {/* Food List -> View All end */}
              {/* Food List View ->  Horizontal scroll start */}
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
              {/* Food List View ->  Horizontal scroll end */}
              {/* Open Restaurant -> View All start */}
              <View className='flex-row justify-between'>
                <Text className='font-SenRegular text-[22px]'>Open Restaurants</Text>
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
              {/* Open Restaurant -> View All end */}
              <View className='mb-10'>
                <EachRestaurant />
                <EachRestaurant />
                <EachRestaurant />
                <EachRestaurant />
                <EachRestaurant />
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
    </>
  )
}

export default Home