import React from 'react';
import { useRoute } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import CharacterDetails from '../pages/Character/CharacterDetails';
import { Character } from '../pages/Dashboard/types';

import { CharacterContext } from '../hooks/character';
import CharacterFilms from '../pages/Character/CharacterFilms';
import CharacterStarships from '../pages/Character/CharacterStarships';

interface RouteParams {
  character: Character;
}

const Tab = createMaterialTopTabNavigator();

const CharacterRoutes: React.FC = () => {
  const route = useRoute();
  const params = route.params as RouteParams;

  return (
    <CharacterContext.Provider value={{ character: params.character }}>
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
          name="CharacterDetails"
          component={CharacterDetails}
          options={{ tabBarLabel: 'Details' }}
        />
        <Tab.Screen
          name="CharacterFilms"
          component={CharacterFilms}
          options={{ tabBarLabel: 'Films' }}
        />
        <Tab.Screen
          name="CharacterStarships"
          component={CharacterStarships}
          options={{ tabBarLabel: 'Starships' }}
        />
      </Tab.Navigator>
    </CharacterContext.Provider>
  );
};

export default CharacterRoutes;
