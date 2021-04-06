import { FlatList } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

import { Starship } from '../../Dashboard/types';

export const Container = styled.View`
  flex: 1;
  background-color: #040714;
  flex-direction: column;
`;

export const StarshipList = styled(FlatList as new () => FlatList<Starship>)`
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

export const StarshipContainer = styled(RectButton)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  margin-bottom: 16px;

  background: #31343e;
  border-radius: 10px;
`;

export const StarshipInfo = styled.View`
  flex: 1;
  margin-left: 20px;
`;

export const StarshipName = styled.Text`
  font-family: 'RussoOne-Regular';
  font-size: 18px;
  color: #f9f9f9;
`;

export const StarshipMeta = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
`;

export const StarshipMetaTitle = styled.Text`
  color: #ff9000;
  font-family: 'RussoOne-Regular';
`;

export const StarshipMetaText = styled.Text`
  margin-left: 8px;
  color: #999591;
  font-family: 'RussoOne-Regular';
`;
