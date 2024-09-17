import { View, Text, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import PagerView from 'react-native-pager-view';
import { PageIndicator } from 'react-native-page-indicator';
import { useEffect, useRef, useState } from 'react';
import images from '@/constants/images';
import CustomButton from '@/components/CustomButton';
import { router } from 'expo-router';

const index = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const pagerViewRef = useRef<PagerView | null>(null);

  const handleNext = () => {
    if (currentPage == 3) {
      router.replace("/sign-in");
    } else {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleSkip = () => setCurrentPage(3);

  useEffect(() => {
    if (pagerViewRef.current) {
      pagerViewRef.current.setPage(currentPage);
    }
  }, [currentPage]);

  return (
    <SafeAreaView className='flex-1 justify-center'>
      <PagerView
        key={currentPage} // Force re-render with new page
        ref={pagerViewRef}
        className='h-[60vh]'
        initialPage={currentPage}
        onPageSelected={e => setCurrentPage(e.nativeEvent.position)}
      >
        <View key="1" className='items-center justify-center px-6 gap-3'>
          <Image source={images.imagePlaceholder} className='w-[300px] h-[350px]' />
          <Text className='font-SenExtraBold text-[24px]'>All your favoritesF</Text>
          <Text className='font-SenRegular text-[16px] text-center'>Get all your loved foods in one once place,
            you just place the order we do the rest</Text>
        </View>
        <View key="2" className='items-center justify-center px-6 gap-3'>
          <Image source={images.imagePlaceholder} className='w-[300px] h-[350px]' />
          <Text className='font-SenExtraBold text-[24px]'>All your favoritesF</Text>
          <Text className='font-SenRegular text-[16px] text-center'>Get all your loved foods in one once place,
            you just place the order we do the rest</Text>
        </View>
        <View key="3" className='items-center justify-center px-6 gap-3'>
          <Image source={images.imagePlaceholder} className='w-[300px] h-[350px]' />
          <Text className='font-SenExtraBold text-[24px]'>All your favoritesF</Text>
          <Text className='font-SenRegular text-[16px] text-center'>Get all your loved foods in one once place,
            you just place the order we do the rest</Text>
        </View>
        <View key="4" className='items-center justify-center px-6 gap-3'>
          <Image source={images.imagePlaceholder} className='w-[300px] h-[350px]' />
          <Text className='font-SenExtraBold text-[24px]'>All your favoritesF</Text>
          <Text className='font-SenRegular text-[16px] text-center'>Get all your loved foods in one once place,
            you just place the order we do the rest</Text>
        </View>
      </PagerView>
      <PageIndicator count={4} current={currentPage} color='red' className='h-[2vh] self-center mb-10' />
      <View className='h-[20vh] justify-end px-5 transition-all'>
        <CustomButton
          title={`${currentPage == 3 ? "GET STARTED" : "NEXT"}`}
          otherStyle='mb-4'
          // handlePress={handleNext}
          handlePress={() => router.replace("/home")}
        />
        <CustomButton
          title='Skip'
          otherStyle={`m-0 bg-transparent ${currentPage == 3 && "hidden"}`}
          textStyle='text-gray-100'
          handlePress={handleSkip}
        />
      </View>
    </SafeAreaView>
  )
}

export default index