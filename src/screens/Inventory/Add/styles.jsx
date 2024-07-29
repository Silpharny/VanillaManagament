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
export const Input = styled.TextInput`
  width: 330px;
  height: 48px;
  border-radius: 8px;
  margin-top: 20px;
  padding: 0 20px;
  background-color: #e5e5e5;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
`

export const PickerArea = styled.View`
  width: 330px;
  height: 48px;
  border-radius: 8px;
  margin-top: 20px;
  background-color: #e5e5e5;
`

export const Button = styled.Pressable`
  background-color: #09090b;
  width: 330px;
  height: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0 22px;
  border-radius: 8px;
  margin-top: 20px;
`

export const Text = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
`
