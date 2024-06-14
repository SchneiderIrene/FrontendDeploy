import { useNavigate } from "react-router-dom"
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
  NavContainerLink,
  ModalContainer,
  ModalTextWrapper,
  ArrowIcon,
  ModalText,
} from "./styles"
import { LogoH } from "assets"
import {
  authSliceActions,
  authSliceSelectors,
} from "store/redux/auth/authSlice"
import { useAppDispatch, useAppSelector } from "store/hooks"
import Button from "components/Button/Button"
import Modal from "components/Modal/Modal"
import { useState } from "react"

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
              {isLogin ? (
                <StyledNavLink
                  to="/guide"
                  className={({ isActive }) => (isActive ? "active" : "")}
                  onClick={() => navigate("/guide")}
                >
                  Anleitung
                </StyledNavLink>
              ) : (
                <StyledNavLink
                  to="/guide"
                  className={({ isActive }) => (isActive ? "active" : "")}
                  onClick={handleOpenModal}
                >
                  Anleitung
                </StyledNavLink>
              )}
              {isLogin ? (
                <StyledNavLink
                  to="/mypots"
                  className={({ isActive }) => (isActive ? "active" : "")}
                  onClick={() => navigate("/mypots")}
                >
                  Töpfe
                </StyledNavLink>
              ) : (
                <StyledNavLink
                  to="/mypots"
                  className={({ isActive }) => (isActive ? "active" : "")}
                  onClick={handleOpenModal}
                >
                  Töpfe
                </StyledNavLink>
              )}
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
            {!isLogin && (
              <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                <ModalContainer>
                  <ModalTextWrapper>
                    <ModalText>
                      Diese Seite ist nur für registrierte und eingeloggte
                      Benutzer/innen verfügbar
                    </ModalText>
                    <Button
                      name={
                        <span>
                          Zurück zum Homepage <ArrowIcon>→</ArrowIcon>
                        </span>
                      }
                      bgColorIsRed
                      onButtonClick={goToHomePage}
                    />
                  </ModalTextWrapper>
                </ModalContainer>
              </Modal>
            )}
          </NavContainer>
        </HeaderContentWrapper>
      </Header>
      <Main>{children}</Main>
      <Footer>
      <FooterContentWrapper>
         <FooterNavContainer>
          <FooterLeftLink to="/gesetzinfo">Gesetzliche Informationen</FooterLeftLink>
          <FooterLeftLink to="/impressum">Datenschutz</FooterLeftLink>
          <FooterLeftLink to="/nutzungsbedingungen">Nutzungsbedingungen</FooterLeftLink>
          <FooterLeftLink to="/impressum">Impressum</FooterLeftLink>
        </FooterNavContainer>
        <Copyright>
          <p>Copyright © 2024 LeafGrow</p>
        </Copyright>
        </FooterContentWrapper>
      </Footer>
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          <ModalContainer>
            <ModalTextWrapper>
              <ModalText>
                Diese Seite ist nur für registrierte und eingeloggte
                Benutzer/innen verfügbar
              </ModalText>
              <Button
                name={
                  <span>
                    Zurück zum Homepage <ArrowIcon>→</ArrowIcon>
                  </span>
                }
                bgColorIsRed
                onButtonClick={goToHomePage}
              />
            </ModalTextWrapper>
          </ModalContainer>
        </Modal>
      )}
    </LayoutWrapper>
  )
}

export default Layout
