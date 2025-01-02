import styled from "styled-components";
import VisibilityAnimation from "../VisibilityAnimation";

const HistoryWedding = ({ data }) => {
  return (
    <HistoryWeddingWrapper id="headerItem2">
      <div>
        <HistoryWeddingContainer>
          <VisibilityAnimation transitionDelay={0.2}>
            <HistoryWeddingTitle>{data?.title}</HistoryWeddingTitle>
          </VisibilityAnimation>
          <VisibilityAnimation transitionDelay={0.4}>
            {data?.content}
          </VisibilityAnimation>
        </HistoryWeddingContainer>
        <VisibilityAnimation transitionDelay={0.6}>
          <ProprosalVideo>
            <video
              src="/tools/videos/proposal.mp4"
              controls
              autoPlay
              loop
              muted
              style={{
                borderRadius: "8px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
              }}
            >
              Your browser does not support the video tag.
            </video>
          </ProprosalVideo>
        </VisibilityAnimation>
      </div>
    </HistoryWeddingWrapper>
  );
};

export default HistoryWedding;

const HistoryWeddingWrapper = styled.div`
  width: 100%;
  background-color: rgb(239 184 77 / 44%); /* Fondo amarillo-naranja */
  display: flex;
  justify-content: center;

  & > div {
    max-width: 1300px;
    width: 100%;
    padding: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 50px;

    @media (max-width: 1024px) {
      max-width: 1100px;
      padding: 100px 20px 100px 20px;
      flex-direction: column;
      gap: 50px;
    }
  }
`;

const HistoryWeddingContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  justify-content: center;
  align-items: center;
  padding: 0px 80px;

  @media (max-width: 1024px) {
    gap: 30px;
    padding: 0px 20px;
  }
`;

const HistoryWeddingTitle = styled.h2`
  font-size: 60px;
  font-weight: 400;
  color: black;
  margin: 0;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 40px;
    text-align: center;
    text-wrap: balance;
  }
`;

const HistoryWeddingContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const ProprosalVideo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  video {
    width: 400px;
    height: auto;
  }

  @media (max-width: 1024px) {
    video {
      width: 100%;
      max-width: 400px;
      height: auto;
    }
  }
`;
