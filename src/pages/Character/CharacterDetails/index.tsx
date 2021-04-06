import React, { useContext } from 'react';
import { CharacterContext } from '../../../hooks/character';

import {
  Container,
  CharacterName,
  CharacterMeta,
  CharacterMetaTitle,
  CharacterMetaText,
} from './styles';

const CharacterDetails: React.FC = () => {
  const { character } = useContext(CharacterContext);

  return (
    <Container>
      <CharacterName>{character.name}</CharacterName>
      <CharacterMeta>
        <CharacterMetaTitle>Height:</CharacterMetaTitle>
        <CharacterMetaText>{character.height} cm</CharacterMetaText>
      </CharacterMeta>
      <CharacterMeta>
        <CharacterMetaTitle>Mass:</CharacterMetaTitle>
        <CharacterMetaText>{character.mass} kg</CharacterMetaText>
      </CharacterMeta>
      <CharacterMeta>
        <CharacterMetaTitle>Hair Color:</CharacterMetaTitle>
        <CharacterMetaText>{character.hair_color}</CharacterMetaText>
      </CharacterMeta>
      <CharacterMeta>
        <CharacterMetaTitle>Skin Color:</CharacterMetaTitle>
        <CharacterMetaText>{character.skin_color}</CharacterMetaText>
      </CharacterMeta>
      <CharacterMeta>
        <CharacterMetaTitle>Eye Color:</CharacterMetaTitle>
        <CharacterMetaText>{character.eye_color}</CharacterMetaText>
      </CharacterMeta>
      <CharacterMeta>
        <CharacterMetaTitle>Birth Year:</CharacterMetaTitle>
        <CharacterMetaText>{character.birth_year}</CharacterMetaText>
      </CharacterMeta>
      <CharacterMeta>
        <CharacterMetaTitle>Gender:</CharacterMetaTitle>
        <CharacterMetaText>{character.gender}</CharacterMetaText>
      </CharacterMeta>
    </Container>
  );
};

export default CharacterDetails;
