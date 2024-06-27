import { FAQs } from "assets"
import styled from "@emotion/styled"
import { Link } from "react-router-dom"
import Icon6 from "assets/open_icon.svg"

export const HomePageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  width: 100%;
  gap: 20px;
  box-sizing: border-box;
  @media (max-width: 768px) {
    padding: 20px;
  }
`

export const Container1 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  margin-top: -20px;
  padding-left: 10px;
  padding-bottom: 100px;
  box-sizing: border-box;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding-bottom: 60px;
  }
`

export const Container2 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1400px;
  margin-top: -50px;
  padding-bottom: 120px;
  position: relative;
  box-sizing: border-box;
  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 0;
  }
`

export const Image2 = styled.img`
  max-width: 35%;
  height: auto;
  object-fit: contain;
  margin-left: 8px;
  z-index: 0;
  @media (max-width: 768px) {
    width: 100%;
  }
`

export const OverlayContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
  & > *:first-of-type {
    margin-left: 220px;
  }
  & > * + * {
    margin-left: -40px;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    position: static;
    & > *:first-of-type {
      margin-left: 0;
    }
    & > * + * {
      margin-left: 0;
      margin-top: 20px;
    }
  }
`

export const Square = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  width: 100%;
  max-width: 548px;
  height: auto;
  padding: 25px 40px;
  margin-top: 212px;
  margin-left: 16px;
  box-sizing: border-box;
  background: #fafafa;
  box-shadow: 4px 4px 10px 0px rgba(55, 62, 58, 0.2);
  backdrop-filter: blur(5px);
  @media (max-width: 768px) {
    margin-top: 20px;
    margin-left: 0;
    padding: 20px;
  }
`

export const RectangleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 172px;
  padding-left: 30px;
  width: 100%;
  @media (max-width: 768px) {
    margin-top: 20px;
    position: static;
    & > *:first-of-type {
      margin-top: 0;
    }
    & > * + * {
      margin-top: 20px;
    }
  }
`

export const Rectangle = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 368px;
  height: 54px;
  margin-top: 19px;
  margin-left: 54px;
  padding: 4px;
  gap: 0px;
  box-sizing: border-box;
  background: #fafafa;
  box-shadow: 4px 4px 10px 0px rgba(55, 62, 58, 0.2);
  backdrop-filter: blur(5px);
  @media (max-width: 768px) {
    margin-left: 0;
  }
`

export const TextColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  position: relative;
`

export const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
  font-family: "DM Sans";
  font-size: 18px;
  font-style: normal;
  color: #373e3a;
  margin: 10px;
`

export const Container3 = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  margin-top: 24px;
  max-width: 1400px;
  width: 100%;
  padding: 2px;
  box-sizing: border-box;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`

export const Image1 = styled.img`
  max-width: 40%;
  height: auto;
  object-fit: contain;
  margin-top: -30px;
  position: relative;
  left: 30px;
  @media (max-width: 768px) {
    width: 100%;
  }
`

export const Image3 = styled.img`
  width: 360px;
  height: auto;
  margin: 6px; 
  @media (max-width: 1200px) {
    width: 300px;
  }
  @media (max-width: 900px) {
    width: 200px;
  }
  @media (max-width: 600px) {
    width: 100%;
  }
`

export const ImageLogo = styled.img`
  width: 100px;
  height: auto;
  object-fit: contain;
`

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`

export const StyledH1Container1 = styled.h1`
  display: flex;
  font-family: Inter;
  font-size: 36px;
  font-weight: 700;
  color: #373e3a;
  margin-top: -50px;
  max-width: 500px;
  width: 100%;
  word-wrap: break-word;
  overflow: hidden;
`

export const StyledH2Container2 = styled.h2`
  font-size: 24px;
  font-family: Inter;
  color: #373e3a;
  font-weight: 600;
  margin-top: -220px;
  margin-right: 80px;
  max-width: 500px;
  width: 100%;
  word-wrap: break-word;
  overflow: hidden;
  z-index: 1;
  @media (max-width: 768px) {
    margin-top: 20px;
  }
`

export const StyledPContainer1 = styled.p`
  display: flex;
  justify-content: space-between;
  color: #373e3a;
  font-family: "DM Sans";
  font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
  max-width: 500px;
  width: 100%;
  word-wrap: break-word;
  overflow: hidden;
`

export const StyledH3 = styled.h2`
  text-align: center;
  font-family: Inter;
  font-size: 28px;
  font-weight: 600;
  color: #373e3a;
  margin-top: 80px;
  @media (max-width: 768px) {
    margin-top: 100px;
  }
`

export const StyledPContainer4 = styled.div`
  display: flex;
  justify-content: space-between;
  color: #373e3a;
  text-align: left;
  font-family: Inter;
  font-size: 24px;
  font-weight: 600;
  margin-top: 50px;
  max-width: 1272px;
  width: 100%;
  word-wrap: break-word;
  overflow: hidden;
`

export const StyledFAQHeading = styled.h1`
  display: flex;
  color: #373e3a;
  font-family: Inter;
  margin-top: 50px;
  font-size: 24px;
  font-weight: 600;
  line-height: normal;
`

export const StyledFAQSubHeading = styled.h3`
  display: flex;
  color: #373e3a;
  margin-bottom: -30px;
  font-family: Inter;
  font-size: 18px;
  font-weight: 450;
  line-height: normal;
`

export const StyledPContainer5 = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 18px;
  margin-top: 20px;
  max-width: 700px;
  width: 100%;
  word-wrap: break-word;
  overflow: hidden;
  position: relative;
`

export const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${FAQs});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  z-index: -1;
`

export const StyledH5 = styled.h2`
  color: #373e3a;
  font-family: Inter;
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  margin-top: 80px;
`

export const StyledP5 = styled.h3`
  color: #373e3a;
  font-family: "DM Sans";
  font-size: 18px;
  font-weight: 400;
  text-align: center;
`

export const StyledLink = styled(Link)`
  font-size: 18px;
  color: #ba2d00;
  font-weight: 600;
  text-decoration: none;
  margin-left: 5px;
  &:hover {
    text-decoration: underline;
  }
`

export const StyledP = styled.p`
  display: flex;
  text-align: left;
  font-family: "DM Sans", sans-serif;
  font-size: 18px;
  color: #373e3a;
  max-width: 700px;
  margin-top: 15px;
  position: relative;
  padding: 30px;
  border-bottom: 2px solid green;
  color: #373e3a;
  z-index: 2;
`

export const Icon6Styled = styled.img`
  width: 32px;
  height: auto;
  position: relative;
  top: -36px;
  margin-left: 2px;
`

export const StyledSpan = styled.span`
  color: #ba2d00;
  position: absolute;
  left: 0;
  font-family: "Merriweather", serif;
  font-size: 16px;
  font-weight: 600;
  font-feature-settings: "lnum";
  border-bottom: 2px solid green;
`

export const ButtonControl = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-left: 20px;
  margin-top: 10px;
  margin-bottom: 50px;
  width: 220px;
`

export const Icon = styled.img`
  width: 36px;
  height: auto;
`
export const StyledEmail = styled.p`
  color: #ba2d00;
  font-family: "DM Sans";
  font-size: 16px;
  font-weight: 700;
`
