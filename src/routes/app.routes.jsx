import { createStackNavigator } from "@react-navigation/stack"

import Home from "../screens/Home"
import IsAdmin from "../screens/Home/IsAdmin"
import IsNotAdmin from "../screens/Home/IsNotAdmin"

import Add from "../screens/Inventory/Add"
import Collection from "../screens/Inventory/Collection"
import Details from "../screens/Inventory/Details"
import Edit from "../screens/Inventory/Edit"
import Products from "../screens/Inventory/Products"

const Stack = createStackNavigator()

export default function AppRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="home" component={Home} />

      <Stack.Screen name="add" component={Add} />
      <Stack.Screen name="collection" component={Collection} />
      <Stack.Screen name="details" component={Details} />
      <Stack.Screen name="edit" component={Edit} />
      <Stack.Screen name="products" component={Products} />
    </Stack.Navigator>
  )
}
