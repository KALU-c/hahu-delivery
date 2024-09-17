import { Stack } from "expo-router"

const FoodDetailLayout = () => {
  return (
    <Stack
      screenOptions={{
      }}
    >
      <Stack.Screen
        name="[id]"
        options={{
          headerShown: false,
          title: "Food Detail"
        }}
      />
    </Stack>
  )
}

export default FoodDetailLayout