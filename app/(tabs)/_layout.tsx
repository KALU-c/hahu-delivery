import { Tabs } from 'expo-router'
import { View, Text, Image } from 'react-native'
import icons from '@/constants/icons'
import CartContextProvider from '@/context/CartContext';
import { TabIconProps } from '@/types/layout';

const TabIcon = ({ name, icon, color, focused }: TabIconProps) => {
  return (
    <View className={`items-center justify-center gap-1 ${(focused) && "h-[82px]  rounded-full w-[80px] bg-gray-50 transition-all"}`}>
      <Image
        source={icon}
        className={`w-6 h-6 ${focused && "scale-150"} transition`}
        resizeMode='contain'
        tintColor={color}
      />
      <Text className={`${focused ? "font-SenSemibold" : "font-SenRegular"} transition-all`} style={{ color: color }}>{name}</Text>
    </View>
  )
}

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#FF7622",
        tabBarInactiveTintColor: "#161622",
        tabBarStyle: {
          backgroundColor: "#F0F5FA",
          height: 60,
        }
      }}
    >
      <Tabs.Screen name='home' options={{
        headerShown: false,
        title: "Home",
        tabBarIcon: ({ color, focused }) => (
          <TabIcon color={color} focused={focused} name='Home' icon={icons.home} />
        )
      }} />
      <Tabs.Screen name='explore' options={{
        headerShown: false,
        title: "Cafe",
        tabBarIcon: ({ color, focused }) => (
          <TabIcon color={color} focused={focused} name='Cafe' icon={icons.explore} />
        )
      }} />
      <Tabs.Screen name='cart' options={{
        headerShown: false,
        title: "Cart",
        tabBarIcon: ({ color, focused }) => (
          <TabIcon color={color} focused={focused} name='Cart' icon={icons.bag} />
        )
      }} />
      <Tabs.Screen name='(order)' options={{
        headerShown: false,
        title: "Orders",
        tabBarIcon: ({ color, focused }) => (
          <TabIcon color={color} focused={focused} name='Orders' icon={icons.car} />
        )
      }} />
      <Tabs.Screen name='(profile)' options={{
        headerShown: false,
        title: "Profile",
        tabBarIcon: ({ color, focused }) => (
          <TabIcon color={color} focused={focused} name='Profile' icon={icons.profile} />
        )
      }} />
    </Tabs>
  )
}
export default TabsLayout