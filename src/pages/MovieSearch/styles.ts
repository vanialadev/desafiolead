import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Input = styled.TextInput.attrs({
  placeholderTextColor: 'red',
})`
  border-radius: 15px;
  background: #312e38;
  margin: 16px;
  color: #fff;
  padding: 0 10px;
  height: 50px;
`;

export const Container = styled.View`
  flex: 1;
  margin-top: 20px;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  /* background: #312e38; */
  justify-content: space-between;
`;

export const ViewPoster = styled.TouchableOpacity`
  flex-direction: column;
  padding: 10px;
`;

export const Poster = styled.Image`
  /* width: 100; */
  /* height: 150; */
  width: 150px;
  height: 260px;
  /* border-radius: 15px; */
  /* left: 5px; */
  justify-content: center;
  align-items: center;
  margin: 3px;
  background: #312e38;
  /*  */
`;

export const Title = styled.Text`
  width: 100px;
  color: #f4ede8;
  margin: 0 6px;
  /* padding: 2px; */
  font-size: 10px;
  /* flex: 0.8; */
  /* align-self: center; */
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
  /* padding: 30px; */
  background: #e50914;
  justify-content: center;
  align-items: center;
`;
export const ButtonSearchPages = styled.TouchableOpacity`
  border-radius: 10px;
  width: 100px;
  height: 40px;
  margin-left: 20px;
  /* padding: 30px; */
  background: #e50914;
  justify-content: center;
  align-items: center;
`;

export const ButtonPagesText = styled.Text`
  color: #fff;
  font-size: 15px;
`;
