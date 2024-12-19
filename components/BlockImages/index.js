import Example1 from "@/tools/images/ejemplo1.webp";
import Example2 from "@/tools/images/ejemplo2.webp";
import styled from "styled-components";
import VisibilityAnimation from "../VisibilityAnimation";

const BlockImages = () => {
  return (
    <BlockImagesStyles>
      <BlockLeftImageStyles>
        <VisibilityAnimation transitionDelay={0.2}>
          <img src={Example1.src} alt="Example 1" />
        </VisibilityAnimation>
        <TextContent>
          <VisibilityAnimation transitionDelay={0.3}>
            <TextTitle>Ceremonia</TextTitle>
            <TextDescription>
              Viernes, Oct. 20, a domingo, Oct. 22, 2023
            </TextDescription>
          </VisibilityAnimation>
        </TextContent>
      </BlockLeftImageStyles>
      <BlockRightImageStyles>
        <VisibilityAnimation transitionDelay={0.2}>
          <img src={Example2.src} alt="Example 2" />
        </VisibilityAnimation>
        <TextContent>
          <VisibilityAnimation transitionDelay={0.3}>
            <TextTitle>Recepción</TextTitle>
            <TextDescription>
              Viernes, Oct. 20, a domingo, Oct. 22, 2023
            </TextDescription>
          </VisibilityAnimation>
        </TextContent>
      </BlockRightImageStyles>
    </BlockImagesStyles>
  );
};

export default BlockImages;

const BlockImagesStyles = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: -90px 0;
  gap: 50px;
  z-index: 2;

  img {
    width: 100%;
    max-width: 600px;
    height: auto;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    margin: 0;
    width: 100%;
    margin-top: 100px;
  }
`;

const BlockLeftImageStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;

  @media (max-width: 768px) {
    gap: 5px;
    width: 80%
  }
`;

const BlockRightImageStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;

  @media (max-width: 768px) {
    gap: 5px;
    width: 80%;
  }
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    gap: 10px;
  }
`;

const TextTitle = styled.h2`
  font-size: 60px;
  font-weight: 400;
  color: black;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 40px;
    text-align: center;
  }
`;

const TextDescription = styled.p`
  font-size: 16px;
  color: black;

  @media (max-width: 768px) {
    font-size: 14px;
    text-align: center;
  }
`;
