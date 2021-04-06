import React, { useContext } from 'react';
import { ScrollView } from 'react-native';

import { StarshipContext } from '../../../hooks/starship';

import {
  Container,
  StashipName,
  StarshipMeta,
  StarshipMetaTitle,
  StarshipMetaText,
} from './styles';

const StarshipDetails: React.FC = () => {
  const { starship } = useContext(StarshipContext);

  return (
    <ScrollView contentContainerStyle={{ flex: 1 }}>
      <Container>
        <StashipName>{starship.name}</StashipName>

        <StarshipMeta>
          <StarshipMetaTitle>Model:</StarshipMetaTitle>
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
        <StarshipMeta>
          <StarshipMetaTitle>Max Atmosphering Speed:</StarshipMetaTitle>
          <StarshipMetaText>{starship.max_atmosphering_speed}</StarshipMetaText>
        </StarshipMeta>
        <StarshipMeta>
          <StarshipMetaTitle>Crew:</StarshipMetaTitle>
          <StarshipMetaText>{starship.crew}</StarshipMetaText>
        </StarshipMeta>
        <StarshipMeta>
          <StarshipMetaTitle>Passengers:</StarshipMetaTitle>
          <StarshipMetaText>{starship.passengers}</StarshipMetaText>
        </StarshipMeta>
        <StarshipMeta>
          <StarshipMetaTitle>Cargo Capactity:</StarshipMetaTitle>
          <StarshipMetaText>{starship.cargo_capacity}</StarshipMetaText>
        </StarshipMeta>
        <StarshipMeta>
          <StarshipMetaTitle>Consumables:</StarshipMetaTitle>
          <StarshipMetaText>{starship.consumables}</StarshipMetaText>
        </StarshipMeta>
        <StarshipMeta>
          <StarshipMetaTitle>Hyperdrive Rating:</StarshipMetaTitle>
          <StarshipMetaText>{starship.hyperdrive_rating}</StarshipMetaText>
        </StarshipMeta>
        <StarshipMeta>
          <StarshipMetaTitle>MGLT:</StarshipMetaTitle>
          <StarshipMetaText>{starship.MGLT}</StarshipMetaText>
        </StarshipMeta>
        <StarshipMeta>
          <StarshipMetaTitle>Starship Class:</StarshipMetaTitle>
          <StarshipMetaText>{starship.starship_class}</StarshipMetaText>
        </StarshipMeta>
      </Container>
    </ScrollView>
  );
};

export default StarshipDetails;
