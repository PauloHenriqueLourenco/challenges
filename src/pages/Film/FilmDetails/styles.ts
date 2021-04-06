import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #040714;
  flex-direction: column;
  padding: 32px;
`;

export const FilmTitle = styled.Text`
  font-family: 'RussoOne-Regular';
  font-size: 32px;
  color: #f9f9f9;

  margin-bottom: 16px;
`;

export const FilmMeta = styled.View`
  flex-direction: row;
  align-items: flex-start;
  margin-top: 8px;
`;

export const FilmMetaTitle = styled.Text`
  color: #ff9000;
  font-family: 'RussoOne-Regular';
  font-size: 18px;
`;

export const FilmMetaText = styled.Text`
  margin-left: 8px;
  color: #999591;
  font-family: 'RussoOne-Regular';
  font-size: 18px;

  flex: 1;
  flex-wrap: wrap;
`;

export const FilmOpeningCrawl = styled.Text`
  color: #999591;
  font-family: 'RussoOne-Regular';
  font-size: 18px;

  flex: 1;
  flex-wrap: wrap;
  align-self: center;
  margin-top: 36px;
`;
