import styled from "styled-components";
import useFetchData from "@/hooks/useFetchData";
import Countdown from "@/components/Countdown";
import GlobalStyles from "@/styles/global";
import Layout from "@/components/Layout";
import MainImage from "@/tools/images/ejemplo.webp";
import RingsImage from "@/tools/images/rings.webp";
import { keyframes } from "styled-components";
import VisibilityAnimation from "@/components/VisibilityAnimation";
import BlockImages from "@/components/BlockImages";
import HistoryWedding from "@/components/HistoryWedding";

const Home = () => {
  const { data, loading, error } = useFetchData("/api/weddingInfo");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <GlobalStyles />
      <Layout data={data}>
        <MainWrapper>
          <BackgroundImage />
          <MainContent>
            <Countdown targetDate={data?.countdown?.date} />
            <h1>{data?.title}</h1>
            <DescriptionContent>
              <DescriptionItem>{data.dateFormat}</DescriptionItem>
              <DescriptionItem>{`${data?.location.ceremony.name} | ${data?.location.ceremony.address}`}</DescriptionItem>
            </DescriptionContent>
            <ConfirmAssistButton
              href={data?.link_form}
              target="_blank"
              rel="noreferrer"
            >
              ¡Confirma tu asistencia!
            </ConfirmAssistButton>
          </MainContent>
        </MainWrapper>

        <ContentStyles>
          <div>
            <MainDescriptionStyles>
              <MainDescriptionTitleStyles>
                <VisibilityAnimation>
                  <MainDescriptionTitleTop>
                    Nuestra boda se acerca
                  </MainDescriptionTitleTop>
                </VisibilityAnimation>

                <VisibilityAnimation>
                  <MainDescriptionTitleBottom>
                    Viernes, Oct. 20, a domingo, Oct. 22, 2023
                  </MainDescriptionTitleBottom>
                </VisibilityAnimation>
              </MainDescriptionTitleStyles>

              <VisibilityAnimation transitionDelay={0.3}>
                <MainDescriptionImageStyles src={RingsImage.src} alt="Rings" />
              </VisibilityAnimation>

              <MainDescriptionContentStyles>
                <VisibilityAnimation transitionDelay={0.6}>
                  <MainDescriptionContentTop>
                    Estamos encantados de invitarte a celebrar nuestra boda
                  </MainDescriptionContentTop>
                </VisibilityAnimation>

                <VisibilityAnimation transitionDelay={0.6}>
                  <MainDescriptionContentBottom>
                    Aquí puedes contar tu historia y permitir que tus usuarios
                    sepan más sobre ti.
                  </MainDescriptionContentBottom>
                </VisibilityAnimation>
              </MainDescriptionContentStyles>
            </MainDescriptionStyles>
          </div>
        </ContentStyles>

        <BlockImages />
        <HistoryWedding />

      </Layout>
    </>
  );
};

export default Home;

// Contenedor general para la estructura
const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url("${MainImage.src}");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  filter: grayscale(70%) brightness(65%);
  z-index: -1;
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

  h1 {
    font-size: 110px;
    margin: 0;
    font-weight: 500;
    font-family: "Playfair Display", serif;
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

  &:not(:last-child) {
    border-right: 1px solid black;
  }

  @media (max-width: 768px) {
    font-size: 16px;
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
    box-shadow: none; /* Vuelve al estado original */
  }
`;

const DescriptionContent = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 20px;
  gap: 20px;
  font-weight: 300;
  background-color: white;
  color: black;
  padding: 20px 40px;
  border-radius: 50px;
  animation: ${SlideAndAppears} 1.5s ease-out;

  @media (max-width: 768px) {
    font-size: 16px;
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
`;

const ContentStyles = styled.div`
  width: 100%; /* Asegura que ocupe todo el ancho del viewport */
  background-color: #ac5e23; /* Color de fondo que ocupará todo el ancho */
  display: flex;
  justify-content: center;

  /* Contenedor interno para limitar el ancho del contenido */
  & > div {
    max-width: 1300px; /* Define el ancho máximo del contenido */
    width: 100%; /* Para que no se salga del área visible */
    padding: 100px 0 200px 0%; /* Espaciado interno */
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const MainDescriptionStyles = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 100px;
  background-color: transparent;
  color: white;
  padding: 20px 40px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const MainDescriptionTitleStyles = styled.div`
  display: flex;
  font-size: 20px;
  font-weight: 300;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 30px;
  width: 100%;
`;

const MainDescriptionTitleTop = styled.span`
  display: block;
  font-size: 60px;
  text-align: left;
`;

const MainDescriptionTitleBottom = styled.span`
  display: block;
  font-size: 22px;
  text-align: left;
`;

const MainDescriptionImageStyles = styled.img`
  width: 100%;
  color: white;
  height: auto;
  max-width: 400px;
  filter: brightness(0) invert(1);
`;

const MainDescriptionContentStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  font-size: 16px;
  font-weight: 300;
  text-align: center;
  width: 100%;
`;

const MainDescriptionContentTop = styled.span`
  display: block;
  font-size: 25px;
  text-align: left;
`;

const MainDescriptionContentBottom = styled.span`
  display: block;
  font-size: 20px;
  text-align: left;
`;
