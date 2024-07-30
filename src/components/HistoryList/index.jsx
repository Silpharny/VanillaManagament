import { Container, Info, Text } from "./styles"

export default function HistoryList({ data }) {
  return (
    <Container>
      <Info>
        <Text>{data.amount}</Text>
        <Text>{data.date}</Text>

        <Text>{data.status}</Text>
      </Info>
    </Container>
  )
}
