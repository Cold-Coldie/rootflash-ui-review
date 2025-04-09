import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import styled from "styled-components";

import Home from "./pages/Home";
import About from "./pages/About";
import Career from "./pages/Career";
import Contact from "./pages/Contact";

const colors = {
  primary: "#3b82f6",
  primaryDark: "#2563eb",
  primaryLight: "#60a5fa",
  dark: "#1e293b",
  light: "#f8fafc",
  accent: "#6366f1",
  gray: "#94a3b8",
};

const AppContainer = styled.div`
  min-height: 100vh;
  font-family: "Inter", "Segoe UI", system-ui, -apple-system, sans-serif;
  display: flex;
  flex-direction: column;
  background-color: ${colors.light};
  color: ${colors.dark};
`;

const Nav = styled.nav`
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(8px);
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 10;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const NavTitleContainer = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
`;

const Logo = styled.div`
  background-color: ${colors.primary};
  color: white;
  width: 36px;
  height: 36px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.2rem;
`;

const NavTitle = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${colors.dark};
  span {
    color: ${colors.primary};
  }
`;

const NavList = styled.ul`
  display: flex;
  gap: 1.5rem;
  list-style: none;
  padding: 0;
  margin: 0;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-around;
  }
`;

const NavItem = styled.li`
  position: relative;
`;

const StyledLink = styled(Link)`
  color: ${(props) => (props.$active ? colors.primary : colors.dark)};
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 0.25rem;
  position: relative;
  transition: color 0.2s ease;

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: ${(props) => (props.$active ? "100%" : "0")};
    height: 2px;
    background-color: ${colors.primary};
    transition: width 0.3s ease;
  }

  &:hover {
    color: ${colors.primary};
    &:after {
      width: 100%;
    }
  }
`;

const Main = styled.main`
  padding: 2rem;
  flex: 1;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`;

const Footer = styled.footer`
  background-color: ${colors.dark};
  color: ${colors.light};
  padding: 2rem;
  margin-top: auto;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const FooterSection = styled.div`
  h3 {
    font-size: 1.1rem;
    margin-bottom: 1rem;
    position: relative;
    &:after {
      content: "";
      position: absolute;
      bottom: -8px;
      left: 0;
      width: 40px;
      height: 3px;
      background-color: ${colors.primary};
    }
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    li {
      margin-bottom: 0.5rem;

      a {
        color: white;
      }
    }
  }
`;

const FooterBottom = styled.div`
  text-align: center;
  padding-top: 2rem;
  margin-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 0.9rem;
  color: ${colors.gray};
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialIcon = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;
  cursor: pointer;

  &:hover {
    background-color: ${colors.primary};
  }
`;

function NavLink({ to, children }) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <NavItem>
      <StyledLink to={to} $active={isActive}>
        {children}
      </StyledLink>
    </NavItem>
  );
}

function PageWrapper({ children }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    return () => setIsVisible(false);
  }, []);

  return (
    <div
      style={{
        opacity: isVisible ? 1 : 0,
        transition: "opacity 0.3s ease-in-out",
      }}
    >
      {children}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContainer>
        <Nav>
          <NavTitleContainer to={"/"}>
            <Logo>R</Logo>
            <NavTitle>
              Root<span>flash</span> Technologies
            </NavTitle>
          </NavTitleContainer>

          <NavList>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/career">Career</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </NavList>
        </Nav>

        <Main>
          <Routes>
            <Route
              path="/"
              element={
                <PageWrapper>
                  <Home />
                </PageWrapper>
              }
            />
            <Route
              path="/about"
              element={
                <PageWrapper>
                  <About />
                </PageWrapper>
              }
            />
            <Route
              path="/career"
              element={
                <PageWrapper>
                  <Career />
                </PageWrapper>
              }
            />
            <Route
              path="/contact"
              element={
                <PageWrapper>
                  <Contact />
                </PageWrapper>
              }
            />
          </Routes>
        </Main>

        <Footer>
          <FooterContent>
            <FooterSection>
              <h3>Rootflash Technologies</h3>
              <p>Innovative solutions for tomorrow's challenges.</p>
              <SocialLinks>
                <SocialIcon>
                  <span>f</span>
                </SocialIcon>
                <SocialIcon>
                  <span>in</span>
                </SocialIcon>
                <SocialIcon>
                  <span>t</span>
                </SocialIcon>
              </SocialLinks>
            </FooterSection>

            <FooterSection>
              <h3>Quick Links</h3>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/career">Careers</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
            </FooterSection>

            <FooterSection>
              <h3>Contact Info</h3>
              <ul>
                <li>123 Tech Avenue</li>
                <li>Innovation District</li>
                <li>contact@rootflash.tech</li>
                <li>+1 (123) 456-7890</li>
              </ul>
            </FooterSection>
          </FooterContent>

          <FooterBottom>
            © {new Date().getFullYear()} Rootflash Technology. All rights
            reserved.
          </FooterBottom>
        </Footer>
      </AppContainer>
    </Router>
  );
}

export default App;
