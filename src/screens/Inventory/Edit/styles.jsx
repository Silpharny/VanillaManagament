import styled from "styled-components/native"

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #fff;
`

export const Body = styled.View`
  width: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  padding: 0 22px;
`
export const Input = styled.TextInput`
  background-color: #e5e5e5;
  width: 100%;
  height: 50px;
  border-radius: 8px;
  margin-top: 20px;
  padding: 0 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
`

export const PickerArea = styled.View`
  width: 100%;
  height: 48px;
  border-radius: 8px;
  margin-top: 20px;

  background-color: #e5e5e5;
`

export const ButtonView = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`

export const Button = styled.Pressable`
  background-color: ${({ color }) => color || "#12D653"};
  width: 160px;
  height: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 22px;
  border-radius: 8px;
`

export const TextButton = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
`
