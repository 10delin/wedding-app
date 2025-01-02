import styled from "styled-components";
import VisibilityAnimation from "@/components/VisibilityAnimation";
import RingsImage from "@/tools/images/rings.webp";

const Rings = ({ data }) => {
  return (
    <ContentStyles>
      <div>
        <MainDescriptionStyles>
          <MainDescriptionTitleStyles>
            <VisibilityAnimation>
              <MainDescriptionTitleTop>{data?.title}</MainDescriptionTitleTop>
            </VisibilityAnimation>

            <VisibilityAnimation>
              <MainDescriptionTitleBottom>
                {data?.date}
              </MainDescriptionTitleBottom>
            </VisibilityAnimation>
          </MainDescriptionTitleStyles>

          <VisibilityAnimation transitionDelay={0.3}>
            <MainDescriptionImageStyles src={RingsImage.src} alt="Rings" />
          </VisibilityAnimation>

          <MainDescriptionContentStyles>
            <VisibilityAnimation transitionDelay={0.6}>
              <MainDescriptionContentTop>
                {data?.subtitle}
              </MainDescriptionContentTop>
            </VisibilityAnimation>

            <VisibilityAnimation transitionDelay={0.6}>
              <MainDescriptionContentBottom>
                {data?.description}
              </MainDescriptionContentBottom>
            </VisibilityAnimation>
          </MainDescriptionContentStyles>
        </MainDescriptionStyles>
      </div>
    </ContentStyles>
  );
};

export default Rings;

const ContentStyles = styled.div`
  width: 100%; /* Asegura que ocupe todo el ancho del viewport */
  background-color: rgb(172 125 35);
  display: flex;
  justify-content: center;
  font-size: 30px;

  /* Contenedor interno para limitar el ancho del contenido */
  & > div {
    max-width: 1300px; /* Define el ancho máximo del contenido */
    width: 100%; /* Para que no se salga del área visible */
    padding: 100px 50px 200px 50px; /* Espaciado interno */
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 768px) {
      max-width: 1100px;
      padding: 100px 0 100px 0;
      font-size: 20px;
    }
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
    padding: 0px;
    width: 80%;
  }
`;

const MainDescriptionTitleStyles = styled.div`
  display: flex;
  font-weight: 300;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 30px;
  width: 100%;

  @media (max-width: 768px) {
    align-items: center;
    justify-content: center;
    gap: 0px;
  }
`;

const MainDescriptionTitleTop = styled.span`
  display: block;
  text-align: center;
`;

const MainDescriptionTitleBottom = styled.span`
  display: block;
  text-align: left;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const MainDescriptionImageStyles = styled.img`
  width: 100%;
  color: white;
  height: auto;
  max-width: 400px;
  filter: brightness(0) invert(1);

  @media (max-width: 768px) {
    max-width: 150px;
  }
`;

const MainDescriptionContentStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  font-weight: 300;
  text-align: center;
  width: 100%;

  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
  }
`;

const MainDescriptionContentTop = styled.span`
  display: block;
  text-align: left;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const MainDescriptionContentBottom = styled.span`
  display: block;
  text-align: left;

  @media (max-width: 768px) {
    text-align: center;
  }
`;
