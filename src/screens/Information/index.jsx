import { Body, Button, Container, List, TextButton } from "./styles"

import Header from "../../components/Header"
import InfoItem from "../../components/InfoItem"

import { FontAwesome6 } from "@expo/vector-icons"
import { useCallback, useLayoutEffect, useState } from "react"
import InfoModal from "../../components/InfoModal"
import { useFocusEffect } from "@react-navigation/native"
import { collection, getDocs, query } from "firebase/firestore"
import { db } from "../../services/firebaseConfig"

export default function Information() {
  const [modal, setModal] = useState(false)

  const [data, setData] = useState([])

  useFocusEffect(
    useCallback(() => {
      async function getData() {
        const q = query(collection(db, "information"))

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
      <Header title="Informações" />
      <Body>
        <Button onPress={handleModal}>
          <FontAwesome6 name="circle-plus" size={26} color="#fff" />
          <TextButton>Adicionar</TextButton>
        </Button>
        <List data={data} renderItem={({ item }) => <InfoItem data={item} />} />
      </Body>
      <InfoModal modal={modal} hideModal={handleModal} />
    </Container>
  )
}
