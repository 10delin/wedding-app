import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #f9f4ef;
  color: #5c4d3d;
  padding: 20px 40px;
  text-align: center;
  border-top: 2px solid #e3d7c3;
`;

const FooterContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 10px;
`;

const Date = styled.p`
  font-size: 1.2rem;
  margin-bottom: 15px;
`;

const Message = styled.p`
  font-size: 1rem;
`;

const Footer = ({ data, date }) => {
  return (
    <FooterContainer>
      <FooterContent>
        <Title>{data.title}</Title>
        <Date>{date}</Date>
        <Message>{data.acknowledgements}</Message>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
