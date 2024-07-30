import { useNavigation } from "@react-navigation/native"
import { Button, ButtonView, Container, TextButton } from "./styles"
import { FontAwesome } from "@expo/vector-icons"
import { useContext } from "react"
import { AuthContext } from "../../../contexts/auth"

export default function IsNotAdmin() {
  const navigation = useNavigation()

  const { signOutUser } = useContext(AuthContext)

  return (
    <Container>
      <Button>
        <TextButton>Ponto</TextButton>
        <FontAwesome name="clock-o" size={24} color="#fff" />
      </Button>
      <Button>
        <TextButton>Avisos</TextButton>
        <FontAwesome name="bell-o" size={24} color="#fff" />
      </Button>
      <Button>
        <TextButton>Informações</TextButton>
        <FontAwesome name="info" size={24} color="#fff" />
      </Button>

      <Button onPress={() => navigation.navigate("collection")}>
        <TextButton>Estoque</TextButton>
        <FontAwesome name="archive" size={24} color="#fff" />
      </Button>

      <ButtonView>
        <Button onPress={signOutUser}>
          <TextButton>Sair da conta</TextButton>
          <FontAwesome name="sign-out" size={24} color="#fff" />
        </Button>
      </ButtonView>
    </Container>
  )
}
