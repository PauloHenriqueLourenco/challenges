import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 24px;
  background: #31343e;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderButton = styled.TouchableWithoutFeedback``;

export const HeaderTitle = styled.Text`
  color: #f9f9f9;
  font-size: 20px;
  font-family: 'RussoOne-Regular';
  line-height: 28px;
`;

export const HeaderSubTitle = styled.Text`
  color: #ff9000;
  font-family: 'RussoOne-Regular';
`;
