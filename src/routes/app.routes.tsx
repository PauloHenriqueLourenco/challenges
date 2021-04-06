import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Header from '../components/Header';

import Dashboard from '../pages/Dashboard';

import CharacterRoutes from './character.routes';
import FilmRoutes from './film.routes';
import StarshipRoutes from './starship.routes';

const Stack = createStackNavigator();

const AppRoutes: React.FC = () => (
  <Stack.Navigator
    screenOptions={{
      header: (props) => <Header />,
      cardStyle: { backgroundColor: '#040714' },
    }}
  >
    <Stack.Screen name="Dashboard" component={Dashboard} />
    <Stack.Screen name="CharacterRoutes" component={CharacterRoutes} />
    <Stack.Screen name="FilmRoutes" component={FilmRoutes} />
    <Stack.Screen name="StarshipRoutes" component={StarshipRoutes} />
  </Stack.Navigator>
);

export default AppRoutes;
