import React, { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import styled from "styled-components";
import VisibilityAnimation from "../VisibilityAnimation";

const Carousel = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    afterChange: (index) => setActiveIndex(index),
  };

  return (
    <VisibilityAnimation>
      <Container>
        <TitleCarousel>Nuestra historia en fotos</TitleCarousel>
        <CarouselContainer>
          <SliderWrapper>
            <Slider {...settings}>
              {images.map((image, index) => (
                <SlideContainer key={index}>
                  <ImageWrapper>
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={500}
                      height={300}
                      layout="intrinsic"
                    />
                  </ImageWrapper>
                </SlideContainer>
              ))}
            </Slider>
          </SliderWrapper>

          <TextWrapper>{images[activeIndex].description}</TextWrapper>
        </CarouselContainer>
      </Container>
    </VisibilityAnimation>
  );
};

export default Carousel;

const Container = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 50px;
  gap: 50px;
  margin-bottom: 70px;

  @media (max-width: 1024px) {
    gap: 30px;
    margin-top: 50px;
    margin-bottom: 0px;
    padding: 0px;
  }
`;

// Estilización con styled-components
const CarouselContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 50px;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 30px;
  }
`;

const SliderWrapper = styled.div`
  width: 50%; /* Ajusta el tamaño del carrusel */

  @media (max-width: 1024px) {
    width: 80%; /* En pantallas pequeñas, el carrusel ocupará todo el ancho */
  }
`;

const SlideContainer = styled.div`
  align-items: center;
  justify-content: flex-start;

  img {
    object-fit: cover;
    border-radius: 10px;
    max-width: 100% !important;
    min-width: 100%;
    max-height: 450px !important;
    min-height: 450px !important;
  }

  @media (max-width: 1024px) {
    img {
      justify-content: center;
    }
  }
`;

const ImageWrapper = styled.div``;

const TextWrapper = styled.div`
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  width: 300px; /* Ajusta el tamaño del contenedor de texto */

  @media (max-width: 1024px) {
    font-size: 20px;
    min-height: 100px;
  }
`;

const TitleCarousel = styled.h2`
  font-size: 60px;
  text-align: center;
  width: 300px;
  font-weight: 400;
  align-self: center;
  width: 100%;
  margin: 0;

  @media (max-width: 1024px) {
    font-size: 40px;
  }
`;
