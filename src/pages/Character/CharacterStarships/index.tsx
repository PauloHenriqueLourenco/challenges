import React, { useContext, useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';

import StarshipList from '../../../components/StarshipList';
import { CharacterContext } from '../../../hooks/character';

import api from '../../../services/api';

import { Starship } from '../../Dashboard/types';
import { Container } from './styles';

const CharacterStarships: React.FC = () => {
  const { character } = useContext(CharacterContext);
  const [starships, setStarships] = useState<Starship[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadCharacterStarships(): Promise<void> {
      const responses = await Promise.all(
        character.starships.map((starship) => api.get(starship)),
      );

      setStarships(responses.map((response) => response.data));
      setLoading(false);
    }

    loadCharacterStarships();
  }, [character.starships]);

  if (loading) {
    return (
      <Container>
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <ActivityIndicator size="large" color="#f9f9f9" />
        </View>
      </Container>
    );
  }

  return (
    <Container>
      <StarshipList starships={starships} />
    </Container>
  );
};

export default CharacterStarships;
