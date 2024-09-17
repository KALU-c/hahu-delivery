import { View } from 'react-native'
import {
  createMaterialTopTabNavigator,
  MaterialTopTabNavigationOptions,
  MaterialTopTabNavigationEventMap
} from "@react-navigation/material-top-tabs";
import { withLayoutContext } from 'expo-router';
import { ParamListBase, TabNavigationState } from '@react-navigation/native';
import Header from '@/components/order/Header';
import { SafeAreaView } from 'react-native-safe-area-context';

const { Navigator } = createMaterialTopTabNavigator();

export const MaterialTopTabs = withLayoutContext<
  MaterialTopTabNavigationOptions,
  typeof Navigator,
  TabNavigationState<ParamListBase>,
  MaterialTopTabNavigationEventMap
>(Navigator);

type TopTabType = {
  name: string;
  color: string;
  focused: boolean;
}

const TabLayout = () => {
  return (
    <SafeAreaView className='bg-primary h-full'>
      {/* <ScrollView> */}
      <View className='px-4 pb-3 pt-5'>
        <Header />
      </View>
      <MaterialTopTabs screenOptions={{
        tabBarStyle: {
          borderBottomWidth: 1,
          borderBottomColor: "#ddd",
        },
        tabBarActiveTintColor: "#FF7622",
        tabBarIndicatorStyle: { backgroundColor: "#FF7622", elevation: 0, shadowOpacity: 0, shadowColor: "transparent" },
        tabBarInactiveTintColor: "#A0A5BA",
        tabBarLabelStyle: { fontWeight: 600, fontSize: 16, textTransform: "none" }
      }}>
        <MaterialTopTabs.Screen
          name='index'
          options={{ title: "Ongoing" }}
        />
        <MaterialTopTabs.Screen name='history' options={{ title: "History" }} />
      </MaterialTopTabs>
      {/* </ScrollView> */}
    </SafeAreaView>
  )
}

export default TabLayout