import React from 'react';

import { NotFoundAnimationComponent } from '@components/index';

import { Container, LoadingContainer, WarningMessage } from './styles';

const NotFoundPage = () => (
  <Container>
    <LoadingContainer>
      <NotFoundAnimationComponent
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      />

      <WarningMessage>
        Página não encontrada! Tente acessar outra página.
      </WarningMessage>
    </LoadingContainer>
  </Container>
);

export default NotFoundPage;
