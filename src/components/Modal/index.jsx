import { ActivityIndicator, Modal } from "react-native"
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
  PickerArea,
} from "./styles"

import { FontAwesome6 } from "@expo/vector-icons"
import { useContext, useState } from "react"

import { db } from "../../services/firebaseConfig"
import { collection, doc, serverTimestamp, setDoc } from "firebase/firestore"

import { AuthContext } from "../../contexts/auth"
import { Picker } from "@react-native-picker/picker"

export default function AddModal({
  modal,
  hideModal,
  warning,
  information,
  userList,
}) {
  const [loading, setLoading] = useState(false)
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [username, setUsername] = useState("")
  const [selectedUser, setSelectedUser] = useState()

  const { user } = useContext(AuthContext)

  if (warning) {
    async function addWarning() {
      if (!title || !description) return

      setLoading(true)

      await setDoc(doc(collection(db, "warning")), {
        title,
        description,
        userId: user.uid,
        to: user.name,
        from: username.name,
        created: serverTimestamp(),
      })
      setTitle("")
      setDescription("")
      hideModal()

      setLoading(false)
    }
  }

  if (information) {
    async function addInformation() {
      if (!title || !description) return

      setLoading(true)

      await setDoc(doc(collection(db, "information")), {
        title,
        description,
        created: serverTimestamp(),
      })
      setTitle("")
      setDescription("")
      hideModal()
      setLoading(false)
    }
  }
  return (
    <Modal visible={modal} transparent={true} animationType="fade">
      <Container>
        <ContentContainer>
          <Header>
            <ExitButton onPress={hideModal}>
              <FontAwesome6 name="x" size={26} color="#09090B" />
            </ExitButton>
            <Title>{warning ? "Aviso" : "Informação"}</Title>
            <Title></Title>
          </Header>
          <InputView>
            <Input
              placeholder="Título"
              height={50}
              value={title}
              onChangeText={(text) => setTitle(text)}
            />
            {warning && (
              <PickerArea>
                <Picker
                  selectedValue={selectedUser}
                  onValueChange={(itemValue, itemIndex) => {
                    setSelectedUser(itemValue)
                    setUsername(
                      userList.filter((users) => users.id === itemValue)[0]
                    )
                    console.log(username)
                  }}
                >
                  <Picker.Item
                    label="Para quem é o aviso?"
                    enabled={false}
                    color=" rgba(9, 9, 11, 0.5)"
                  />

                  {userList.map((user) => (
                    <Picker.Item
                      key={user.id}
                      label={user.name}
                      value={user.id}
                    />
                  ))}
                </Picker>
              </PickerArea>
            )}
            <Input
              placeholder="Descricão"
              height={100}
              multiline={true}
              value={description}
              onChangeText={(text) => setDescription(text)}
            />
          </InputView>
          {loading ? (
            <Button>
              <ActivityIndicator color="#fff" />
            </Button>
          ) : (
            <Button onPress={warning ? addWarning : addInformation}>
              <ButtonText>Adicionar</ButtonText>
            </Button>
          )}
        </ContentContainer>
      </Container>
    </Modal>
  )
}
