import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Feather';

import MovieList from '../pages/MoveList';
import MovieDetails from '../pages/MovieDetails';
import MovieSearch from '../pages/MovieSearch';
import DrawerContent from '../screens/DrawerContent';

const { Navigator, Screen } = createStackNavigator();
const Drawer = createDrawerNavigator();

const MovieScreen = ({ navigation: {openDrawer} }) => (
   <Navigator
    screenOptions={{
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
        headerLeft: () => <Icon
            name="menu"
            accessibilityRole="menu"
            size={20}
            color="#fff"
            style={{ paddingLeft: 16 }}
            onPress={() => openDrawer()}
            accessibilityLabel="Click aqui para abrir o menu"
        />,
      }}
    />
    <Screen
      name="MovieDetails"
      component={MovieDetails}
      options={({ route }) => {
        const {name} = route.params;
        return ({title: name});
      }}
    />
    <Screen
      name="Busca"
      component={MovieSearch}
      options={{
        headerLeft: () => <Icon
            name="menu"
            accessibilityRole="menu"
            size={20}
            color="#fff"
            style={{ paddingLeft: 16 }}
            onPress={() => openDrawer()}
            accessibilityLabel="Click aqui para abrir o menu"
        />,
      }}
    />
  </Navigator>
);


const MovieRoutes: React.FC = () =>  (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="Populares" component={MovieScreen} />
    </Drawer.Navigator>
  )
;

export default MovieRoutes;
