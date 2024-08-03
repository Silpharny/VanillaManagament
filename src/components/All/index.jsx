import { useNavigation } from "@react-navigation/native"
import { Button, Container, Text } from "./styles"

import { FontAwesome6 } from "@expo/vector-icons"

export default function All({ product, collections, isCollection, isProduct }) {
  const navigation = useNavigation()

  function handleProduct() {
    navigation.navigate("details", { product: product })
  }

  function handleCollection() {
    navigation.navigate("products", {
      CollectionId: collections.id,
      CollectionName: collections.name,
    })
  }

  function editModel() {
    navigation.navigate("edit", { product: product })
  }

  return isProduct ? (
    <Container onPress={handleProduct}>
      <Text>{product.name}</Text>
      <Button onPress={editModel}>
        <FontAwesome6 name="circle-plus" size={32} color="#09090B" />
      </Button>
    </Container>
  ) : (
    <Container onPress={handleCollection}>
      <Text>{collections.name}</Text>
    </Container>
  )
}
