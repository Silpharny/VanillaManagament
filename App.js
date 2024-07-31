import { NavigationContainer } from "@react-navigation/native"
import Routes from "./src/routes/routes"
import AuthProvider from "./src/contexts/auth"
import { StatusBar } from "react-native"

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar barStyle="default" />
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  )
}
