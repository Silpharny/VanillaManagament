import { Modal } from "react-native"
import {
  Button,
  ButtonText,
  Container,
  ContentContainer,
  ExitButton,
  Header,
  Input,
  InputView,
  Title,
} from "./styles"

import { FontAwesome6 } from "@expo/vector-icons"
import { useContext, useState } from "react"

import { db } from "../../services/firebaseConfig"
import { collection, doc, serverTimestamp, setDoc } from "firebase/firestore"

import { AuthContext } from "../../contexts/auth"

export default function AddModal({ modal, hideModal, warning, information }) {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const { user } = useContext(AuthContext)

  if (warning) {
    async function addWarning() {
      if (!title || !description) return

      await setDoc(doc(collection(db, "warning")), {
        title,
        description,
        userId: user.uid,
        autor: user.name,
        created: serverTimestamp(),
      })
      setTitle("")
      setDescription("")
      hideModal()
    }
  }

  if (information) {
    async function addInformation() {
      if (!title || !description) return

      await setDoc(doc(collection(db, "information")), {
        title,
        description,
        created: serverTimestamp(),
      })
      setTitle("")
      setDescription("")

      hideModal()
    }
  }

  return (
    <Modal visible={modal} transparent={true} animationType="fade">
      <Container onPress={hideModal}>
        <ContentContainer>
          <Header>
            <ExitButton onPress={hideModal}>
              <FontAwesome6 name="x" size={26} color="#09090B" />
            </ExitButton>
            <Title>{warning ? "Adicionar Nota" : "Adicionar Informação"}</Title>
            <Title></Title>
          </Header>
          <InputView>
            <Input
              placeholder="Título"
              height={50}
              value={title}
              onChangeText={(text) => setTitle(text)}
            />
            <Input
              placeholder="Descricão"
              height={100}
              multiline={true}
              value={description}
              onChangeText={(text) => setDescription(text)}
            />
          </InputView>

          <Button onPress={warning ? addWarning : addInformation}>
            <ButtonText>Adicionar</ButtonText>
          </Button>
        </ContentContainer>
      </Container>
    </Modal>
  )
}
