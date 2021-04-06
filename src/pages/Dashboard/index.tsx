import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';

import api from '../../services/api';

import { Container, Loading } from './styles';

import { Character } from './types';
import CharacterList from '../../components/CharacterList';

const Dashboard: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [page, setPage] = useState(1);
  const [hasNext, setHasNext] = useState(true);
  const [loading, setLoading] = useState(false);

  const loadPage = useCallback(() => {
    if (loading) return;
    if (!hasNext) return;

    setLoading(true);

    api
      .get(`people/?page=${page}`)
      .then((response) => {
        setHasNext(!!response.data.next);
        setCharacters([...characters, ...response.data.results]);
      })
      .finally(() => {
        setPage(page + 1);
        setLoading(false);
      });
  }, [characters, hasNext, loading, page]);

  useEffect(() => {
    loadPage();
  }, []);

  return (
    <Container>
      <CharacterList
        characters={characters}
        onEndReachedThreshold={0.1}
        onEndReached={() => loadPage()}
        ListFooterComponent={loading ? <Loading /> : null}
      />
    </Container>
  );
};

export default Dashboard;
