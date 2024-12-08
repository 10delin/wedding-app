import styled from "styled-components";
import useVisibility from "@/hooks/useVisibility";

const TextContainer = styled.div`
  opacity: ${(props) => (props.isVisible ? "1" : "0")};
  transition: opacity 1s ease-in-out;
  transition-delay: ${(props) => props.delay}s;
`;

const VisibilityAnimation = ({ children, transitionDelay = 0, className }) => {
  const { isVisible, elementRef } = useVisibility();

  return (
    <TextContainer
      ref={elementRef}
      isVisible={isVisible}
      delay={transitionDelay}
      className={className}
    >
      {children}
    </TextContainer>
  );
};

export default VisibilityAnimation;
