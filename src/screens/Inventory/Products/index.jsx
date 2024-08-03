import { useCallback, useEffect, useState } from "react"
import Header from "../../../components/Header"

import {
  Body,
  Container,
  ContainerInformation,
  List,
  ProductList,
  SearchArea,
  SearchInput,
  Tag,
  Text,
  Total,
} from "./styles"
import {
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  query,
  where,
} from "firebase/firestore"
import { db } from "../../../services/firebaseConfig"

import Loading from "../../../components/Loading"
import { useFocusEffect } from "@react-navigation/native"
import { FontAwesome6 } from "@expo/vector-icons"
import SearchList from "../../../components/SearchList"
import All from "../../../components/All"

export default function Products({ route }) {
  const { CollectionId, CollectionName } = route.params

  const isProduct = true

  const [allModels, setAllModels] = useState([])

  const [allInventory, setAllInventory] = useState([])

  const [amountTotal, setAmountTotal] = useState(0)

  const [loading, setLoading] = useState(true)

  const [input, setInput] = useState("")
  const [models, setModels] = useState([])

  useFocusEffect(
    useCallback(() => {
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
        amountTotal(data)
        getModels()
        setLoading(false)
      }

      function amountTotal(list) {
        let totalProduct = []
        list.map((item) => {
          totalProduct.push(item.amount)
        })

        totalProduct = totalProduct.reduce((acc, item) => {
          return acc + item
        }, 0)
        setAmountTotal(totalProduct)
      }

      getHistorical()

      return () => {}
    }, [])
  )

  useEffect(() => {
    if (input === "" || input === undefined) {
      setModels([])
      return
    }

    function subscriber() {
      const docRef = collection(db, "models")
      const queryModel = query(
        docRef,
        where("tag", ">=", input),
        where("tag", ">=", input + "\uf8ff")
      )

      onSnapshot(queryModel, (snapShot) => {
        const modelList = []
        snapShot.forEach((doc) => {
          modelList.push({
            ...doc.data(),
            id: doc.id,
          })
          setModels(modelList)
        })
      })
    }

    return () => subscriber()
  }, [input])

  if (loading) {
    return <Loading />
  }

  return (
    <Container>
      <Header title={CollectionName} />
      <SearchArea>
        <FontAwesome6
          name="magnifying-glass"
          size={18}
          color=" rgba(9, 9, 11, 0.5)"
        />
        <SearchInput
          placeholder="Pesquisar"
          value={input}
          onChangeText={(text) => setInput(text)}
        />
      </SearchArea>
      {input.length > 2 && (
        <List
          data={models}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return <SearchList data={item} />
          }}
        />
      )}
      <ContainerInformation>
        <Total>
          <Text>Total em estoque</Text>
          <Text>{amountTotal}</Text>
        </Total>
        <Body>
          <Tag>Todos os modelos</Tag>
          <ProductList
            data={allModels}
            keyExtractor={(item) => item.uid}
            renderItem={({ item }) => (
              <All product={item} isProduct={isProduct} />
            )}
          />
        </Body>
      </ContainerInformation>
    </Container>
  )
}
