import ProfileHeader from '@/components/profile/ProfileHeader'
import { View, ScrollView, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import SettingWrapper from '@/components/profile/SettingWrapper'
import Feather from '@expo/vector-icons/Feather'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import icons from '@/constants/icons'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import ProfileInfoWrapper from '@/components/profile/ProfileInfoWrapper'
import { router } from 'expo-router'

const profileItemList1 = [
  {
    title: "Profile Info",
    icon: <Feather name="user" size={22} color="#FF7622" />,
    handlePress: () => router.push("/personalInfo")
  },
  {
    title: "Addresses",
    icon: <FontAwesome5 name="map" size={22} color="#413DFB" />,
    handlePress: () => router.push("/address")
  },
]
const profileItemList2 = [
  {
    title: "Cart",
    icon: <Image source={icons.bag} className='h-5 w-5' resizeMode='contain' tintColor="#369BFF" />,
    handlePress: () => router.push("/cart")
  },
  {
    title: "Favorite",
    icon: <MaterialIcons name="favorite-border" size={22} color="#B33DFB" />,
    handlePress: () => router.push("/favorite")
  },
  {
    title: "Notifications",
    icon: <Feather name="bell" size={22} color="#FFAA2A" />,
    handlePress: () => router.push("/notifications")
  },
  {
    title: "Payment Method",
    icon: <AntDesign name="creditcard" size={22} color="#369BFF" />,
    handlePress: () => router.push("/paymentMethod")
  },
]
const profileItemList3 = [
  {
    title: "FAQs",
    icon: <AntDesign name="questioncircleo" size={22} color="#FB6D3A" />,
    handlePress: () => router.push("/faq")
  },
  {
    title: "User Reviews",
    icon: <Feather name="command" size={22} color="#2AE1E1" />,
    handlePress: () => router.push("/userReviews")
  },
  {
    title: "Settings",
    icon: <Feather name="settings" size={22} color="#413DFB" />,
    handlePress: () => router.push("/settings")
  },
];

const Profile = () => {
  return (
    <SafeAreaView className='bg-primary h-full px-3'>
      <View className='mt-4 mb-2'>
        <ProfileHeader title='Profile' />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className='mt-4 px-2'>
          <ProfileInfoWrapper />
          <View className='py-1 mt-4 rounded-xl'>
            {
              profileItemList1.map((item, index) => (
                <SettingWrapper
                  key={index}
                  title={item.title}
                  icon={item.icon}
                  handlePress={item.handlePress}
                />
              ))
            }
          </View>
          <View className='py-1 mt-5 rounded-xl'>
            {
              profileItemList2.map((item, index) => (
                <SettingWrapper
                  key={index}
                  title={item.title}
                  icon={item.icon}
                  handlePress={item.handlePress}
                />
              ))
            }
          </View>
          <View className='py-1 mt-5 rounded-xl'>
            {
              profileItemList3.map((item, index) => (
                <SettingWrapper
                  key={index}
                  title={item.title}
                  icon={item.icon}
                  handlePress={item.handlePress}
                />
              ))
            }
          </View>
          <View className='py-1 mt-5 rounded-xl mb-10'>
            <SettingWrapper
              icon={<MaterialCommunityIcons name="logout" size={24} color="#FB4A" />}
              title='Log Out'
            />
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

// f6f5f5

export default Profile