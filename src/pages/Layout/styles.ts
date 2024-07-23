import styled from "@emotion/styled"
import { NavLink, Link } from "react-router-dom"
import { LogoH } from "assets"

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 1.04vw;
  width: 100%;
  background-color: #fffeef;
  min-height: 100vh;
  overflow: hidden;
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-width: 72.916vw;
  padding: 1.04vw 13.54vw;
  height: 5.2vw;
  background-color: #007132;

  @media (max-width: 480px) {
    padding: 2.08vw;
    height: 20.83vw;
    gap: 4vw;
    justify-content: center;
  }
`

export const HeaderContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media (max-width: 480px) {
    padding: 1.04vw;
    justify-content: space-between;
  }
`

export const NavContainerLink = styled.div`
  display: flex;
  align-items: center;
  gap: 2.08vw;
  text-decoration: none;
  @media (max-width: 480px) {
    gap: 14vw;
  }
`

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-family: Inter;
  font-size: 1.04vw;
  color: #fffeef;
  font-weight: 600;
  &:hover {
    text-decoration: none;
  }
  @media (max-width: 480px) {
    font-size: 12px;
  }
`

export const NavContainer = styled.nav`
  display: flex;
  justify-content: flex-end;
  gap: 1.04vw;
  flex-wrap: wrap;
  @media (max-width: 480px) {
    justify-content: center;
    flex-direction: column;
    gap: 3vw;
  }
`

export const HeaderLogoContainer = styled.div`
  margin-left: 2.08vw;
  cursor: pointer;
`

export const HeaderLogo = styled.img`
  width: 5.2vw;
  height: 100%;
  object-fit: contain;
  @media (max-width: 480px) {
    width: 15vw;
  }
`

HeaderLogo.defaultProps = { src: LogoH }

export const Main = styled.main`
  display: flex;
  flex: 1;
  box-sizing: border-box;
  width: 100%;
  max-width: 72.91vw;
  margin: 0 auto;
  @media (max-width: 480px) {
    flex-direction: column;
  }
`

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  min-width: 72.916vw;
  width: 100%;
  padding: 1.04vw 13.54vw;
  justify-content: space-between;
  align-items: center;
  color: #373e3a;
  @media (max-width: 480px) {
    
  }
`

export const FooterContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
  /* @media (min-width: 481px) and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  } */
`

export const FooterNavContainer = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1.25vw;
  flex-wrap: wrap;
  margin-top: 0.52vw;
  margin-bottom: 0.729vw;
  /* @media (max-width: 768px) {
    gap: 12px;
  } */
  @media (max-width: 480px) {
    gap: 6px;
    margin-top: 5px;
    margin-bottom: 12px;
  }
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 0.729vw;
  color: #373e3a;
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  &:hover {
    text-decoration: underline;
  }
`

export const UserName = styled.div`
  font-size: 1.25vw;
  @media (max-width: 480px) {
    font-size: 16px;
  }
`

export const AccountContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.52vw;
  
  @media (max-width: 480px) {
    margin-left: 80px;
  }
`

export const StyledButton = styled.div`
  width: 11.25vw;
  right: 0;
  @media (max-width: 480px) {
    width: 64vw;
  }
`

export const FooterLeftLink = styled(StyledLink)`
  color: #373e3a;
  font-size: 0.729vw;
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-right: 0.52vw;
  @media (max-width: 480px) {
    font-size: 9px;
  }
  /* @media (min-width: 481px) and (max-width: 768px) {
    font-size: 12px;
  } */
`
export const FooterText = styled.p`
  font-size: 0.729vw;
  color: #373e3a;
  display: inline-block;
`
export const Copyright = styled.div`
  color: #373e3a;
  font-family: "DM Sans";
  font-size: 0.729vw;
  font-weight: 500;
  @media (max-width: 480px) {
    font-size: 8px;
  }
  /* @media (min-width: 481px) and (max-width: 768px) {
    font-size: 12px;
  } */
`

export const CopyrightText = styled.p`
  font-size: 0.729vw;
  color: #373e3a;
`