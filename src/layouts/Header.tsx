import styled from "styled-components";

const NavigationHeader = styled.header`
  display: flex;
  justify-content: center;
`;
const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 70%;
`;

const NavLink = styled.a`
  margin-left: auto;
`;

function Header() {
  return (
    <NavigationHeader>
      <Nav>
        <h1>Invest Guinea</h1>
        <NavLink href="">Qui sommes nous</NavLink>
        <NavLink href="">Suggérer</NavLink>
        <NavLink href="">Nous soutenir</NavLink>
      </Nav>
    </NavigationHeader>
  );
}

export default Header;
