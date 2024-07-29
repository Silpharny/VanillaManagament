import { useContext } from "react"
import AppRoutes from "./app.routes"
import AuthRoutes from "./auth.routes"
import { AuthContext } from "../contexts/auth"
import { ActivityIndicator, View } from "react-native"

export default function Routes() {
  const { signed, loading } = useContext(AuthContext)

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#09090B" />
      </View>
    )
  }
  return signed ? <AppRoutes /> : <AuthRoutes />
}
