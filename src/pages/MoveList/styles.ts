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
  background: black;
  flex-direction: row;
  margin-bottom: 20px;
`;

export const Poster = styled.Image`
  /* width: 100; */
  /* height: 150; */
  width: 100px;
  height: 150px;
  /* border-radius: 15px; */
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  /* left: 5px; */
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #f4ede8;
  margin: 0 6px;
  /* padding: 2px; */
  font-size: 18px;
  /* flex: 0.8; */
  /* align-self: center; */
  flex-wrap: wrap;
`;

export const ButtonsPages = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
`;
export const ButtonPages = styled.TouchableOpacity`
  border-radius: 10px;
  width: 100px;
  height: 40px;
  /* padding: 30px; */
  background: #e50914;
  justify-content: center;
  align-items: center;
`;

export const ButtonPagesText = styled.Text`
  color: #fff;
  font-size: 15px;
`;
