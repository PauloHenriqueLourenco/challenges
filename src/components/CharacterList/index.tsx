import React from 'react';
import { FlatList, FlatListProps, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { Character } from '../../pages/Dashboard/types';
import CharacterCard from '../CharacterCard';

import {
  Container,
  CharacterListHeaderContainer,
  CharacterListTitle,
} from './styles';

interface CharacterListProps {
  characters: Character[];
  onEndReachedThreshold: number;
  onEndReached?: ((info: { distanceFromEnd: number }) => void) | null;
  ListFooterComponent: React.ComponentType<any> | React.ReactElement | null;
}

const CharacterList: React.FC<CharacterListProps> = ({
  characters,
  ...rest
}) => {
  return (
    <Container
      data={characters}
      keyExtractor={(character) => character.url}
      ListHeaderComponent={
        <CharacterListHeaderContainer>
          <Icon name="users" size={24} color="#ff9000" />
          <CharacterListTitle>Characters</CharacterListTitle>
        </CharacterListHeaderContainer>
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
      renderItem={({ item: character }) => (
        <CharacterCard character={character} />
      )}
      {...rest}
    />
  );
};

export default CharacterList;
