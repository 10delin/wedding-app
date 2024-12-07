import styled from "styled-components";

const HeaderStyles = styled.div`
  display: block;
  position: fixed;
  bottom: 0;
  color: #5c4d3d;
  width: 100%;
  background-color: #f9f4ef;
  z-index: 2;

  @media (min-width: 768px) {
    position: fixed;
    bottom: initial;
    top: 0;
  }
`;

const HeaderContentStyles = styled.div`
  display: flex;
  align-items: center;
  box-shadow: 0 -2px 4px 0 rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  padding: 0 5%;

  @media (min-width: 768px) {
    padding: 0 10%;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  }

  @media (min-width: 1024px) {
    padding: 0 10%;
  }

  @media (min-width: 1440px) {
    padding: 0 15%;
  }
`;

const HeaderDescriptionStyles = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 1.2rem;
  font-weight: 350;
  width: 100%;
  justify-content: space-evenly;
  gap: 10px;

  @media (min-width: 768px) {
    justify-content: flex-end;
    gap: 0;
  }
`;

const HeaderItemStyles = styled.p`
  position: relative;
  margin: 30px 15px;
`;

const HeaderItemLinkStyles = styled.a`
  padding: 19px 3px;
  text-decoration: none;
  color: #5c4d3d;
  font-size: 1rem;
  font-weight: 600;
  transition: color 0.3s;

  @media (min-width: 768px) {
    padding: 30px 15px;
    font-size: 1.2rem;
  }

  &::after {
    background: none repeat scroll 0 0 transparent;
    content: "";
    display: block;
    height: 3px;
    left: 50%;
    position: absolute;
    background: #5c4d3d;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;

    @media (min-width: 768px) {
      bottom: -30px;
      top: initial;
      height: 3px;
    }
  }

  &:hover {
    background-color: white;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    color: #d5bea8;
  }

  &:hover::after {
    width: 100%;
    left: 0;
  }
`;

const HeaderTitleStyles = styled.h1`
  font-size: 34px;
  font-weight: 600;
  color: #5c4d3d;
  margin: 0;
  padding: 15px 0;
  letter-spacing: 3px;
`;

const Header = ({data}) => {
  return (
    <HeaderStyles>
      <HeaderContentStyles>
        <HeaderTitleStyles>V&P</HeaderTitleStyles>
        <HeaderDescriptionStyles>
          {data?.map((item) => (
            <HeaderItemStyles key={item}>
              <HeaderItemLinkStyles href={`#${item}`}>{item}</HeaderItemLinkStyles>
            </HeaderItemStyles>
          ))}
        </HeaderDescriptionStyles>
      </HeaderContentStyles>
    </HeaderStyles>
  );
};

export default Header;
