import React, { useContext } from 'react';
import { ScrollView } from 'react-native';

import { FilmContext } from '../../../hooks/film';

import {
  Container,
  FilmTitle,
  FilmMeta,
  FilmMetaTitle,
  FilmMetaText,
  FilmOpeningCrawl,
} from './styles';

const FilmDetails: React.FC = () => {
  const { film } = useContext(FilmContext);

  return (
    <ScrollView>
      <Container>
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

        <FilmOpeningCrawl>{film.opening_crawl}</FilmOpeningCrawl>
      </Container>
    </ScrollView>
  );
};

export default FilmDetails;
