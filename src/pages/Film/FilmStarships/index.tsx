import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';

import { useContext } from 'react';
import api from '../../../services/api';

import { Container } from './styles';
import { Starship } from '../../Dashboard/types';
import { FilmContext } from '../../../hooks/film';
import StarshipList from '../../../components/StarshipList';

const CharacterStarships: React.FC = () => {
  const { film } = useContext(FilmContext);
  const [starships, setStarships] = useState<Starship[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadCharacterStarships(): Promise<void> {
      const responses = await Promise.all(
        film.starships.map((starship) => api.get(starship)),
      );

      setStarships(responses.map((response) => response.data));
      setLoading(false);
    }

    loadCharacterStarships();
  }, [film.starships]);

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
