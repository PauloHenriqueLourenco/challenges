import React, { useEffect, useState, useContext } from 'react';
import { ActivityIndicator, View } from 'react-native';

import { StarshipContext } from '../../../hooks/starship';

import CharacterList from '../../../components/CharacterList';

import api from '../../../services/api';

import { Character } from '../../Dashboard/types';
import { Container } from './styles';

const StarshipPilots: React.FC = () => {
  const { starship } = useContext(StarshipContext);
  const [pilots, setPilots] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStarshipPilots(): Promise<void> {
      const responses = await Promise.all(
        starship.pilots.map((pilot) => api.get(pilot)),
      );

      setPilots(responses.map((response) => response.data));
      setLoading(false);
    }

    loadStarshipPilots();
  }, [starship.pilots]);

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
      <CharacterList characters={pilots} />
    </Container>
  );
};

export default StarshipPilots;
