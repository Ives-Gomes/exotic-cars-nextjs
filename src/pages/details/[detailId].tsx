/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import { GetStaticPropsContext, NextPage } from 'next';
import { toast } from 'react-toastify';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import Slider from 'react-slick';

import { Car } from '@interfaces/cars/carsInterfaces';

import { Button, CarouselButton, CarImageComponent } from '@components/index';

import { getCarsHelper } from '@shared/helpers/getCarsHelper';
import { convertPrice } from '@shared/helpers/convertPrice';

import theme from '@utils/theme';
import {
  CarImage,
  CarouselContainer,
  Color,
  Container,
  HeaderContent,
  ImageContent,
  Logo,
  Price,
  SectionContent,
  Title,
} from './styles';

interface DetailsProps {
  car: Car;
}

const Details: NextPage<DetailsProps> = ({ car }: DetailsProps) => {
  const showAlert = () => {
    toast.info('Estamos trabalhando nessa funcionalidade e logo ela estará disponível!');
  };

  const numbersOfSlidesToShow = () => {
    if (car.images.length >= 3) {
      return 3;
    }

    return car.images.length;
  };

  const defineInitialSlide = () => {
    if (car.images.length === 1) {
      return 0;
    }

    return 1;
  };

  const [currentCarIndex, setCurrentCarIndex] = useState(defineInitialSlide());

  const changeSlide = (currentSlide: number) => {
    if (car.images.length >= 3) {
      setCurrentCarIndex(currentSlide >= 3 ? currentSlide - 3 : currentSlide);

      return;
    }

    setCurrentCarIndex(currentSlide >= 2 ? currentSlide - 2 : currentSlide);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: numbersOfSlidesToShow(),
    slidesToScroll: 1,
    initialSlide: defineInitialSlide(),
    centerMode: true,
    centerPadding: '1px',
    afterChange: (currentSlide: number) => changeSlide(currentSlide),
    nextArrow: <CarouselButton><BsArrowRight size={18} /></CarouselButton>,
    prevArrow: <CarouselButton><BsArrowLeft size={18} /></CarouselButton>,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <Head>
        <title>{`Exotic Cars - ${car.name}`}</title>
        <meta
          name="description"
          content={`Deatil of car: ${car.name}, model ${car.model}`}
        />
      </Head>

      <Container>
        <div style={{ width: '100%' }}>
          <HeaderContent>
            <Logo src={car?.logo} alt={car?.name} />

            <div>
              <Title>
                {`${car?.name} ${car?.model}`}
              </Title>

              <Price>{`${convertPrice(car?.price)}/dia`}</Price>
            </div>
          </HeaderContent>

          <SectionContent>
            <Link href="/">
              <a>
                <Button
                  background={theme.white}
                  color={theme.medium_black}
                  borderColor={theme.medium_black}
                  type="button"
                >
                  <AiOutlineArrowLeft
                    size={14}
                    style={{ marginRight: 5 }}
                  />
                  Voltar ao catálogo
                </Button>
              </a>
            </Link>

            <ImageContent>
              <CarImage>
                <Image
                  src={car.images[currentCarIndex].url}
                  alt={car.name}
                  width={650}
                  height={400}
                  placeholder="blur"
                  blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/PFPPQAJIANhyrSebgAAAABJRU5ErkJggg=="
                />
              </CarImage>

              <Button
                background={theme.medium_black}
                color={theme.white}
                borderColor={theme.medium_black}
                type="button"
                onClick={() => showAlert()}
                style={{
                  marginTop: 5,
                }}
              >
                Agende agora
                <AiOutlineArrowRight
                  size={14}
                  style={{ marginLeft: 5 }}
                />
              </Button>
            </ImageContent>

            <Color>
              <span>{`0${currentCarIndex}`}</span>
              {car.images[currentCarIndex].color}
            </Color>
          </SectionContent>
        </div>

        <CarouselContainer carLength={car.images.length}>
          <Slider {...settings}>
            {car.images.map((item: any) => (
              <CarImageComponent key={item.url} src={item.url} alt={car.name} />
            ))}
            {car.images.map((item: any) => (
              <CarImageComponent key={item.url} src={item.url} alt={car.name} />
            ))}
          </Slider>
        </CarouselContainer>
      </Container>
    </>
  );
};

export async function getStaticProps(ctx: GetStaticPropsContext) {
  const { params } = ctx;

  const carId = params?.detailId;

  const cars = await getCarsHelper() as Array<Car>;

  const car = cars.find((carParam: Car) => carParam.id === Number(carId));

  return {
    props: {
      car,
    },
  };
}

export async function getStaticPaths() {
  const cars = await getCarsHelper() as Array<Car>;

  const ids = cars.map((car: Car) => car.id);

  const pathsWithParams = ids.map((id: number) => ({ params: { detailId: String(id) } }));

  return {
    paths: pathsWithParams,
    fallback: 'blocking',
  };
}

export default Details;
