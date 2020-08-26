import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

export const ViewPicker = styled.View`
  background: #232129;
  border-radius: 10px;
  margin: 8px 16px;
  height: 60px;
  padding: 0 16px;
  flex-direction: row;
  align-items: center;
`;

export const ViewInput = styled.View`
  height: 60px;
  background: #232129;
  padding: 0 16px;
  border-radius: 10px;
  margin: 8px 16px;

  flex-direction: row;
  align-items: center;
`;

export const IconInput = styled(FeatherIcon)`
  margin-right: 16px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: 'red',
})`
  flex: 1;
  color: #fff;
  font-size: 16px;
`;

export const Container = styled.View`
  flex: 1;
  margin-top: 20px;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const ViewPoster = styled.TouchableOpacity`
  flex-direction: column;
`;

export const Poster = styled.Image`
  width: 165px;
  height: 248px;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
  background: #312e38;
`;

export const Title = styled.Text`
  width: 100px;
  color: #f4ede8;
  margin: 0 6px;
  font-size: 10px;
  flex-wrap: wrap;
`;



