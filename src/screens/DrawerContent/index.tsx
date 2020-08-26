import React from 'react';
import { View } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { genres } from '../../utils/genres';

import { Container, DrawerItemStyle, ViewDrawerItem } from './styles';

const DrawerContent: React.FC = props => {
  return (
    <Container>
      <DrawerContentScrollView>
          <View>
            <DrawerItemStyle
              label="Populares"
              onPress={() => props.navigation.navigate('MovieList')}
              inactiveTintColor="#fff"
              // activeTintColor="#000"

            />
          </View>

          <View>
            <ViewDrawerItem>
            {genres.map(genre => (
              <DrawerItem
                key={genre.id}
                label={genre.name}
                onPress={() => props.navigation.navigate('Busca', {
                    genre,
                })}
                // inactiveBackgroundColor={genre.color}
                inactiveTintColor="#fff"
                // labelStyle={{
                //   borderWidth: 1,
                //   borderColor: '#f00',
                //   borderRadius: 12,
                //   padding: 1,
                // }}
              />
            ))}
            </ViewDrawerItem>
          </View>

      </DrawerContentScrollView>
    </Container>
  );
};

export default DrawerContent;
