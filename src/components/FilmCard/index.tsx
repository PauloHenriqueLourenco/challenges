import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

import { Film } from '../../pages/Dashboard/types';

import {
  Container,
  FilmTitle,
  FilmInfo,
  FilmMeta,
  FilmMetaText,
  FilmMetaTitle,
} from './styles';

interface FilmCarcProps {
  film: Film;
}

const FilmCard: React.FC<FilmCarcProps> = ({ film }) => {
  const navigation = useNavigation();
  const handleSelectFilm = useCallback(
    (selectedFilm: Film) => {
      navigation.navigate('FilmRoutes', { film: selectedFilm });
    },
    [navigation],
  );

  return (
    <Container onPress={() => handleSelectFilm(film)}>
      <FilmInfo>
        <FilmTitle>{film.title}</FilmTitle>
        <FilmMeta>
          <FilmMetaTitle>Episode:</FilmMetaTitle>
          <FilmMetaText>{film.episode_id}</FilmMetaText>
        </FilmMeta>
        <FilmMeta>
          <FilmMetaTitle>Director:</FilmMetaTitle>
          <FilmMetaText>{film.director}</FilmMetaText>
        </FilmMeta>
        <FilmMeta>
          <FilmMetaTitle>Producer:</FilmMetaTitle>
          <FilmMetaText>{film.producer}</FilmMetaText>
        </FilmMeta>
        <FilmMeta>
          <FilmMetaTitle>Release Date:</FilmMetaTitle>
          <FilmMetaText>{film.release_date}</FilmMetaText>
        </FilmMeta>
      </FilmInfo>

      <Icon name="info" size={28} color="#ff9000" />
    </Container>
  );
};

export default FilmCard;
