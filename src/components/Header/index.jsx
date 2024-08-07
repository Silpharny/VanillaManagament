import { Link, useNavigation } from "@react-navigation/native"
import { Button, Container, Title } from "./styles"
import { FontAwesome6 } from "@expo/vector-icons"

export default function Header({ title }) {
  const navigation = useNavigation()

  return (
    <Container>
      <Button onPress={() => navigation.goBack()}>
        <FontAwesome6 name="circle-chevron-left" size={36} color="#09090B" />
      </Button>
      <Title>{title}</Title>
    </Container>
  )
}
