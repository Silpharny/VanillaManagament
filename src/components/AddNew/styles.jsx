import styled from "styled-components/native"

export const Container = styled.Pressable`
  flex: 1;
  align-items: center;
  justify-content: flex-end;
  background-color: rgba(0, 0, 0, 0.6);
`

export const Body = styled.View`
  width: 100%;
  height: 350px;
  background-color: #fff;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  padding: 20px;
`

export const Close = styled.Pressable`
  margin-left: 10px;
  margin-bottom: 30px;
`

export const Button = styled.Pressable`
  background-color: #09090b;
  width: 330px;
  height: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 22px;
  border-radius: 8px;
  margin-top: 20px;
  align-self: center;
`
export const Text = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
`
