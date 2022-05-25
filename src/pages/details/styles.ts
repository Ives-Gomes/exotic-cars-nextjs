import styled from 'styled-components';

interface CarrousselProps {
  carLength: number;
}

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: transparent linear-gradient(125deg, #FFFFFF 0%, #D8D7D7 100%) 0% 0% no-repeat padding-box;

  padding: 50px;
`;

export const HeaderContent = styled.div`
  display: flex;

  position: absolute;

  @media (max-width: 425px) {
    margin-top: 80px;

    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Logo = styled.img`
  width: 100px;
  height: 100px;

  margin-right: 20px;

  @media (max-width: 425px) {
    margin-bottom: 20px;
  }
`;

export const Title = styled.h2`
  font-size: 36px;
  font-weight: 600;

  color: ${({ theme }) => theme.medium_black};

  margin-bottom: 10px;

  @media (max-width: 425px) {
    font-size: 30px;

    width: 215px;
  }
`;

export const Price = styled.h2`
  font-size: 24px;
  font-weight: 400;

  color: ${({ theme }) => theme.medium_black};

  @media (max-width: 425px) {
    font-size: 20px;

    margin-bottom: 30px;
  }
`;

export const SectionContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration: none;
  }

  @media (max-width: 425px) {
    flex-direction: column;
  }
`;

export const ImageContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 425px) {
    margin-top: 250px;
  }
`;

export const CarImage = styled.div`
  width: 50vw;
  height: 60vh;

  animation: go-back 1s;

  @media (max-width: 425px) {
    width: 100%;
    height: 40vh;
  }

  @keyframes go-back {
    0% {
        transform: translateY(30px);
    }
    100% {
        transform: translateY(0);
    }
  }
`;

export const Color = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  max-width: 150px;

  font-size: 32px;
  font-weight: 400;

  color: ${({ theme }) => theme.medium_black};

  margin-bottom: 15%;

  span {
    font-size: 42px;
    font-family: sans-serif;
    font-weight: 600;
  }

  @media (max-width: 425px) {
    margin-top: 30px;
    margin-bottom: 0px;
  }
`;

export const CarouselContainer = styled.div<CarrousselProps>`
  width: ${({ carLength }) => (carLength === 1 ? '35%' : '100%')};

  margin-top: 20px;

  .slick-center {
    .backgroundImage {
      background: rgb(221,209,239);
      background: linear-gradient(228deg, rgba(221,209,239,1) 0%, rgba(185,186,242,1) 100%);
    }

    width: 100%;
    height: 100%;

    .containerImage {
      margin-top: 0px;
    }
  }

  .slick-active {
    width: 60%;
    height: 50%;
  }
`;
