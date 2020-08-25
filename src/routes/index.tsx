import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import MovieList from '../pages/MoveList';
import MovieDetails from '../pages/MovieDetails';
import MovieSearch from '../pages/MovieSearch';

const { Navigator, Screen } = createStackNavigator();

const MovieRoutes: React.FC = () => {
  return (
    <Navigator
      screenOptions={{
        // headerShown: false,
        headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: '#E50914',
        },
        cardStyle: { backgroundColor: '#000' },
      }}
    >
      <Screen
        name="MovieList"
        component={MovieList}
        options={{
          headerStyle: {
            backgroundColor: '#E50914',
          },
          headerTitle: 'Populares',
        }}
      />
      <Screen
        name="MovieDetails"
        component={MovieDetails}
        options={({ route }) => ({ title: route.params.name })}
      />

      <Screen name="Busca" component={MovieSearch} />
    </Navigator>
  );
};

export default MovieRoutes;
