import { useCallback, useState } from "react"
import {
  Body,
  Button,
  ButtonView,
  Container,
  Input,
  PickerArea,
  TextButton,
} from "./styles"
import Header from "../../../components/Header"
import { FontAwesome6 } from "@expo/vector-icons"
import { Picker } from "@react-native-picker/picker"

import {
  collection,
  doc,
  getDocs,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore"
import { db } from "../../../services/firebaseConfig"
import { useFocusEffect, useNavigation } from "@react-navigation/native"

import { format } from "date-fns"

export default function Edit({ route }) {
  const { product } = route.params
  const navigation = useNavigation()

  const [amount, setAmount] = useState()

  const [selectedStatus, setSelectedStatus] = useState()

  useFocusEffect(
    useCallback(() => {
      async function getTotal() {
        const q = query(
          collection(db, "inventory"),
          where("ProductUid", "==", product.id)
        )

        const querySnapshot = await getDocs(q)

        updateModels(querySnapshot)
      }
      getTotal()

      async function updateModels(querySnapshot) {
        const desData = []
        const corData = []
        const finData = []

        querySnapshot.forEach((doc) => {
          if (doc.data().status === "Desmontado") {
            desData.push(doc.data())
          }

          if (doc.data().status === "Cortado na oficina") {
            corData.push(doc.data())
          }

          if (doc.data().status === "Finalizado") {
            finData.push(doc.data())
          }
        })

        const totalDes = desData.reduce((acc, item) => {
          return acc + item.amount
        }, 0)

        const totalCor = corData.reduce((acc, item) => {
          return acc + item.amount
        }, 0)

        const totalFin = finData.reduce((acc, item) => {
          return acc + item.amount
        }, 0)

        constModelRef = doc(db, "models", product.uid)

        await updateDoc(constModelRef, {
          desmontado: totalDes,
          cortadoOficina: totalCor,
          finalizado: totalFin,
          total: totalDes + totalCor + totalFin,
          timestamp: serverTimestamp(),
        })
      }

      return () => {
        getTotal()
      }
    }, [])
  )

  async function entrance() {
    if (!amount || !selectedStatus) {
      alert("Preencha todos os campos")
      return
    }
    let amountInt = parseInt(amount)

    const docRef = doc(collection(db, "inventory"))

    await setDoc(docRef, {
      uid: docRef.id,
      ProductUid: product.uid,
      collection: product.collection,
      name: product.name,
      amount: amountInt,
      status: selectedStatus,
      createAt: new Date(),
      date: format(new Date(), "MM/dd/yyyy"),
    }).then(() => {
      navigation.goBack()
      setAmount("")
      setSelectedStatus("")
    })
  }
  async function exit() {
    if (!amount || !selectedStatus) {
      alert("Preencha todos os campos")
      return
    }
    let amountInt = parseInt(amount * -1)

    const docRef = doc(collection(db, "inventory"))

    await setDoc(docRef, {
      uid: docRef.id,
      ProductUid: product.uid,
      collection: product.collection,
      name: product.name,
      amount: amountInt,
      status: selectedStatus,
      createAt: new Date(),
      date: format(new Date(), "dd/MM/yyyy"),
    }).then(() => {
      navigation.goBack()
      setAmount("")
      setSelectedStatus("")
    })
  }

  return (
    <Container>
      <Header title={product.name} />
      <Body>
        <Input
          placeholder="Quantidade"
          keyboardType="numeric"
          value={amount}
          onChangeText={(text) => setAmount(text)}
        />
        <PickerArea>
          <Picker
            selectedValue={selectedStatus}
            onValueChange={setSelectedStatus}
          >
            <Picker.Item
              label="Selecione uma opção..."
              enabled={false}
              color=" rgba(9, 9, 11, 0.5)"
            />
            <Picker.Item label="Desmontado" value="Desmontado" />
            <Picker.Item
              label="Cortado na oficina"
              value="Cortado na oficina"
            />
            <Picker.Item label="Finalizado" value="Finalizado" />
          </Picker>
        </PickerArea>
        <ButtonView>
          <Button onPress={entrance}>
            <FontAwesome6 name="circle-plus" size={24} color="#fff" />
            <TextButton>Entrada</TextButton>
          </Button>
          <Button color="#D61212" onPress={exit}>
            <FontAwesome6 name="circle-minus" size={24} color="#fff" />
            <TextButton>Saída</TextButton>
          </Button>
        </ButtonView>
      </Body>
    </Container>
  )
}
