import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 32px;
`;

export const MessageContainer = styled.View`
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  padding: 20px;
  margin-bottom: 16px;

  background: #31343e;
  border-radius: 10px;
`;

export const MessageTitle = styled.Text`
  font-family: 'RussoOne-Regular';
  color: #f9f9f9;
  font-size: 24px;
  margin-bottom: 24px;
`;

export const MessageSubTitle = styled.Text`
  color: #999591;
  font-family: 'RussoOne-Regular';
`;

export const OptionsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  padding: 20px;
  margin-bottom: 16px;

  background: #31343e;
  border-radius: 10px;
`;

export const OptionButton = styled(RectButton)`
  width: 45%;
  height: 60px;
  background: #ff9000;
  border-radius: 10px;
  margin-top: 8px;

  justify-content: center;
  align-items: center;
`;

export const OptionText = styled.Text`
  color: #f9f9f9;
`;
