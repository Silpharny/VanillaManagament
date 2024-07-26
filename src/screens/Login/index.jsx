import { useState } from "react"
import { Container } from "./styles"

export default function Login() {
  const [isRegister, setIsRegister] = useState(false)

  if (isRegister) {
    return (
      <Container>
        <h1>Register</h1>
      </Container>
    )
  } else {
    return (
      <Container>
        <h1>Login</h1>
      </Container>
    )
  }
}
