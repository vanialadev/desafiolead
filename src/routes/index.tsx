import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Feather';
import { genreName } from '../utils/genres';

import MovieList from '../pages/MoveList';
import MovieDetails from '../pages/MovieDetails';
import MovieSearch from '../pages/MovieSearch';
import DrawerContent from '../screens/DrawerContent';

const { Navigator, Screen } = createStackNavigator();
const Drawer = createDrawerNavigator();

const MovieListScreen = ({ navigation }) => {
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
          headerLeft: () => (
            <Icon
              name="menu"
              size={20}
              color="#fff"
              style={{ paddingLeft: 16 }}
              onPress={() => navigation.openDrawer()}
            />
          ),
        }}
      />
      <Screen
        name="MovieDetails"
        component={MovieDetails}
        options={({ route }) => ({ title: route.params.name })}
      />
      <Screen
        name="Busca"
        component={MovieSearch}
        options={{
          headerLeft: () => (
            <Icon
              name="menu"
              size={20}
              color="#fff"
              style={{ paddingLeft: 16 }}
              onPress={() => navigation.openDrawer()}
            />
          ),
        }}
      />
    </Navigator>
  );
};


const MovieRoutes: React.FC = () => {
  return (
    <Drawer.Navigator
      initialRouteName="MovieListScreen"
      drawerContent={props => <DrawerContent {...props} />}
    >
      <Drawer.Screen name="Populares" component={MovieListScreen} />
    </Drawer.Navigator>
  );
};

export default MovieRoutes;
