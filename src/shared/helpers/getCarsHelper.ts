import { CarsMethods } from '@shared/services';

const getCarsHelper = async () => {
  const { getCars } = CarsMethods();

  const carsResponse = await getCars();

  const cars = carsResponse.data;

  return cars;
};

export default getCarsHelper;
