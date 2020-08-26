import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

export const Poster = styled.Image`
  width: 100%;
  height: 250px;
`;

export const Container = styled.View`
  flex: 1;
  background: #000;
`;

export const DrawerItemStyle = styled(DrawerItem)`
  /* margin-right: 16px; */
  background: #e50914;
`;

export const ViewDrawerItem = styled.View`
  /* margin-right: 16px; */
  background: black;
  flex-direction: row;
    flex-wrap: wrap;
      justify-content: flex-start;
`;
