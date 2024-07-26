import Login from "../screens/Login"

import { createStackNavigator } from "@react-navigation/stack"

const Stack = createStackNavigator()

export default function AuthRoutes() {
  ;<Stack.Navigator>
    <Stack.Screen name="login" component={Login} />
  </Stack.Navigator>
}
