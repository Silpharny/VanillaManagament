import { Body, Button, Container, Input, PickerArea, Text } from "./styles"
import Header from "../../../components/Header"
import { Picker } from "@react-native-picker/picker"
import { useState } from "react"

import { db } from "../../../services/firebaseConfig"
import { setDoc, doc, collection } from "firebase/firestore"
import { useNavigation } from "@react-navigation/native"

export default function Add({ route }) {
  const { isModel, collectionList } = route.params

  const navigation = useNavigation()

  const [modelName, setModelName] = useState("")
  const [tag, setTag] = useState("")
  const [selectedCollection, setSelectedCollection] = useState()

  async function createModel() {
    if (!modelName || !tag) {
      alert("Preencha todos os campos")
      return
    }

    if (!selectedCollection) {
      alert("Escolha uma coleção")
      return
    }

    const newModel = doc(collection(db, "models"))

    await setDoc(newModel, {
      uid: newModel.id,
      name: modelName,
      tag: tag,
      collection: selectedCollection,
      cortadoOficina: 0,
      desmontado: 0,
      finalizado: 0,
      total: 0,
    }).then(() => {
      setModelName("")
      setTag("")
      navigation.goBack()
    })
  }

  if (isModel) {
    return (
      <Container>
        <Header title="Adicionar Modelo" />
        <Body>
          <Input
            placeholder="Nome do Modelo"
            value={modelName}
            onChangeText={(text) => setModelName(text)}
          />
          <PickerArea>
            <Picker
              selectedValue={selectedCollection}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedCollection(itemValue)
              }
            >
              <Picker.Item
                label={
                  collectionList.length === 0
                    ? "Crie uma coleção"
                    : "Selecione uma coleção"
                }
                enabled={false}
                color=" rgba(9, 9, 11, 0.5)"
              />

              {collectionList.map((collection) => (
                <Picker.Item
                  key={collection.id}
                  label={collection.name}
                  value={collection.id}
                />
              ))}
            </Picker>
          </PickerArea>
          <Input
            placeholder="Tag"
            value={tag}
            onChangeText={(text) => setTag(text)}
          />

          <Button onPress={createModel}>
            <Text>Adicionar Modelo</Text>
          </Button>
        </Body>
      </Container>
    )
  }

  const [collectionName, setCollectionName] = useState("")

  async function creteCollection() {
    if (!collectionName) {
      alert("Ops! Faltou o nome da coleção")
      return
    }

    const newCollection = doc(collection(db, "collections"))

    await setDoc(newCollection, {
      uid: newCollection.id,
      name: collectionName,
    }).then(() => {
      setCollectionName("")
      navigation.goBack()
    })
  }

  if (!isModel) {
    return (
      <Container>
        <Header title="Adicionar Coleção" />
        <Body>
          <Input
            placeholder="Nome da coleção"
            value={collectionName}
            onChangeText={(text) => setCollectionName(text)}
          />
          <Button onPress={creteCollection}>
            <Text>Adicionar Coleção</Text>
          </Button>
        </Body>
      </Container>
    )
  }
}
