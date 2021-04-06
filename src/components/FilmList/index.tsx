import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { Film } from '../../pages/Dashboard/types';
import FilmCard from '../FilmCard';

import { Container, FilmListHeaderContainer, FilmListTitle } from './styles';

interface FilmListProps {
  films: Film[];
}

const FilmList: React.FC<FilmListProps> = ({ films }) => {
  return (
    <Container
      data={films}
      keyExtractor={(film) => film.url}
      ListHeaderComponent={
        <FilmListHeaderContainer>
          <Icon name="users" size={24} color="#ff9000" />
          <FilmListTitle>Films</FilmListTitle>
        </FilmListHeaderContainer>
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
      renderItem={({ item: film }) => <FilmCard film={film} />}
    />
  );
};

export default FilmList;
