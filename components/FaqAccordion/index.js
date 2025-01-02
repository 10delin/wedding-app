import React, { useState } from "react";
import styled from "styled-components";
import VisibilityAnimation from "../VisibilityAnimation";

const FAQAccordion = ({ data }) => {
  const [activeQuestions, setActiveQuestions] = useState([]);

  const toggleQuestion = (id) => {
    setActiveQuestions((prev) =>
      prev.includes(id)
        ? prev.filter((questionId) => questionId !== id)
        : [...prev, id]
    );
  };

  return (
    <VisibilityAnimation>
      <FAQAccordionWrapper id="headerItem3">
        <AccordionContainer>
          <Title>{data.title}</Title>
          {data.questions.map((item) => (
            <QuestionContainer key={item.id}>
              <Question onClick={() => toggleQuestion(item.id)}>
                {item.question}
                <Arrow active={activeQuestions.includes(item.id)} />
              </Question>
              <Answer active={activeQuestions.includes(item.id)}>
                {item.answer}
              </Answer>
            </QuestionContainer>
          ))}
        </AccordionContainer>
      </FAQAccordionWrapper>
    </VisibilityAnimation>
  );
};

export default FAQAccordion;

// Estilos
const FAQAccordionWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 100px 0;

  & > div {
    max-width: 800px;
    width: 100%;
    padding: 20px;
    margin: 0 20px;
  }
`;

const AccordionContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 100px 0;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 0px 8px rgba(0, 0, 0, 0.5);
  font-family: sans-serif;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 60px;
  margin-bottom: 50px;
  font-family: "Caudex", serif;

  @media (max-width: 768px) {
    font-size: 40px;
  }
`;

const QuestionContainer = styled.div`
  margin-bottom: 15px;
`;

const Question = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  font-size: 16px;
  padding: 20px 40px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  transition: background-color 0.3s ease-in;

  &:hover {
    background-color: #f0f0f0;
  }

  &:active {
    background-color: #e0e0e0;
  }

  &:focus {
    background-color: #e0e0e0;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 15px 20px;
    gap: 15px;
  }
`;

const Arrow = styled.div`
  min-width: 10px;
  width: 10px;
  height: 10px;
  border-left: 2px solid #333;
  border-bottom: 2px solid #333;
  transform: ${({ active }) => (active ? "rotate(-44deg)" : "rotate(137deg)")};
  transition: transform 0.3s ease-in;
`;

const Answer = styled.div`
  max-height: ${({ active }) => (active ? "200px" : "0")};
  overflow: hidden;
  padding: ${({ active }) => (active ? "20px 40px" : "0 40px")};
  background-color: #fff;
  border: 1px solid #ddd;
  border-top: none;
  border-radius: ${({ active }) => (active ? "0 0 5px 5px" : "5px")};
  font-size: 16px;
  color: #555;
  transition: max-height 0.4s ease-in-out,
    padding 0.3s ease-in-out ${({ active }) => (active ? "0s" : "0.1s")},
    opacity 0.3s ease-in-out;
  opacity: ${({ active }) => (active ? "1" : "0")};

  @media (max-width: 768px) {
    font-size: 14px;
    padding: ${({ active }) => (active ? "15px 20px" : "0 20px")};
  }
`;
