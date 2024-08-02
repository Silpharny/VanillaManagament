import { useCallback, useState } from "react"
import { Body, Container, Text, Total, Add, CollectionList } from "./styles"
import { StatusBar } from "react-native"
import { FontAwesome6 } from "@expo/vector-icons"
import Header from "../../../components/Header"

import { useFocusEffect } from "@react-navigation/native"
import AddNew from "../../../components/AddNew"
import { collection, getDocs, query } from "firebase/firestore"
import { db } from "../../../services/firebaseConfig"
import AllCollections from "../../../components/AllCollections"
import Loading from "../../../components/Loading"

export default function Collection() {
  const [modal, setModal] = useState(false)

  const [loading, setLoading] = useState(true)

  const [collectionList, setCollectionList] = useState()

  const [modelList, setModelList] = useState([])

  const [amountTotal, setAmountTotal] = useState(0)

  useFocusEffect(
    useCallback(() => {
      async function getCollections() {
        const collections = await getDocs(collection(db, "collections"))

        const collectionsData = []
        collections.forEach((doc) => {
          collectionsData.push({ ...doc.data(), id: doc.id })
        })

        setCollectionList(collectionsData)
        setLoading(false)
      }
      getCollections()

      async function getModels() {
        const q = query(collection(db, "models"))

        const querySnapshot = await getDocs(q)

        const list = []
        querySnapshot.forEach((doc) => {
          list.push(doc.data())
        })

        setModelList(list)
        amountTotal(list)
      }
      getModels()

      function amountTotal(list) {
        let totalProduct = []
        list.map((item) => {
          totalProduct.push(
            item.cortadoOficina + item.desmontado + item.finalizado
          )
        })

        totalProduct = totalProduct.reduce((acc, item) => {
          return acc + item
        }, 0)
        setAmountTotal(totalProduct)
      }
    }, [])
  )

  function handleModal() {
    setModal(!modal)
  }

  if (loading) {
    return <Loading />
  }

  return (
    <Container>
      <StatusBar barStyle="default" />
      <Header title="Coleções" />

      <Total>
        <Text>Total em estoque</Text>
        <Text>{amountTotal}</Text>
      </Total>
      <Body>
        {loading ? (
          <Loading />
        ) : (
          <CollectionList
            data={collectionList}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <AllCollections collections={item} />}
          />
        )}
      </Body>
      <Add onPress={() => handleModal()}>
        <FontAwesome6 name="circle-plus" size={52} color="#09090B" />
      </Add>
      <AddNew
        modal={modal}
        collectionList={collectionList}
        handleModal={() => setModal(!modal)}
      />
    </Container>
  )
}
