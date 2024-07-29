import { useCallback, useState } from "react"
import { Body, Container, Text, Total, Add, CollectionList } from "./styles"
import { StatusBar } from "react-native"
import { FontAwesome6 } from "@expo/vector-icons"
import Header from "../../../components/Header"
import SearchBar from "../../../components/SearchBar"
import { useFocusEffect, useNavigation } from "@react-navigation/native"
import ModalCollection from "../../../components/ModalCollection"
import { collection, getDocs, query } from "firebase/firestore"
import { db } from "../../../services/firebaseConfig"
import AllCollections from "../../../components/AllCollections"
import Loading from "../../../components/Loading"

export default function Collection() {
  const navigation = useNavigation()
  const [modal, setModal] = useState(false)

  const [loading, setLoading] = useState(true)

  const [collectionList, setCollectionList] = useState()

  const [modelList, setModelList] = useState([])

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

        const modelList = []
        querySnapshot.forEach((doc) => {
          modelList.push(doc.data())
        })

        setModelList(modelList)
      }
      getModels()
    }, [])
  )

  function handleModal() {
    setModal(!modal)
  }
  return (
    <Container>
      <StatusBar barStyle="default" />
      <Header title="Coleções" />
      <SearchBar />
      <Total>
        <Text>Total em estoque</Text>
        <Text>{modelList?.length}</Text>
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
      <ModalCollection
        modal={modal}
        collectionList={collectionList}
        handleModal={() => setModal(!modal)}
      />
    </Container>
  )
}
