import { useState } from "react"

import { Container, Title } from "./styles"
import DataView from "../DataView"

export default function DataItem({ data }) {
  const [isOpen, setIsOpen] = useState(false)

  function modal() {
    setIsOpen(!isOpen)
  }

  return (
    <Container onPress={modal}>
      <Title>{data.title}</Title>
      <Title>{data.from}</Title>
      <DataView data={data} openModal={isOpen} hideModal={modal} />
    </Container>
  )
}
