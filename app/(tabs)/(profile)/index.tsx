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
    icon: <Feather name="user" size={26} color="#FF7622" />
  },
  {
    title: "Addresses",
    icon: <FontAwesome5 name="map" size={24} color="#413DFB" />
  },
]
const profileItemList2 = [
  {
    title: "Cart",
    icon: <Image source={icons.bag} className='h-6 w-6' resizeMode='contain' tintColor="#369BFF" />
  },
  {
    title: "Favorite",
    icon: <MaterialIcons name="favorite-border" size={26} color="#B33DFB" />
  },
  {
    title: "Notifications",
    icon: <Feather name="bell" size={24} color="#FFAA2A" />
  },
  {
    title: "Payment Method",
    icon: <AntDesign name="creditcard" size={24} color="#369BFF" />
  },
]
const profileItemList3 = [
  {
    title: "FAQs",
    icon: <AntDesign name="questioncircleo" size={24} color="#FB6D3A" />
  },
  {
    title: "User Reviews",
    icon: <Feather name="command" size={24} color="#2AE1E1" />
  },
  {
    title: "Settings",
    icon: <Feather name="settings" size={24} color="#413DFB" />
  },
];

const Profile = () => {
  return (
    <SafeAreaView className='bg-primary h-full px-3'>
      <ProfileHeader title='Profile' />
      <ScrollView className='mt-4' showsVerticalScrollIndicator={false}>
        <View className='mt-6 px-2'>
          <ProfileInfoWrapper />
          <View className='p-3 mt-8 bg-[#f6f5f5] rounded-xl'>
            {
              profileItemList1.map((item, index) => (
                <SettingWrapper
                  key={index}
                  title={item.title}
                  icon={item.icon}
                />
              ))
            }
          </View>
          <View className='p-3 mt-8 bg-[#f6f5f5] rounded-xl'>
            {
              profileItemList2.map((item, index) => (
                <SettingWrapper
                  key={index}
                  title={item.title}
                  icon={item.icon}
                />
              ))
            }
          </View>
          <View className='p-3 mt-8 bg-[#f6f5f5] rounded-xl'>
            {
              profileItemList3.map((item, index) => (
                <SettingWrapper
                  key={index}
                  title={item.title}
                  icon={item.icon}
                />
              ))
            }
          </View>
          <View className='p-1 px-3 mt-8 bg-[#f6f5f5] rounded-xl mb-5'>
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

export default Profile