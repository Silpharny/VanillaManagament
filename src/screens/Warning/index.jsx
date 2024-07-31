import { Body, Button, Container, List, TextButton } from "./styles"

import Header from "../../components/Header"

import { FontAwesome6 } from "@expo/vector-icons"
import { useCallback, useState } from "react"

import { useFocusEffect } from "@react-navigation/native"
import { collection, getDocs, query } from "firebase/firestore"
import { db } from "../../services/firebaseConfig"
import WarningModal from "../../components/WarningModal"
import WarningItem from "../../components/WarningItem"

export default function Warning() {
  const [modal, setModal] = useState(false)

  const [data, setData] = useState([])

  useFocusEffect(
    useCallback(() => {
      async function getData() {
        const q = query(collection(db, "warning"))

        const querySnapshot = await getDocs(q)

        const list = []
        querySnapshot.forEach((doc) => {
          list.push(doc.data())
        })

        setData(list)
      }

      getData()

      return () => {}
    }, [modal])
  )

  function handleModal() {
    setModal(!modal)
  }

  return (
    <Container>
      <Header title="Avisos" />
      <Body>
        <Button onPress={handleModal}>
          <FontAwesome6 name="circle-plus" size={26} color="#fff" />
          <TextButton>Adicionar</TextButton>
        </Button>
        <List
          data={data}
          renderItem={({ item }) => <WarningItem data={item} />}
        />
      </Body>
      <WarningModal modal={modal} hideModal={handleModal} />
    </Container>
  )
}
