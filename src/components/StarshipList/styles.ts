import styled from 'styled-components/native';
import { FlatList } from 'react-native';

import { Starship } from '../../pages/Dashboard/types';

export const Container = styled(FlatList as new () => FlatList<Starship>)`
  padding: 32px 24px 16px;
`;

export const StarshipListHeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 24px;
`;

export const StarshipListTitle = styled.Text`
  font-family: 'RussoOne-Regular';
  color: #f9f9f9;
  font-size: 24px;
  margin-left: 8px;
`;
