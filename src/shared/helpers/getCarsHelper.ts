import { CarsMethods } from '@shared/services';

export const getCarsHelper = async () => {
  const { getCars } = CarsMethods();

  const carsResponse = await getCars();

  const cars = carsResponse.data;

  return cars;
};
