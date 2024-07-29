import styled from "styled-components/native"

export const Container = styled.View`
  flex: 1;

  align-items: center;
  background-color: #fff;
`

export const DetailsView = styled.View`
  align-items: center;

  justify-content: center;
  margin-top: 40px;
  padding: 0 22px;
  width: 100%;
`

export const Info = styled.View`
  background-color: #e5e5e5;
  width: 330px;
  height: 50px;
  border-radius: 8px;
  margin-top: 20px;
  padding: 0 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const Text = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #09090b;
`

export const Tag = styled.Text`
  font-size: 16px;
  color: #000;
  font-weight: 500;
  align-self: flex-start;
  margin-bottom: 10px;
  margin-left: 16px;
`

export const HistoricalList = styled.FlatList`
  margin-top: 20px;
`
