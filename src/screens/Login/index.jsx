import { useState } from "react"
import { Container, Text } from "./styles"
import { auth, db } from "../../services/firebaseConfig"
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth"

export default function Login() {
  const [isRegister, setIsRegister] = useState(false)

  function handleRegister() {
    const newAuth = auth
    const provider = new GoogleAuthProvider()
    signInWithPopup(newAuth, provider).then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result)
      const token = credential.accessToken
      // The signed-in user info.
      const user = result.user
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    })
  }

  if (isRegister) {
    return (
      <Container>
        <Text>Register</Text>
      </Container>
    )
  } else {
    return (
      <Container>
        <Text>Login</Text>
      </Container>
    )
  }
}
