import { useFocusEffect } from "@react-navigation/native"
import Header from "../../../components/Header"
import {
  Container,
  DetailsView,
  HistoricalList,
  Info,
  Tag,
  Text,
} from "./styles"
import { useCallback, useState } from "react"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../../services/firebaseConfig"

export default function Details({ route }) {
  const { product } = route.params

  const [allData, setAllData] = useState([])

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

        setAllData(data)
      }
      getHistorical()

      return () => {}
    }, [])
  )

  return (
    <Container>
      <Header title={product.name} />

      {/* Transformar em uma lista de cards */}
      <DetailsView>
        <Info>
          <Text>Desmontado</Text>
          <Text>
            {allData.filter((item) => item.status === "Desmontado").length}
          </Text>
        </Info>
        <Info>
          <Text>Cortado na oficina</Text>
          <Text>
            {
              allData.filter((item) => item.status === "Cortado na oficina")
                .length
            }
          </Text>
        </Info>
        <Info>
          <Text>Finalizados</Text>
          <Text>
            {allData.filter((item) => item.status === "Finalizado").length}
          </Text>
        </Info>
        <Info>
          <Text>Total</Text>
          <Text>{allData.length}</Text>
        </Info>
      </DetailsView>

      <DetailsView>
        <Tag>Histórico</Tag>
        <HistoricalList />
      </DetailsView>
    </Container>
  )
}
