import styled from "styled-components/native"

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #fff;
`

export const Body = styled.View`
  flex: 1;
  justify-content: center;
`

export const CollectionList = styled.FlatList`
  margin-top: 60px;
`

export const Text = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
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

export const Add = styled.Pressable`
  position: absolute;
  bottom: 46px;
  right: 46px;
`
