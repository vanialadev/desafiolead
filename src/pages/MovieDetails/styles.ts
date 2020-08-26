import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

export const Poster = styled.Image`
  width: 100%;
  height: 250px;
  background: #312e38;

`;

export const Title = styled.Text`
  color: #f4ede8;
  padding: 15px 16px;
  font-size: 30px;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  align-items: center;
  border-bottom-width: 0.3px;
  border-bottom-color: #fff;
`;

export const Overview = styled.Text`
  color: #f4ede8;
  padding: 13px 16px;
  font-size: 15px;
  text-align: justify;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  align-items: center;
  border-bottom-width: 0.3px;
  border-bottom-color: #fff;
`;

export const Rating = styled.View`
  width: 100%;
  padding: 13px 16px;
  flex-direction: row;
  border-bottom-width: 0.3px;
  border-bottom-color: #fff;
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 16px;
`;

export const AverageText = styled.Text`
  color: #f4ede8;
  font-size: 15px;
  width: 100%;
`;

export const Popularity = styled.View`
  width: 100%;
  padding: 13px 16px;
  flex-direction: row;

  border-bottom-width: 0.3px;
  border-bottom-color: #fff;
`;

export const PopularityText = styled.Text`
  color: #f4ede8;
  font-size: 15px;
  width: 100%;
`;

export const Genre = styled.View`
  width: 100%;
  padding: 13px 16px;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  border-bottom-width: 0.3px;
  border-bottom-color: #fff;
`;

export const GenreText = styled.Text`
  color: #f4ede8;
  font-size: 15px;
  margin-right: 3px;
  margin-top: 10px;
  background: red;
  padding: 0 16px;
  border-radius: 3px;
`;
