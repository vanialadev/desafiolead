import styled from 'styled-components/native';
import {getBottomSpace} from 'react-native-iphone-x-helper';

export const ButtonsPages = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px ${16 + getBottomSpace()}px;
`;
export const ButtonPages = styled.TouchableOpacity`
  border-radius: 10px;
  width: 100px;
  height: 40px;
  background: #e50914;
  justify-content: center;
  align-items: center;
`;
export const ButtonSearchPages = styled.TouchableOpacity`
  border-radius: 10px;
  width: 100px;
  height: 40px;
  margin-left: 20px;
  background: #e50914;
  justify-content: center;
  align-items: center;
`;

export const ButtonPagesText = styled.Text`
  color: #fff;
  font-size: 15px;
`;
