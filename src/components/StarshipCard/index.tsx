import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

import { Starship } from '../../pages/Dashboard/types';

import {
  Container,
  StarshipName,
  StarshipInfo,
  StarshipMeta,
  StarshipMetaText,
  StarshipMetaTitle,
} from './styles';

interface StarshipCardProps {
  starship: Starship;
}

const StarshipCard: React.FC<StarshipCardProps> = ({ starship }) => {
  const navigation = useNavigation();
  const handleSelectStarship = useCallback(
    (selectedStarship: Starship) => {
      navigation.navigate('StarshipRoutes', { starship: selectedStarship });
    },
    [navigation],
  );

  return (
    <Container onPress={() => handleSelectStarship(starship)}>
      <StarshipInfo>
        <StarshipName>{starship.name}</StarshipName>
        <StarshipMeta>
          <StarshipMetaTitle>model:</StarshipMetaTitle>
          <StarshipMetaText>{starship.model}</StarshipMetaText>
        </StarshipMeta>
        <StarshipMeta>
          <StarshipMetaTitle>Manufacturer:</StarshipMetaTitle>
          <StarshipMetaText>{starship.manufacturer}</StarshipMetaText>
        </StarshipMeta>
        <StarshipMeta>
          <StarshipMetaTitle>Cost in Credits:</StarshipMetaTitle>
          <StarshipMetaText>{starship.cost_in_credits}</StarshipMetaText>
        </StarshipMeta>
        <StarshipMeta>
          <StarshipMetaTitle>Length:</StarshipMetaTitle>
          <StarshipMetaText>{starship.length}</StarshipMetaText>
        </StarshipMeta>
      </StarshipInfo>

      <Icon name="info" size={28} color="#ff9000" />
    </Container>
  );
};

export default StarshipCard;
