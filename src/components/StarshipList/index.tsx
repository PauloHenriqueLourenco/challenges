import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { Starship } from '../../pages/Dashboard/types';
import StarshipCard from '../StarshipCard';

import {
  Container,
  StarshipListHeaderContainer,
  StarshipListTitle,
} from './styles';

interface StarshipListProps {
  starships: Starship[];
}

const StarshipList: React.FC<StarshipListProps> = ({ starships }) => {
  return (
    <Container
      data={starships}
      keyExtractor={(film) => film.url}
      ListHeaderComponent={
        <StarshipListHeaderContainer>
          <Icon name="users" size={24} color="#ff9000" />
          <StarshipListTitle>Starships</StarshipListTitle>
        </StarshipListHeaderContainer>
      }
      ListEmptyComponent={
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <Text style={{ fontFamily: 'RussoOne-Regular', color: '#f9f9f9' }}>
            No data
          </Text>
        </View>
      }
      renderItem={({ item: starship }) => <StarshipCard starship={starship} />}
    />
  );
};

export default StarshipList;
