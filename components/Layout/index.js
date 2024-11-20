import styled from "styled-components";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Layout = ({ data, children }) => {
  return (
    <Container>
      <Header data={data.header} />
      <Main>{children}</Main>
      <Footer data={data.footer} date={data.date} />
    </Container>
  );
};

export default Layout;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.main`
  flex: 1; 
`;
