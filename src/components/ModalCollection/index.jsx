import { Modal } from "react-native"
import { Body, Button, Close, Container, Text } from "./styles"
import { FontAwesome6 } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"

export default function ModalCollection({
  handleModal,
  modal,
  collectionList,
}) {
  const navigation = useNavigation()

  function addModel() {
    navigation.navigate("add", {
      isModel: true,
      collectionList: collectionList,
    })
    handleModal()
  }
  function addCollection() {
    navigation.navigate("add", { isModel: false })
    handleModal()
  }

  return (
    <Modal visible={modal} animationType="fade" transparent={true}>
      <Container>
        <Body>
          <Close onPress={handleModal}>
            <FontAwesome6 name="x" size={26} color="#09090B" />
          </Close>

          <Button onPress={addModel}>
            <Text>Adicionar Modelo</Text>
            <FontAwesome6 name="glasses" size={26} color="#fff" />
          </Button>

          <Button onPress={addCollection}>
            <Text>Adicionar Coleção</Text>
            <FontAwesome6 name="server" size={26} color="#fff" />
          </Button>
        </Body>
      </Container>
    </Modal>
  )
}
