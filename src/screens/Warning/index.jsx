import { Body, Button, Container, List, TextButton } from "./styles"

import Header from "../../components/Header"

import { FontAwesome6 } from "@expo/vector-icons"
import { useCallback, useState } from "react"

import { useFocusEffect } from "@react-navigation/native"
import { collection, getDocs, query } from "firebase/firestore"
import { db } from "../../services/firebaseConfig"

import DataItem from "../../components/DataItem"
import AddModal from "../../components/Modal"

export default function Warning() {
  const [modal, setModal] = useState(false)

  const [data, setData] = useState([])

  const [userList, setUserList] = useState([])

  const warning = true

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
        getUsers()
      }

      getData()

      async function getUsers() {
        const collections = await getDocs(collection(db, "users"))

        const userData = []
        collections.forEach((doc) => {
          userData.push({ id: doc.data().uid, name: doc.data().name })
        })

        setUserList(userData)
      }

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
        <List data={data} renderItem={({ item }) => <DataItem data={item} />} />
      </Body>
      <AddModal
        warning={warning}
        modal={modal}
        hideModal={handleModal}
        userList={userList}
      />
    </Container>
  )
}
