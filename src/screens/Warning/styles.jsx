import styled from "styled-components/native"

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #fff;
`

export const Body = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`

export const Button = styled.Pressable`
  background-color: #09090b;
  width: 330px;
  height: 50px;
  flex-direction: row;
  align-items: center;

  padding: 0 22px;
  border-radius: 8px;
  margin-top: 20px;
  gap: 22px;
`

export const TextButton = styled.Text`
  font-size: 24px;
  font-weight: bold;

  color: #fff;
`

export const List = styled.FlatList`
  margin-top: 20px;
  padding: 0 22px;
  width: 100%;
`
