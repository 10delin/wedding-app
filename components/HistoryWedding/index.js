import styled from "styled-components";
import VisibilityAnimation from "../VisibilityAnimation";

const HistoryWedding = () => {
  return (
    <HistoryWeddingWrapper>
      <HistoryWeddingContainer>
        <VisibilityAnimation transitionDelay={0.2}>
          <HistoryWeddingTitle>La historia de la pedida</HistoryWeddingTitle>
        </VisibilityAnimation>
        <VisibilityAnimation transitionDelay={0.4}>
          <HistoryWeddingContent>
            El dia 2 de enero en la playa del Buzo en el puerto de Santa Maria,
            en un dia soleado y con una puesta de sol espectacular, se produjo
            la pedida de mano. Fue un momento muy especial y emotivo, en el que
            ambos disfrutamos de un momento unico.
          </HistoryWeddingContent>
        </VisibilityAnimation>
      </HistoryWeddingContainer>
      <ProprosalVideo>
        <video
          src="/tools/videos/proposal.mp4"
          controls
          width="500"
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
    </HistoryWeddingWrapper>
  );
};

export default HistoryWedding;

const HistoryWeddingWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 100px;
  justify-content: center;
  align-items: center;
  padding: 50px;
  margin: 200px auto;
  max-width: 1200px;

    @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
    }
`;

const HistoryWeddingContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  justify-content: center;
  align-items: center;
`;

const HistoryWeddingTitle = styled.h2`
  font-size: 60px;
  font-weight: 400;
  color: black;
  margin: 0;
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
`;
