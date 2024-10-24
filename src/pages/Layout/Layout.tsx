import { useLocation, useNavigate } from "react-router-dom"
import { LayoutProps } from "./types"
import { MdAccountCircle } from "react-icons/md"

import {
  LayoutWrapper,
  Header,
  HeaderContentWrapper,
  HeaderLogoContainer,
  HeaderLogo,
  NavContainer,
  Main,
  Footer,
  FooterContentWrapper,
  StyledNavLink,
  FooterNavContainer,
  UserName,
  AccountContainer,
  FooterLeftLink,
  Copyright,
  StyledButton,
  NavContainerLink
} from "./styles"
import { LogoH } from "assets"
import {
  authSliceActions,
  authSliceSelectors,
} from "store/redux/auth/authSlice"
import { useAppDispatch, useAppSelector } from "store/hooks"
import Button from "components/Button/Button"
import Modal from "components/Modal/Modal"
import { useEffect, useState } from "react"

function Layout({ children }: LayoutProps) {
  const navigate = useNavigate()

  const goToHomePage = () => {
    navigate("/")
    setIsModalOpen(false)
  }

  const isLogin = useAppSelector(authSliceSelectors.isLogin)
  const userData = useAppSelector(authSliceSelectors.userData)
  const dispatch = useAppDispatch()

  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => setIsModalOpen(true)
  const handleCloseModal = () => setIsModalOpen(false)

  const toLogin = () => {
    dispatch(authSliceActions.resetErrorField())
    navigate("/login")
  }

  const location = useLocation();
  useEffect(() => {
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
    return () => {
      window.history.scrollRestoration = 'auto'; // Восстанавливаем стандартное поведение при демонтировании
    };
  }, [location.pathname]);

  return (
    <LayoutWrapper>
      <Header>
        <HeaderContentWrapper>
          <HeaderLogoContainer onClick={goToHomePage}>
            <HeaderLogo src={LogoH} />
          </HeaderLogoContainer>
          <NavContainer>
            <NavContainerLink>
              <StyledNavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Home
              </StyledNavLink>
              <StyledNavLink
                to="/guide"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={() => navigate("/guide")}
              >
                Anleitung
              </StyledNavLink>
              <StyledNavLink
                to="/mypots"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={() => navigate("/mypots")}
              >
                Töpfe
              </StyledNavLink>
            </NavContainerLink>
            {isLogin ? (
              <StyledNavLink to="/account" onClick={() => navigate("/account")}>
                <AccountContainer>
                  <MdAccountCircle />
                  <UserName>{userData ? userData.username : null}</UserName>
                </AccountContainer>
              </StyledNavLink>
            ) : (
              <StyledButton>
                <Button name="Anmelden" bgColorIsRed onButtonClick={toLogin} />
              </StyledButton>
            )}
          </NavContainer>
        </HeaderContentWrapper>
      </Header>
      <Main>{children}</Main>
      <Footer>
        <FooterContentWrapper>
          <FooterNavContainer>
            <FooterLeftLink to="/legalInfo">
              Gesetzliche Informationen
            </FooterLeftLink>
            <FooterLeftLink to="">Datenschutz</FooterLeftLink>
            <FooterLeftLink to="">Nutzungsbedingungen</FooterLeftLink>
            <FooterLeftLink to="">Impressum</FooterLeftLink>
          </FooterNavContainer>
          <Copyright>
            <p>Copyright © 2024 LeafGrow</p>
          </Copyright>
        </FooterContentWrapper>
      </Footer>
    </LayoutWrapper>
  )
}

export default Layout
