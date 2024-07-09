import styled from "@emotion/styled"
import { NavLink, Link } from "react-router-dom"
import { LogoH } from "assets"

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 20px;
  width: 100%;
  background-color: #fffeef;
  min-height: 100vh;
  overflow: hidden;
`

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px 0px;
  margin: 0 auto;
  height: 100px;
  background-color: #007132;
  @media (max-width: 768px) {
    padding: 10px 0px;
  }
`

export const HeaderContentWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  padding: 0 2%;
`

export const NavContainerLink = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  text-decoration: none;
  @media (max-width: 768px) {
    gap: 20px;
  }
`

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-family: Inter;
  font-size: 20px;
  color: #fffeef;
  font-weight: 600;
  &:hover {
    text-decoration: none;
  }
  @media (max-width: 768px) {
    font-size: 16px;
  }
`

export const NavContainer = styled.nav`
  display: flex;
  justify-content: flex-end;
  padding: 8px;
  gap: 20px;
  flex: 1;
  flex-grow: 1;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    justify-content: center;
  }
`

export const HeaderLogoContainer = styled.div`
  margin-left: auto;
  cursor: pointer;
`

export const HeaderLogo = styled.img`
  width: 100px;
  height: 100%;
  object-fit: contain;
  @media (max-width: 768px) {
    width: 80px;
  }
`

HeaderLogo.defaultProps = { src: LogoH }

export const Main = styled.main`
  display: flex;
  flex: 1;
  padding: 20px;
  box-sizing: border-box;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 10px;
  }
`

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  padding: 30px 70px;
  width: 100%;
  justify-content: space-between;
  color: #373e3a;
  @media (max-width: 768px) {
    padding: 20px 20px;
  }
`

export const FooterContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`

export const FooterNavContainer = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 24px;
  flex-wrap: wrap;
  margin-top: 10px;
  margin-bottom: 14px;
  @media (max-width: 768px) {
    gap: 12px;
  }
  @media (max-width: 480px) {
    gap: 6px;
    margin-top: 5px;
    margin-bottom: 12px;
  }
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 14px;
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
  font-size: 24px;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`

export const AccountContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

export const StyledButton = styled.div`
  width: 216px;
  right: 0;
`

export const FooterLeftLink = styled(StyledLink)`
  color: #373e3a;
  font-size: 14px;
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-right: 10px;
  @media (max-width: 480px) {
    font-size: 10px;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 12px;
  }
`
export const FooterText = styled.p`
  font-size: 14px;
  color: #373e3a;
  display: inline-block;
`
export const Copyright = styled.div`
  color: #373e3a;
  font-family: "DM Sans";
  font-size: 14px;
  font-weight: 500;
  @media (max-width: 480px) {
    font-size: 10px;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 12px;
  }
`

export const CopyrightText = styled.p`
  font-size: 14px;
  color: #373e3a;
`