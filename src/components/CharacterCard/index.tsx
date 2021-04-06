import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

import { Character } from '../../pages/Dashboard/types';

import {
  Container,
  CharacterInfo,
  CharacterMeta,
  CharacterMetaText,
  CharacterMetaTitle,
  CharacterName,
} from './styles';

interface CharacterCarcProps {
  character: Character;
}

const CharacterCard: React.FC<CharacterCarcProps> = ({ character }) => {
  const navigation = useNavigation();
  const handleSelectCharacter = useCallback(
    (selectedCharacter: Character) => {
      navigation.navigate('CharacterRoutes', { character: selectedCharacter });
    },
    [navigation],
  );

  return (
    <Container onPress={() => handleSelectCharacter(character)}>
      <CharacterInfo>
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
      </CharacterInfo>

      <Icon name="info" size={28} color="#ff9000" />
    </Container>
  );
};

export default CharacterCard;
