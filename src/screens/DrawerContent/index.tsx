import React from 'react';
import { View } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { genres } from '../../utils/genres';

import { Container, DrawerItemStyle, ViewDrawerItem } from './styles';

interface DrawerContentProps {
  navigation: any;
}

const DrawerContent: React.FC<DrawerContentProps> = ({navigation}) => {
  return (
    <Container>
      <DrawerContentScrollView>
          <View>
            <DrawerItemStyle
              label="Populares"
              onPress={() => navigation.navigate('MovieList')}
              inactiveTintColor="#fff"
            />
          </View>
          <View accessible
                accessibilityLabel="Gêneros dos filmes">
            <ViewDrawerItem>
            {genres.map(genre => (
              <DrawerItem
                key={genre.id}
                label={genre.name}
                onPress={() => navigation.navigate('Busca', {
                    genre,
                })}
                inactiveTintColor="#fff"
              />
            ))}
            </ViewDrawerItem>
          </View>
      </DrawerContentScrollView>
    </Container>
  );
};

export default DrawerContent;
