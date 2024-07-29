import { Container, Text } from "./styles"

import { useNavigation } from "@react-navigation/native"

export default function AllCollections({ collections }) {
  const navigation = useNavigation()
  function handleCollection() {
    navigation.navigate("products", {
      CollectionId: collections.id,
      CollectionName: collections.name,
    })
  }

  return (
    <Container onPress={handleCollection}>
      <Text>{collections.name}</Text>
    </Container>
  )
}
