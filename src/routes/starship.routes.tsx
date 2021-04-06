import React from 'react';
import { useRoute } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import StarshipDetails from '../pages/Starship/StarshipDetails';
import { Starship } from '../pages/Dashboard/types';

import { StarshipContext } from '../hooks/starship';
import StarshipPilots from '../pages/Starship/StarshipPilots';
import StarshipFilms from '../pages/Starship/StarshipFilms';

interface RouteParams {
  starship: Starship;
}

const Tab = createMaterialTopTabNavigator();

const StarshipRoutes: React.FC = () => {
  const route = useRoute();
  const params = route.params as RouteParams;

  return (
    <StarshipContext.Provider value={{ starship: params.starship }}>
      <Tab.Navigator
        initialRouteName="Details"
        tabBarOptions={{
          activeTintColor: '#ff9000',
          inactiveTintColor: '#f9f9f9',
          indicatorStyle: { backgroundColor: '#ff9000' },
          labelStyle: { fontSize: 16, fontFamily: 'RussoOne-Regular' },
          style: { backgroundColor: '#31343e' },
        }}
      >
        <Tab.Screen
          name="StarshipDetails"
          component={StarshipDetails}
          options={{ tabBarLabel: 'Details' }}
        />
        <Tab.Screen
          name="StarshipPilots"
          component={StarshipPilots}
          options={{ tabBarLabel: 'Pilots' }}
        />
        <Tab.Screen
          name="StarshipFilms"
          component={StarshipFilms}
          options={{ tabBarLabel: 'Films' }}
        />
      </Tab.Navigator>
    </StarshipContext.Provider>
  );
};

export default StarshipRoutes;
