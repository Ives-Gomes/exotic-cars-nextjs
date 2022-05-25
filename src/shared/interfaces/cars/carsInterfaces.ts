interface CarImage {
  url: string;
  color: string;
}

export interface Car {
  id: number;
  name: string;
  model: string;
  logo: string;
  image: string;
  images: Array<CarImage>;
  price: number;
}
