import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';

import { useContext } from 'react';
import api from '../../../services/api';

import { Container } from './styles';
import { Character } from '../../Dashboard/types';
import { FilmContext } from '../../../hooks/film';
import CharacterList from '../../../components/CharacterList';

const FilmCharacters: React.FC = () => {
  const { film } = useContext(FilmContext);
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilmCharacters(): Promise<void> {
      const responses = await Promise.all(
        film.characters.map((character) => api.get(character)),
      );

      setCharacters(responses.map((response) => response.data));
      setLoading(false);
    }

    loadFilmCharacters();
  }, [film.characters]);

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
      <CharacterList characters={characters} />
    </Container>
  );
};

export default FilmCharacters;
