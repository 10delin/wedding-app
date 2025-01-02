import Example1 from "@/tools/images/ubications/san-marcos.jpg";
import Example2 from "@/tools/images/ubications/el-majuelo.jpg";
import styled from "styled-components";
import VisibilityAnimation from "../VisibilityAnimation";

const BlockImages = ({data}) => {
  return (
    <BlockImagesStyles id="headerItem1">
      <BlockLeftImageStyles>
        <VisibilityAnimation transitionDelay={0.2}>
          <a href="https://maps.app.goo.gl/RUNiNHZFYnWJEcwg8" target="_blank" rel="noopener noreferrer">
            <img src={Example1.src} alt="Example 1" />
          </a>
        </VisibilityAnimation>
        <TextContent>
          <VisibilityAnimation transitionDelay={0.3}>
            <TextTitle>{data?.ceremony.title}</TextTitle>
            <TextDescription>
              {data?.ceremony.description}
            </TextDescription>
          </VisibilityAnimation>
        </TextContent>
      </BlockLeftImageStyles>
      <BlockRightImageStyles>
        <VisibilityAnimation transitionDelay={0.2}>
          <a href="https://maps.app.goo.gl/Hno9uNCzbmUgFcEk9" target="_blank" rel="noopener noreferrer">
            <img src={Example2.src} alt="Example 2" />
          </a>
        </VisibilityAnimation>
        <TextContent>
          <VisibilityAnimation transitionDelay={0.3}>
            <TextTitle>{data?.reception.title}</TextTitle>
            <TextDescription>
              {data?.reception.description}
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
  margin: -90px 0 100px 0;
  gap: 50px;
  z-index: 2;
  border-radius: 10px;

  img {
    width: 100%;
    max-width: 400px;
    height: auto;
    border-radius: 10px;
    transition: transform 0.3s ease; /* Transición suave */

    @media (min-width: 769px) {
      &:hover {
        transform: scale(1.05); /* Aumenta ligeramente el tamaño */
      }
    }

    @media (max-width: 768px) {
      max-width: 300px;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    margin: 0;
    margin-top: 100px;
    margin-bottom: 50px;
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
  text-align: center;

  @media (max-width: 768px) {
    text-align: center;
  }
`;
