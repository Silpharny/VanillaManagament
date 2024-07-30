import { Container, Name } from "./styles"

import { useNavigation } from "@react-navigation/native"

export default function SearchList({ data }) {
  const navigation = useNavigation()

  return (
    <Container
      onPress={() => {
        navigation.navigate("details", {
          title: data.name,
          product: data,
        })
      }}
    >
      <Name>{data.name}</Name>
    </Container>
  )
}
