import { Modal } from "react-native"
import {
  Autor,
  Container,
  ContentContainer,
  Description,
  Header,
  Title,
} from "./styles"

export default function DataView({ data, openModal, hideModal }) {
  return (
    <Modal visible={openModal} transparent={true} animationType="fade">
      <Container onPress={hideModal}>
        <ContentContainer>
          <Header>
            <Title>{data.title}</Title>
          </Header>
          {data.to && <Autor>{data.to}</Autor>}
          <Description>{data.description}</Description>
        </ContentContainer>
      </Container>
    </Modal>
  )
}
