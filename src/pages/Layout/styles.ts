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
`

export const HeaderContentWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  max-width: 1280px; 
  width: 100%;
  margin: 0 auto; 
  padding: 0 40px; 
  
`

export const NavContainerLink = styled.div`
  display: flex;
  align-items: flex-start;
  align-items: center;
  gap: 40px;
  transform: translateX(-50%);
  text-decoration: none;
`

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-family: Inter;
  font-size: 20px;
  color: #FFFEEF;
  font-weight: 600;
  &:hover {
  text-decoration: none;
  }
`

export const NavContainer = styled.nav`
  display: flex;
  justify-content: end;
  padding: 8px;
   gap: 40px; 
  flex: 1;
  flex-grow: 1;
  
`

export const HeaderLogoContainer = styled.div`
  margin-left: -80px;
  width: 80px;
  cursor: pointer;
`

export const HeaderLogo = styled.img`
  width: 100px;
  height: 100%;
  object-fit: contain;
`

HeaderLogo.defaultProps = { src: LogoH }



export const Main = styled.main`
  display: flex;
  flex: 1;
  padding: 20px;
  box-sizing: border-box; 
`

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  padding: 30px 70px;
  width: 100%;
  height: fit-content;
  justify-content: space-between;
  color: #373E3A;
`

export const FooterContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1280px; 
  margin: 0 auto;
`

export const FooterNavContainer = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 24px;
`


export const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 14px;
  color: #373e3a;  
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  &:hover {
    text-decoration: underline;
  }
`

export const UserName = styled.div`
  font-size: 24px;
`

export const AccountContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

export const StyledButton = styled.div`
  /* margin-left: auto; 
  margin-right: -100px; */
  width: 216px;
   right: 0;
`

export const FooterContent = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  `

  export const FooterLeftLink = styled(StyledLink)`
  color: #373e3a;
  font-size: 14px;
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-right: 10px;
`
export const FooterText = styled.p`
  font-size: 14px;
  color: #373e3a;
  display: inline-block;
`
export const Copyright = styled.div`
  color: #373E3A;
  font-family: "DM Sans";
  font-size: 14px;
  font-weight: 500;
`

export const CopyrightText = styled.p`
  font-size: 14px;
  color: #373e3a;
`

export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 80px 40px 80px;
  width: 660px;
  height: 280px;
  max-width: 80%;
  border: 2px solid rgba(2, 88, 41, 1);
  background-color: rgba(255, 254, 239, 1);
  text-align: center;
`

export const ModalTextWrapper = styled.div`
  width: 444px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: left;
  gap: 36px;
`

export const ArrowIcon = styled.span`
  margin-left: 10px;
`

export const ModalText = styled.p`
  font-family: "Inter";
  font-weight: 600;
  font-size: 24px;
  color: rgba(55, 62, 58, 1);
`
