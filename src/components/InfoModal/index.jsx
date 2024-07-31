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
import { useCallback, useState } from "react"
import { useFocusEffect } from "@react-navigation/native"

import { db } from "../../services/firebaseConfig"
import { collection, doc, serverTimestamp, setDoc } from "firebase/firestore"

export default function InfoModal({ modal, hideModal }) {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  async function addInfo() {
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

  return (
    <Modal visible={modal} transparent={true} animationType="fade">
      <Container onPress={hideModal}>
        <ContentContainer>
          <Header>
            <ExitButton onPress={hideModal}>
              <FontAwesome6 name="x" size={26} color="#09090B" />
            </ExitButton>
            <Title>Informações</Title>
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

          <Button onPress={addInfo}>
            <ButtonText>Adicionar</ButtonText>
          </Button>
        </ContentContainer>
      </Container>
    </Modal>
  )
}
