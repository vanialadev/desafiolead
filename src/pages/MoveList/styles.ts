import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  margin-top: 20px;
  width: 100%;
`;

export const Card = styled.TouchableOpacity`
  height: 150px;
  width: 100%;
  border-radius: 15px;
  background: #312e38;
  flex-direction: row;
  margin-bottom: 20px;
`;

export const Poster = styled.Image`
  width: 100px;
  height: 150px;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #f4ede8;
  margin: 0 6px;
  font-size: 18px;
  flex-wrap: wrap;
`;

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
