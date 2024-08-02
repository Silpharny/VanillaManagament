import { useState } from "react"

import { Container, Title } from "./styles"
import DataViewModal from "../DescriptionModal"

export default function DataItem({ data }) {
  const [isOpen, setIsOpen] = useState(false)

  function modal() {
    setIsOpen(!isOpen)
  }

  return (
    <Container onPress={modal}>
      <Title>{data.title}</Title>
      <DataViewModal data={data} openModal={isOpen} hideModal={modal} />
    </Container>
  )
}
