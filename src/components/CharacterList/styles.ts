import styled from 'styled-components/native';
import { FlatList } from 'react-native';

import { Character } from '../../pages/Dashboard/types';

export const Container = styled(FlatList as new () => FlatList<Character>)`
  padding: 32px 24px 16px;
`;

export const CharacterListHeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 24px;
`;

export const CharacterListTitle = styled.Text`
  font-family: 'RussoOne-Regular';
  color: #f9f9f9;
  font-size: 24px;
  margin-left: 8px;
`;
