import { useState } from "react"
import {
  Container,
  InputView,
  Input,
  Button,
  ButtonTitle,
  Change,
  ChangeText,
} from "./styles"

import Logo from "../../components/Logo"

import { FontAwesome } from "@expo/vector-icons"

export default function Login() {
  const [isLogin, setIsLogin] = useState(true)

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function ChangeScreen() {
    setIsLogin(!isLogin)
  }

  function handleLogin() {
    if (email === "" || password === "") {
      alert("Preencha todos os campos")
      return
    }

    console.log(email, password)
  }

  function handleRegister() {
    if (name === "" || email === "" || password === "") {
      alert("Preencha todos os campos")
      return
    }

    console.log(name, email, password)
  }

  if (isLogin) {
    return (
      <Container>
        <Logo />
        <InputView>
          <Input
            placeholder="Digite seu email"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <FontAwesome
            name="envelope"
            size={24}
            color="  rgba(00, 00, 00, 0.7)"
          />
        </InputView>
        <InputView>
          <Input
            placeholder="Digite sua senha"
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <FontAwesome name="lock" size={24} color="rgba(00, 00, 00, 0.7)" />
        </InputView>
        <Button onPress={handleLogin}>
          <ButtonTitle>Entrar</ButtonTitle>
        </Button>
        <Change onPress={ChangeScreen}>
          <ChangeText>Criar conta</ChangeText>
        </Change>
      </Container>
    )
  }
  return (
    <Container>
      <Logo />
      <InputView>
        <Input
          placeholder="Digite seu nome..."
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <FontAwesome name="user" size={24} color="rgba(00, 00, 00, 0.7)" />
      </InputView>
      <InputView>
        <Input
          placeholder="Digite seu email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <FontAwesome name="envelope" size={24} color="rgba(00, 00, 00, 0.7)" />
      </InputView>
      <InputView>
        <Input
          placeholder="Digite sua senha"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <FontAwesome name="lock" size={24} color="rgba(00, 00, 00, 0.7)" />
      </InputView>
      <Button onPress={handleRegister}>
        <ButtonTitle>Criar Conta</ButtonTitle>
      </Button>
      <Change onPress={ChangeScreen}>
        <ChangeText>Entrar</ChangeText>
      </Change>
    </Container>
  )
}
