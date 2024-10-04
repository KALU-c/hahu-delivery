import {
  createMaterialTopTabNavigator,
  MaterialTopTabNavigationOptions,
  MaterialTopTabNavigationEventMap
} from "@react-navigation/material-top-tabs";
import { withLayoutContext } from 'expo-router';
import { ParamListBase, TabNavigationState } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const { Navigator } = createMaterialTopTabNavigator();

export const MaterialTopTabs = withLayoutContext<
  MaterialTopTabNavigationOptions,
  typeof Navigator,
  TabNavigationState<ParamListBase>,
  MaterialTopTabNavigationEventMap
>(Navigator);


const ExploreLayout
  = () => {
    return (
      <SafeAreaView className='bg-primary h-full'>
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
            name='restaurants'
            options={{ title: "Restaurants" }}
          />
          <MaterialTopTabs.Screen name='foods' options={{ title: "Foods" }} />
        </MaterialTopTabs>
      </SafeAreaView>
    )
  }

export default ExploreLayout