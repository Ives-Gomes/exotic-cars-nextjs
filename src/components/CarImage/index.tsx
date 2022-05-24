import React from 'react';
import Image from 'next/image';

import { Background, Container } from './styles';

interface CarImageProps {
  src: string;
  alt: string;
}

const CarImageComponent: React.FC<CarImageProps> = ({ src, alt }: CarImageProps) => (
  <Container className="containerImage">
    <Background className="backgroundImage" />

    <Image
      className="carImage"
      src={src}
      alt={alt}
      width="100%"
      height="100%"
    />
  </Container>
);

export default CarImageComponent;
