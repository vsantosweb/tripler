import styled from "styled-components";

const media = (size) => "@media (max-width: " + size + "px)";

export const Container = styled.div`
  width: 100%;
  display: block;
  box-sizing: border-box;
  width: 100%;
  background-color: #fff;
  position: ${({ overlay }) => (overlay ? "absolute" : "relative")};
  border-bottom: solid 1px #ddd;
  font-family: ${(props) => props.theme.fonts[0]};
`;

export const Header = styled.section`
  font-size: ${({ isHeading, theme: { sizes } }) =>
    isHeading ? sizes.lg : sizes.sm};
  color: ${({ theme }) => theme.colors.primary};
  max-width: ${(props) => props.theme.defaultContainer};
  margin: auto;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem 0;
  column-gap: 0.7rem;
`;
export const Area = styled.div`
  ${media(720)} {
    flex-wrap: nowrap;
  }
`;

export const NavbarArea = styled(Area)`
  flex: 1;
`;

export const Nav = styled.nav`
  ${media(720)} {
    display: ${({ navOpen }) => (navOpen ? "block" : "none")};
    position: absolute;
    z-index: 1;
    background: #fff;
    width: 100%;
    right: 0;
    padding-bottom: 1em;
    top: 58px;
    z-index: 99999;
  }
`;
export const NavLink = styled.a`
  font-weight: bold;
  ${media(720)} {
    display: block;
    padding: 0.8em;
  }
  color: ${({ theme, color }) => "#333"};
  padding: 0.2em 0.5em;
  &:hover {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Search = styled.input`
  border: 1px solid rgb(189, 194, 201);
  transition: border 0.3s ease 0s;
  position: relative;
  box-shadow: rgb(25 31 40 / 15%) 0px 1px 2px 0px;
  border-radius: 8px;
  padding: 8px;
  height: 48px;
  box-sizing: border-box;
  display: flex;
  flex: 2 1 0%;
  background-color: rgb(255, 255, 255);
  width: 600px;
`;
