import AppRoutes from "./app.routes"
import AuthRoutes from "./auth.routes"

export default function Routes() {
  const logged = false

  if (logged) {
    return <AppRoutes />
  } else {
    return <AuthRoutes />
  }
}
