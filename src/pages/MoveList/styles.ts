import styled from 'styled-components/native';

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
  color: #f4ede8;
  margin: 6px 12px;
  font-size: 18px;
  flex-wrap: wrap;
`;
