import { useContext, useState } from "react"
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

import { AuthContext } from "../../contexts/auth"
import { ActivityIndicator } from "react-native"

export default function Login() {
  const [isLogin, setIsLogin] = useState(true)

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { createUser, signIn, authLoading } = useContext(AuthContext)

  function ChangeScreen() {
    setIsLogin(!isLogin)
  }

  function handleLogin() {
    if (email === "" || password === "") {
      alert("Preencha todos os campos")
      return
    }
    signIn(email, password)
  }

  function handleRegister() {
    if (name === "" || email === "" || password === "") {
      alert("Preencha todos os campos")
      return
    }
    createUser(name, email, password)
  }

  if (isLogin) {
    return (
      <Container>
        <Logo />
        <InputView>
          <Input
            placeholder="Digite seu email"
            textContentType="emailAddress"
            keyboardType="email-address"
            autoCapitalize="none"
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
            textContentType="password"
            secureTextEntry={true}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <FontAwesome name="lock" size={24} color="rgba(00, 00, 00, 0.7)" />
        </InputView>
        {authLoading ? (
          <Button>
            <ActivityIndicator color="#fff" />
          </Button>
        ) : (
          <Button onPress={handleLogin}>
            <ButtonTitle>Entrar</ButtonTitle>
          </Button>
        )}
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
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <FontAwesome name="envelope" size={24} color="rgba(00, 00, 00, 0.7)" />
      </InputView>
      <InputView>
        <Input
          placeholder="Digite sua senha"
          textContentType="password"
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <FontAwesome name="lock" size={24} color="rgba(00, 00, 00, 0.7)" />
      </InputView>
      {authLoading ? (
        <Button>
          <ActivityIndicator color="#fff" />
        </Button>
      ) : (
        <Button onPress={handleRegister}>
          <ButtonTitle>Criar Conta</ButtonTitle>
        </Button>
      )}
      <Change onPress={ChangeScreen}>
        <ChangeText>Entrar</ChangeText>
      </Change>
    </Container>
  )
}
