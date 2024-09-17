import CustomButton from '@/components/CustomButton'
import { View, Text, ScrollView, StatusBar, Image, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import images from '@/constants/images'

const EachOrder = () => {
  return (
    <View className='px-2 bg-primary my-2 py-2 border-2 border-gray-50 rounded-lg'>
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
                <Text className='font-SenSemibold text-[20px]'>Pizza Hut</Text>
                <Text className='font-SenRegular text-gray-100 text-[16px] underline'>#162432</Text>
              </View>
              <View className='flex-row items-center py-2'>
                <Text className='font-SenSemibold text-[18px] border-r-[1px] border-r-gray-100 pr-4'>$35.25</Text>
                <Text className='font-SenRegular text-[15px] text-gray-100 pl-4'>03 Items</Text>
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
}

const Order = () => {
  return (
    <>
      {/* <SafeAreaView className='bg-primary h-full'> */}
      <ScrollView className='px-4 h-full bg-primary'>
        <EachOrder />
        <EachOrder />
        <EachOrder />
        <EachOrder />
        <EachOrder />
        <EachOrder />
      </ScrollView>
      {/* </SafeAreaView> */}
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
    </>
  )
};

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

export default Order