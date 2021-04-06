import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';

import { useContext } from 'react';
import api from '../../../services/api';

import { Container } from './styles';
import { Film } from '../../Dashboard/types';
import { StarshipContext } from '../../../hooks/starship';
import FilmList from '../../../components/FilmList';

const StarshipFilms: React.FC = () => {
  const { starship } = useContext(StarshipContext);
  const [films, setFilms] = useState<Film[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadCharacterStarships(): Promise<void> {
      const responses = await Promise.all(
        starship.films.map((film) => api.get(film)),
      );

      setFilms(responses.map((response) => response.data));
      setLoading(false);
    }

    loadCharacterStarships();
  }, [starship.films]);

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
      <FilmList films={films} />
    </Container>
  );
};

export default StarshipFilms;
