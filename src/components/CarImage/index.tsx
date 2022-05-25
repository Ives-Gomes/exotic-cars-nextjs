import React from 'react';
import Image from 'next/image';

import { Background, Container, ImageContainer } from './styles';

interface CarImageProps {
  src: string;
  alt: string;
}

const CarImageComponent: React.FC<CarImageProps> = ({ src, alt }: CarImageProps) => (
  <Container className="containerImage">
    <Background className="backgroundImage" />

    <ImageContainer>
      <Image
        className="carImage"
        src={src}
        alt={alt}
        width={350}
        height={200}
        placeholder="blur"
        blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/PFPPQAJIANhyrSebgAAAABJRU5ErkJggg=="
      />
    </ImageContainer>
  </Container>
);

export default CarImageComponent;
