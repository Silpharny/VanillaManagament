import styled from "styled-components/native"

export const Container = styled.Pressable`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.6);
  align-items: center;
  justify-content: center;
`

export const ExitButton = styled.Pressable``

export const ContentContainer = styled.View`
  width: 90%;
  height: 400px;
  background-color: #fff;
  border-radius: 16px;
  padding: 20px;
  align-items: center;
  justify-content: space-between;
`
export const Header = styled.View`
  width: 100%;
  height: 50px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 20px;
  margin-top: 10px;
`

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`

export const InputView = styled.View``

export const Input = styled.TextInput`
  width: 330px;
  height: ${({ height }) => height + "px"};
  border-radius: 8px;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #e5e5e5;
  font-size: 18px;
`

export const ButtonText = styled.Text`
  font-size: 24px;
  font-weight: 500;
  text-align: center;
  color: #fff;
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
`
