import { useState } from "react"
import DescriptionModal from "../DescriptionModal"
import { Container, Title } from "./styles"

export default function WarningItem({ data }) {
  const [isOpen, setIsOpen] = useState(false)

  function modal() {
    setIsOpen(!isOpen)
  }

  return (
    <Container onPress={modal}>
      <Title>{data.title}</Title>
      <DescriptionModal data={data} openModal={isOpen} hideModal={modal} />
    </Container>
  )
}
