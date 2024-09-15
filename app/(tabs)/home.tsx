import CustomHeader from '@/components/CustomHeader'
import CustomInput from '@/components/CustomInput'
import { View, Text, ScrollView, Image, StyleSheet, FlatList, StatusBar } from 'react-native'
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

const EachRestaurant = () => {
  return (
    <View className='px-2 mt-4 bg-white pb-4 rounded-xl pt-2' style={styles.boxShadow}>
      <Image
        source={images.restaurant1}
        className='h-[170px] w-[98%] self-center mb-2 rounded-lg'
        resizeMode='stretch'
        resizeMethod='resize'
      // style={{ borderRadius: 10 }}
      />
      <View className='px-3 gap-1 mb-1'>
        <Text className='text-[20px] font-SenMedium '>Rose Garden Restaurant</Text>
        <Text className='text-[17px] font-SenRegular text-gray-100'>Burger - Chicken - Riche - Wings</Text>
      </View>
      <View className='mt-2 px-3 flex-row'>
        <View className='flex-row items-center gap-[2px] mr-5
        '>
          <Image
            source={icons.star}
            className='w-6 h-6'
            resizeMode='contain'
            tintColor="#FF7622"
          />
          <Text className='text-[18px] font-SenSemibold'>4.7</Text>
        </View>
        <View className='flex-row items-center gap-[2px] mr-5
        '>
          <Image
            source={icons.car}
            className='w-6 h-6'
            resizeMode='contain'
            tintColor="#FF7622"
          />
          <Text className='text-[18px] font-SenMedium'>Free</Text>
        </View>
        <View className='flex-row items-center gap-[2px]
        '>
          <Image
            source={icons.time}
            className='w-6 h-6'
            resizeMode='contain'
            tintColor="#FF7622"
          />
          <Text className='text-[18px] font-SenRegular'>20 min</Text>
        </View>
      </View>
    </View>
  )
}

const Home = () => {
  return (
    <>
      <SafeAreaView className='bg-white h-full'>
        <ScrollView className='px-3' showsVerticalScrollIndicator={false}>
          <CustomHeader />
          <View className='px-2'>
            <Text className='font-SenRegular text-[18px]'>Hey Halal, <Text className='font-SenBold text-[18px]'>Good Afternoon!</Text></Text>

            <CustomInput
              placeholder='Search dishes, restaurants'
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