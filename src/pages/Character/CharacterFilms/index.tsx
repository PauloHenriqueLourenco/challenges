import React, { useContext, useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';

import api from '../../../services/api';

import { Container } from './styles';
import { Film } from '../../Dashboard/types';
import { CharacterContext } from '../../../hooks/character';
import FilmList from '../../../components/FilmList';

const CharacterFilms: React.FC = () => {
  const { character } = useContext(CharacterContext);
  const [films, setFilms] = useState<Film[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadCharacterFilms(): Promise<void> {
      const responses = await Promise.all(
        character.films.map((film) => api.get(film)),
      );

      setFilms(responses.map((response) => response.data));
      setLoading(false);
    }

    loadCharacterFilms();
  }, [character.films]);

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

export default CharacterFilms;
