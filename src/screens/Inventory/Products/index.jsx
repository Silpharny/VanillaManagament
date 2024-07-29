import { useEffect, useState } from "react"
import Header from "../../../components/Header"
import SearchBar from "../../../components/SearchBar"
import { Body, Container, ProductList, Tag, Text, Total } from "./styles"
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore"
import { db } from "../../../services/firebaseConfig"
import AllProducts from "../../../components/AllProducts"

export default function Products({ route }) {
  const { CollectionId, CollectionName } = route.params

  const [allModels, setAllModels] = useState([])

  const [allInventory, setAllInventory] = useState([])

  useEffect(() => {
    async function getModels() {
      const q = query(
        collection(db, "models"),
        where("collection", "==", CollectionId)
      )

      const querySnapshot = await getDocs(q)

      const modelList = []
      querySnapshot.forEach((doc) => {
        modelList.push({ ...doc.data(), id: doc.id })
      })

      setAllModels(modelList)
    }
    getModels()

    async function getHistorical() {
      const q = query(
        collection(db, "inventory"),
        where("collection", "==", CollectionId)
      )

      const querySnapshot = await getDocs(q)

      const data = []
      querySnapshot.forEach((doc) => {
        data.push(doc.data())
      })

      setAllInventory(data)
    }

    getHistorical()

    return () => {}
  }, [])

  return (
    <Container>
      <Header title={CollectionName} />
      <SearchBar />
      <Total>
        <Text>Total em estoque</Text>
        <Text>{allInventory.length}</Text>
      </Total>
      <Body>
        <Tag>Todos os modelos</Tag>
        <ProductList
          data={allModels}
          keyExtractor={(item) => item.uid}
          renderItem={({ item }) => <AllProducts product={item} />}
        />
      </Body>
    </Container>
  )
}
