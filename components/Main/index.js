import styled from "styled-components";
import MainImage from "@/tools/images/prueba.jpg";
import { keyframes } from "styled-components";
import Countdown from "@/components/Countdown";

const Main = ({data}) => (
  <MainWrapper>
    <BackgroundImage />
    <MainContent>
      <Countdown targetDate={data?.countdown?.date} />
      <h1>{data?.title}</h1>
      <DescriptionContent>
        <DescriptionItem>{data.dateFormat}</DescriptionItem>
        <Separator />
        <DescriptionItem>{data?.location.ceremony.address}</DescriptionItem>
      </DescriptionContent>
      <ConfirmAssistButton
        href={data?.link_form}
        target="_blank"
        rel="noreferrer"
      >
        {data?.confirm_assist}
      </ConfirmAssistButton>
    </MainContent>
  </MainWrapper>
);

export default Main;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  min-height: 160vh;
  overflow: hidden;

  @media (max-width: 768px) {
    justify-content: center;
    min-height: 100vh;
  }
`;

const Separator = styled.span`
  display: inline-block;
  width: 1px;
  height: auto;
  background-color: black;
  margin: 0 10px;
  align-self: stretch; /* Esto asegura que la línea ocupe toda la altura del contenedor */
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: -100px;
  left: 0;
  right: -200px;
  bottom: 0;
  background-image: url("${MainImage.src}");
  background-size: cover;
  background-position: center;
  filter: grayscale(5%) brightness(85%);
  z-index: -1;

  @media (max-width: 768px) {
    top: -200px;
  }
`;

const MainContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  color: white;
  text-align: center;
  z-index: 1;
  gap: 50px;
  max-width: 700px;
  justify-content: center;
  align-items: center;
  margin-top: 100px;

  h1 {
    font-size: 100px;
    margin: 0;
    font-weight: 500;
    text-transform: uppercase;

    @media (max-width: 768px) {
      font-size: 46px;
    }
  }

  button {
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    gap: 40px;
    padding: 0 20px;
    margin-top: 50px;
  }
`;

const DescriptionItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0;
  font-size: 20px;
  font-weight: 300;
  width: 100%;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const SlideAndAppears = keyframes`
  0% {
    transform: translateY(120px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const glow = keyframes`
  0% {
    box-shadow: none;
  }
  25% {
    box-shadow: 0 0 10px #f9bd43, 0 0 15px #f9bd43, 0 0 20px #f9bd43;
  }
  50% {
    box-shadow: 0 0 15px #f9bd43, 0 0 30px #f9bd43, 0 0 45px #f9bd43;
  }
  75% {
    box-shadow: 0 0 10px #f9bd43, 0 0 20px #f9bd43, 0 0 30px #f9bd43;
  }
  100% {
    box-shadow: none;
  }
`;

const DescriptionContent = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 20px;
  gap: 10px;
  font-weight: 300;
  background-color: white;
  color: black;
  padding: 20px 40px;
  border-radius: 50px;
  animation: ${SlideAndAppears} 1.5s ease-out;

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 15px 40px;
  }
`;

const ConfirmAssistButton = styled.a`
  background-color: #f9bd43;
  color: black;
  font-size: 20px;
  font-weight: 300;
  padding: 20px 40px;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.3s ease;
  text-transform: uppercase;
  border: 1px solid #f9bd43;

  animation: ${SlideAndAppears} 1.5s ease-out, ${glow} 3s ease-in-out 1.5s 2;
  animation-fill-mode: forwards;

  &:hover {
    background-color: white;
    color: #f9bd43;
    border: 1px solid #f9bd43;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 15px 40px;
  }
`;
