import { useFocusEffect } from "@react-navigation/native"
import Header from "../../../components/Header"
import {
  Container,
  DetailsHistory,
  DetailsView,
  HistoricalList,
  Info,
  Tag,
  Text,
} from "./styles"

import { useCallback, useState } from "react"

import { db } from "../../../services/firebaseConfig"
import { getDocs, where, query, collection } from "firebase/firestore"
import HistoryList from "../../../components/HistoryList"
import Loading from "../../../components/Loading"

export default function Details({ route }) {
  const { product } = route.params

  const [allModel, setAllModel] = useState([])

  const [modelAllInfo, setModelAllInfo] = useState()

  const [loading, setLoading] = useState(true)

  useFocusEffect(
    useCallback(() => {
      async function getHistorical() {
        const q = query(
          collection(db, "inventory"),
          where("ProductUid", "==", product.id)
        )

        const querySnapshot = await getDocs(q)

        const data = []

        querySnapshot.forEach((doc) => {
          data.push(doc.data())
        })

        setAllModel(data)
        getModels()
      }
      getHistorical()

      async function getModels() {
        const q = query(
          collection(db, "models"),
          where("collection", "==", product.collection)
        )

        const querySnapshot = await getDocs(q)

        const modelInfo = []
        querySnapshot.forEach((doc) => {
          modelInfo.push({
            desmontado: doc.data().desmontado,
            cortadoOficina: doc.data().cortadoOficina,
            finalizado: doc.data().finalizado,
            total: doc.data().total,
            id: doc.id,
          })
        })

        setModelAllInfo(modelInfo[modelInfo.length - 1])
        setLoading(false)
      }
    }, [])
  )

  if (loading) {
    return <Loading />
  }

  return (
    <Container>
      <Header title={product.name} />

      <DetailsView>
        <Info>
          <Text>Desmontado</Text>
          <Text>{modelAllInfo.desmontado}</Text>
        </Info>
        <Info>
          <Text>Cortado na oficina</Text>
          <Text>{modelAllInfo.cortadoOficina}</Text>
        </Info>
        <Info>
          <Text>Finalizado</Text>
          <Text>{modelAllInfo.finalizado}</Text>
        </Info>
        <Info>
          <Text>Total</Text>
          <Text>{product.total}</Text>
        </Info>
      </DetailsView>

      <DetailsHistory>
        <Tag>Histórico</Tag>
        <HistoricalList
          data={allModel}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.uid}
          renderItem={({ item }) => <HistoryList data={item} />}
        />
      </DetailsHistory>
    </Container>
  )
}
