import React from 'react';
import type { NextPage } from 'next';
import { IoIosArrowUp } from 'react-icons/io';

import { Card, CarAnimationComponent } from '@components/index';

import { CarsMethods } from '@shared/services';

import { Car } from '@interfaces/cars/carsInterfaces';

import {
  Container,
  Content,
  Fab,
  LoadingContainer,
  WarningMessage,
} from './styles';

interface HomeProps {
  cars: Array<Car>;
  error: boolean;
}

const Home: NextPage<HomeProps> = ({ cars, error }: HomeProps) => {
  const handleAnchor = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Container>
      {cars.length === 0 ? (
        <LoadingContainer>
          <CarAnimationComponent
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          />

          {error ? (
            <WarningMessage>
              Algo deu errado... Tente novamente mais tarde!
            </WarningMessage>
          ) : (
            <WarningMessage>Carregando...</WarningMessage>
          )}
        </LoadingContainer>
      ) : (
        <>
          <Content>
            {cars.map((car) => (
              <Card
                key={car.id}
                car={car}
              />
            ))}
          </Content>

          <Fab onClick={() => handleAnchor()}>
            <IoIosArrowUp />
          </Fab>
        </>
      )}
    </Container>
  );
};

export async function getStaticProps() {
  const { getCars } = CarsMethods();

  try {
    const carsResponse = await getCars();

    const cars = carsResponse.data;

    console.log(cars);

    return {
      props: {
        cars,
        error: false,
      },
    };
  } catch (error) {
    console.log(error);

    return {
      props: {
        cars: [],
        error: true,
      },
    };
  }
}

export default Home;
