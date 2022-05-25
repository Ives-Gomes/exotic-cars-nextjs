/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { toast } from 'react-toastify';

import { Filter } from '@components/index';

import Link from 'next/link';
import {
  Button,
  ButtonsContainer,
  Container,
  HeaderContainer,
  Title,
} from './styles';

const Header: React.FC = () => {
  const showAlert = () => {
    toast.info('Estamos trabalhando nessa funcionalidade e logo ela estará disponível!');
  };

  return (
    <Container>
      <HeaderContainer>
        <Link href="/">
          <a>
            <Title>
              Exotic
              {' '}
              <span>Cars</span>
            </Title>
          </a>
        </Link>
      </HeaderContainer>

      <div>
        <Filter showAlert={showAlert} />
      </div>

      <ButtonsContainer>
        <Button
          type="button"
          hasBorder={false}
          onClick={() => showAlert()}
        >
          Registrar
        </Button>
        <Button
          type="button"
          hasBorder
          onClick={() => showAlert()}
        >
          Entrar
        </Button>
      </ButtonsContainer>

    </Container>
  );
};

export default Header;
