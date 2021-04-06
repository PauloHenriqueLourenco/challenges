import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  margin-bottom: 16px;

  background: #31343e;
  border-radius: 10px;
`;

export const FilmInfo = styled.View`
  flex: 1;
  margin-left: 20px;
`;

export const FilmTitle = styled.Text`
  font-family: 'RussoOne-Regular';
  font-size: 18px;
  color: #f9f9f9;
`;

export const FilmMeta = styled.View`
  flex-direction: row;
  align-items: flex-start;
  margin-top: 8px;
`;

export const FilmMetaTitle = styled.Text`
  color: #ff9000;
  font-family: 'RussoOne-Regular';
`;

export const FilmMetaText = styled.Text`
  margin-left: 8px;
  color: #999591;
  font-family: 'RussoOne-Regular';

  flex: 1;
  flex-wrap: wrap;
`;
