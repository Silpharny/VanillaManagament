import styled from "styled-components/native"

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #fff;
`

export const ContainerInformation = styled.View`
  flex: 1;
  align-items: center;
  margin-top: 20px;
`

export const Total = styled.View`
  background-color: #09090b;
  width: 330px;
  height: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 22px;
  border-radius: 8px;
  margin-top: 20px;
`
export const Text = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
`
export const Body = styled.View`
  width: 100%;

  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  padding: 0 22px;
`

export const Tag = styled.Text`
  font-size: 16px;
  color: #000;
  font-weight: 500;
  align-self: flex-start;
  margin-left: 12px;
`

export const ProductList = styled.FlatList``

export const SearchArea = styled.View`
  background-color: #e5e5e5;
  width: 330px;
  height: 48px;
  border-radius: 8px;
  margin-top: 36px;
  padding: 0 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const SearchInput = styled.TextInput`
  font-size: 20px;
  margin-left: 20px;
  flex: 1;
`
export const List = styled.FlatList`
  background-color: rgba(0, 0, 0, 0.9);
  margin-top: 10px;
  width: 100%;
  height: 100%;
`
