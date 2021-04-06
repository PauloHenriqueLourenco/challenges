import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Loading = styled.ActivityIndicator.attrs({
  size: 'small',
  color: '#f9f9f9',
})`
  margin: 30px 0;
`;
