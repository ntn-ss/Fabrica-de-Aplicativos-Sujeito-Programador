// hooks
import styled from 'styled-components/native'
import { getStatusBarHeight } from 'react-native-status-bar-height'

export const Container = styled.View`
  flex: 1;
  width: 100%;
  padding-top: ${0 + getStatusBarHeight()}px;
  justify-content: center;
  align-items: center;
  background-color: #121212;
`;

export const Title = styled.Text`
    color: #eee;
    font-size: 20px;
    font-weight: bold;
`

export const Name = styled.Text`
  color: ${({color}) => color};
  font-size: ${({size}) => size}px;
  font-weight: bold;
`

export const MyButton = styled.TouchableOpacity`
  background-color: #DDD;
  padding: 5px;
  border-radius: 5px;
  margin-top: 15px;
  width: 40%;
  justify-content: center;
  align-items: center;
`

export const MyButtonText = styled.Text`
  color: ${({color}) => color};
  font-size: 20px;
`