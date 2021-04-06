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

export const CharacterInfo = styled.View`
  flex: 1;
  margin-left: 20px;
`;

export const CharacterName = styled.Text`
  font-family: 'RussoOne-Regular';
  font-size: 18px;
  color: #f9f9f9;
`;

export const CharacterMeta = styled.View`
  flex-direction: row;
  align-items: flex-start;
  margin-top: 8px;
`;

export const CharacterMetaTitle = styled.Text`
  color: #ff9000;
  font-family: 'RussoOne-Regular';
`;

export const CharacterMetaText = styled.Text`
  margin-left: 8px;
  color: #999591;
  font-family: 'RussoOne-Regular';

  flex: 1;
  flex-wrap: wrap;
`;
