import React from 'react';
import { useApp } from '../../hooks/app';

import {
  Container,
  MessageContainer,
  OptionsContainer,
  MessageTitle,
  OptionButton,
  OptionText,
  MessageSubTitle,
} from './styles';

const Expired: React.FC = () => {
  const { pay, later } = useApp();
  return (
    <Container>
      <MessageContainer>
        <MessageTitle>
          Time's up! {'\n'}
          <MessageSubTitle>Make a payment to continue using </MessageSubTitle>
        </MessageTitle>

        <OptionsContainer>
          <OptionButton onPress={() => pay()}>
            <OptionText>Pay</OptionText>
          </OptionButton>
          <OptionButton onPress={() => later()}>
            <OptionText>Later</OptionText>
          </OptionButton>
        </OptionsContainer>
      </MessageContainer>
    </Container>
  );
};

export default Expired;
