import { Container, Input } from "./styles"

import { FontAwesome6 } from "@expo/vector-icons"

export default function SearchBar() {
  return (
    <Container>
      <FontAwesome6
        name="magnifying-glass"
        size={18}
        color=" rgba(9, 9, 11, 0.5)"
      />
      <Input placeholder="Pesquisar" />
    </Container>
  )
}
