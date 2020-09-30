import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import logos from '../../assets/Nubank_Logo.png';

import { Container, 
          Top, 
          Logo, 
          Title } from './styles';

const Header = () => {
  return (
    <Container>
        <Top>
            <Logo source={logos} />
            <Title>Guilherme</Title>
        </Top>
        <Icon name="keyboard-arrow-down" size={20} color="#FFF" />
    </Container>
  );
};

export default Header;
