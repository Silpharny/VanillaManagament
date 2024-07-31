import styled from "styled-components/native"

export const Container = styled.Pressable`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.6);
  align-items: center;
  justify-content: center;
`

export const ContentContainer = styled.View`
  width: 90%;
  height: 400px;
  background-color: #fff;
  border-radius: 16px;
  padding: 20px;
  align-items: center;
`

export const Header = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`
export const Autor = styled.Text`
  font-size: 16px;

  text-align: center;
  margin-top: 6px;
`

export const Description = styled.Text`
  font-size: 18px;

  text-align: center;
  margin-top: 20px;
`
