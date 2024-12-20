import React, { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import styled from "styled-components";

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
    <Container>
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

      {/* Aquí mostramos el texto fuera del carrusel */}
      <TextWrapper>{images[activeIndex].description}</TextWrapper>
    </Container>
  );
};

export default Carousel;

// Estilización con styled-components
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  flex-direction: row; /* Por defecto, el texto estará a la derecha de la imagen */
  gap: 50px;
  margin-bottom: 70px;
  margin-top: -190px;

  @media (max-width: 1024px) {
    flex-direction: column; /* En pantallas pequeñas, el texto irá debajo de la imagen */
    gap: 30px; /* No habrá espacio entre la imagen y el texto */
    margin-top: 50px;
    margin-bottom: 0px;
    padding: 0px;
  }
`;

const SliderWrapper = styled.div`
  width: 50%; /* Ajusta el tamaño del carrusel */

    @media (max-width: 1024px) {
    width: 80%; /* En pantallas pequeñas, el carrusel ocupará todo el ancho */
    }
`;

const SlideContainer = styled.div`
  display: flex !important;
  align-items: center;
  justify-content: flex-start;


  img {
    object-fit: cover;
    border-radius: 10px;
    max-width: 500px !important;
    min-width: 500px;
    max-height: 625px !important;
    min-height: 625px !important;
    width: 100%;
    height: auto;
  }

  @media (max-width: 1024px) {
    img {
      object-fit: cover;
      border-radius: 10px;
      max-width: 100% !important;
      min-width: 100%;
      max-height: 450px !important;
      min-height: 450px !important;
      justify-content: center;
    }
  }
`;

const ImageWrapper = styled.div`
`;

const TextWrapper = styled.div`
  font-size: 50px;
  font-weight: bold;
  text-align: center;
  width: 300px; /* Ajusta el tamaño del contenedor de texto */

  @media (max-width: 1024px) {
    font-size: 20px;
    min-height: 100px;
  }
`;
