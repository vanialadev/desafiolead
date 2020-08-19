import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MovieList from '../pages/MoveList';

const Movie = createStackNavigator();

const MovieRoutes: React.FC = () => (
  <Movie.Navigator
    screenOptions={{
      // headerShown: false,
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#7159c1',
      },
      cardStyle: { backgroundColor: '#312e38' },
    }}
  >
    <Movie.Screen name="MovieList" component={MovieList} />
  </Movie.Navigator>
);

export default MovieRoutes;
