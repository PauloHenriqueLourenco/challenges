import { useNavigation } from '@react-navigation/native';
import React from 'react';

import { Container, HeaderButton, HeaderTitle, HeaderSubTitle } from './styles';

const Header: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <HeaderButton onPress={() => navigation.navigate('Dashboard')}>
        <HeaderTitle>
          SWAPI, {'\n'}
          <HeaderSubTitle>The Star Wars API</HeaderSubTitle>
        </HeaderTitle>
      </HeaderButton>
    </Container>
  );
};

export default Header;
