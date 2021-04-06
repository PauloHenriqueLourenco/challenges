import React from 'react';
import { useRoute } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import FilmDetails from '../pages/Film/FilmDetails';
import { Film } from '../pages/Dashboard/types';

import { FilmContext } from '../hooks/film';
import FilmCharacters from '../pages/Film/FilmCharacters';
import FilmStarships from '../pages/Film/FilmStarships';

interface RouteParams {
  film: Film;
}

const Tab = createMaterialTopTabNavigator();

const FilmRoutes: React.FC = () => {
  const route = useRoute();
  const params = route.params as RouteParams;

  return (
    <FilmContext.Provider value={{ film: params.film }}>
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
          name="FilmDetails"
          component={FilmDetails}
          options={{ tabBarLabel: 'Details' }}
        />
        <Tab.Screen
          name="FilmCharacters"
          component={FilmCharacters}
          options={{ tabBarLabel: 'Character' }}
        />
        <Tab.Screen
          name="FilmStarships"
          component={FilmStarships}
          options={{ tabBarLabel: 'Starships' }}
        />
      </Tab.Navigator>
    </FilmContext.Provider>
  );
};

export default FilmRoutes;
