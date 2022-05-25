import React from 'react';
import { GetStaticPropsContext, NextPage } from 'next';

import { Car } from '@interfaces/cars/carsInterfaces';

import getCarsHelper from '@shared/helpers/getCarsHelper';

interface DetailsProps {
  car: Car;
}

const Details: NextPage<DetailsProps> = ({ car }: DetailsProps) => (
  <h1>{car.name}</h1>
);

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
