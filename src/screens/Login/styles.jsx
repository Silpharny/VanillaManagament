import styled from "styled-components/native"

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #fff;
`

export const InputView = styled.View`
  width: 330px;
  height: 48px;
  border-radius: 8px;
  margin-top: 20px;
  padding: 0 20px;
  background-color: #e5e5e5;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const Input = styled.TextInput`
  font-size: 16px;
  width: 240px;
`

export const Button = styled.TouchableOpacity`
  width: 330px;
  height: 48px;
  border-radius: 8px;
  margin-top: 20px;
  background-color: #09090b;
  align-items: center;
  justify-content: center;
`

export const ButtonTitle = styled.Text`
  font-size: 19px;
  font-weight: bold;
  color: #fff;
`

export const Change = styled.TouchableOpacity`
  width: 330px;
  align-items: center;
`

export const ChangeText = styled.Text`
  font-size: 15px;
  color: #09090b;
  margin-top: 20px;
`
