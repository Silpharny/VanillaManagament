import { createStackNavigator } from "@react-navigation/stack"
import Login from "../screens/Login"

const Stack = createStackNavigator()

export default function AuthRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="login" component={Login} />
    </Stack.Navigator>
  )
}
