import { useContext } from "react"
import { AuthContext } from "../../contexts/auth"
import IsAdmin from "./IsAdmin"
import IsNotAdmin from "./IsNotAdmin"

export default function Home() {
  const { user } = useContext(AuthContext)

  return user.isAdmin ? <IsAdmin /> : <IsNotAdmin />
}
