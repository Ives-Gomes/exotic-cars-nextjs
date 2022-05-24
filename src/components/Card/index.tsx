/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import Tooltip from 'react-power-tooltip';

import { Car } from '@interfaces/cars/carsInterfaces';

import { convertPrice } from '@shared/helpers/convertPrice';

import Image from 'next/image';
import Link from 'next/link';
import {
  Container,
  DotsContent,
  FooterText,
  ImageContainer,
  Price,
  PriceContent,
  Subtitle,
  Title,
  TitleContent,
} from './styles';

interface CardProps {
  car: Car;
}

const Card: React.FC<CardProps> = ({ car }: CardProps) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const detailHandler = () => {
    localStorage.setItem('car', JSON.stringify(car));
  };

  return (
    <Container onClick={() => detailHandler()}>
      <Link href="/details">
        <a>
          <TitleContent>
            <div>
              <Title>{car.name}</Title>
              <Subtitle>{car.model}</Subtitle>
            </div>

            {/* <DotsContent
              onMouseOver={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
            >
              <Tooltip position="left start" show={showTooltip}>
                <span>
                  Estamos trabalhando nessa funcionalidade e logo ela estará disponível!
                </span>
              </Tooltip>

              <BiDotsHorizontalRounded />
            </DotsContent> */}
          </TitleContent>

          <ImageContainer>
            <Image
              src={car.image}
              alt={car.name}
              layout="fill"
              objectFit="contain"
            />
          </ImageContainer>

          <PriceContent>
            <FooterText>Agende Agora</FooterText>

            <Price>
              {convertPrice(car.price)}
              <span>/dia</span>
            </Price>
          </PriceContent>
        </a>
      </Link>
    </Container>
  );
};

export default Card;
