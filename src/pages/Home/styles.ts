import { FAQs } from "assets"
import styled from "@emotion/styled"
import { Link } from "react-router-dom"


export const HomePageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.08vw;
  width: 100%;
  gap: 1.04vw;
`

export const Container1 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 72.92vw;
  /* margin: 0 auto; */
  margin-top: -1.04vw;
  padding-left: 0.52vw;
  padding-bottom: 5.2vw;
  box-sizing: border-box;
  flex-wrap: wrap;
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    padding-bottom: 3.12vw;
    margin-top: 6.6vw
  }
`
export const StyledH1Container1 = styled.h1`
  display: flex;
  font-family: Inter;
  font-size: 1.875vw;
  font-weight: 700;
  color: #373e3a;
  margin-top: -2.6vw;
  max-width: 26vw;
  width: 100%;
  word-wrap: break-word;
  overflow: hidden;
  @media (max-width: 480px) {
    font-size: 20px;
    margin-top: 0;
    max-width: 600px;
    text-align: center;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    /* font-size: 22px; */
    margin-top: 0;
  }
`
export const StyledPContainer1 = styled.p`
  display: flex;
  justify-content: space-between;
  color: #373e3a;
  font-family: "DM Sans";
  font-size: 0.937vw;
  font-weight: 400;
  margin-top: 1.04vw;
  max-width: 26.04vw;
  width: 100%;
  word-wrap: break-word;
  overflow: hidden;
  @media (max-width: 480px) {
    font-size: 10px;
    text-align: center;
    max-width: 500px;
    line-height: 1.2;
  }
  /* @media (min-width: 481px) and (max-width: 768px) {
    font-size: 14px;
  } */
`

export const Image1 = styled.img`
  max-width: 40%;
  height: auto;
  object-fit: contain;
  margin-top: 0;
  position: relative;
  left: 1.56vw;
  @media (max-width: 480px) {
    width: 100%;
    max-width: 240px;
  }
`
export const Container2 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 72.92vw;
  margin-top: -2.6vw;
  padding-bottom: 6.25vw;
  position: relative;
  box-sizing: border-box;
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    margin-top: 0;
  }
`

export const Image2 = styled.img`
  max-width: 35%;
  height: auto;
  object-fit: contain;
  margin-left: 0.416vw;
  z-index: 0;
  @media (max-width: 768px) {
    width: 100%;
    max-width: 240px;
  }
`

export const StyledH2Container2 = styled.h2`
  font-size: 1.25vw;
  font-family: Inter;
  color: #373e3a;
  font-weight: 600;
  margin-top: -11.458vw;
  margin-right: 4.16vw;
  max-width: 26.04vw;
  width: 100%;
  word-wrap: break-word;
  overflow: hidden;
  z-index: 1;
  @media (max-width: 480px) {
    max-width: 500px;
    text-align: center;
    font-size: 12px;
    margin-top: 14px;
    margin-right: 0;
    padding: 10px 0;
  }
  /* @media (min-width: 481px) and (max-width: 768px) {
    font-size: 18px;
    margin-top: 10px;
    margin-right: 0;
    padding: 10px 0;
  } */
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
    margin-left: 11.46vw;
  }
  & > * + * {
    margin-left: -2.08vw;
  }
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: static;
    & > *:first-of-type {
      margin-left: 0;
      gap: 0.52vw;
    }
    & > * + * {
      margin-left: 0;
      margin-top: 1.04vw;
    }
  }
`

export const Square = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 0.42vw;
  width: 100%;
  max-width: 28.54vw;
  height: auto;
  padding: 1.03vw 2.08vw;
  margin-top: 11.04vw;
  margin-left: 0.83vw;
  box-sizing: border-box;
  background: #fafafa;
  box-shadow: 0.2vw 0.2vw 0.52vw 0vw rgba(55, 62, 58, 0.2);
  backdrop-filter: blur(0.26vw);
  @media (max-width: 480px) {
    margin-top: 0;
    margin-left: 0;
    padding: 10px;
    margin-bottom: 20px;
  }
`

export const RectangleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 8.958vw;
  padding-left: 1.56vw;
  width: 100%;
 
  @media (max-width: 480px) {
    position: static;
    gap: 5px;
    margin: 0;
    padding: 0px;
    width: 200px;
    & > *:first-of-type {
      margin-top: 0;
    }
    /* & > * + * {
      margin-top: 20px;
    } */
  }
`

export const Rectangle = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 19.166vw;
  height: 2.81vw;
  margin-top: 0.989vw;
  margin-left: 2.81vw;
  padding: 0.2vw;
  gap: 0vw;
  box-sizing: border-box;
  background: #fafafa;
  box-shadow: 0.2vw 0.2vw 0.52vw 0vw rgba(55, 62, 58, 0.2);
  backdrop-filter: blur(0.26vw);
  @media (max-width: 480px) {
    margin: 0;
    height: 20px;
    max-width: 200px;
  }
`

export const TextColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.04vw;
  position: relative;
  
  @media (max-width: 480px) {
   margin-top: 0;
  }
`

export const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
  font-family: "DM Sans";
  font-size: 0.937vw;
  font-style: normal;
  color: #373e3a;
  margin: 0.52vw;

  @media (max-width: 480px) {
    font-size: 5px;
  }
  /* @media (min-width: 481px) and (max-width: 768px) {
    font-size: 14px;
  } */
`

export const Container3 = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.625vw;
  margin-top: 1.25vw;
  max-width: 72.916vw;
  width: 100%;
  padding: 0.1vw;
  box-sizing: border-box;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`

export const Image3 = styled.img`
  width: 18.75vw;
  height: auto;
  margin: 0.31vw;
  /* @media (max-width: 1200px) {
    width: 300px;
  }
  @media (max-width: 900px) {
    width: 200px;
  } */
  @media (max-width: 600px) {
    width: 100%;
  }
`

export const ImageLogo = styled.img`
  width: 5.2vw;
  height: auto;
  object-fit: contain;
  /* @media (max-width: 480px) {
    width: 50px;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    width: 70px;
  } */
`

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2.6vw;
  /* @media (max-width: 480px) {
    margin-top: 20px;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    margin-top: 30px;
  } */
`






export const StyledH3 = styled.h2`
  text-align: center;
  font-family: Inter;
  font-size: 1.458vw;
  font-weight: 600;
  color: #373e3a;
  margin-top: 4.166vw;
  @media (max-width: 480px) {
    font-size: 12px;
    margin-top: 0px;
  }
  /* @media (min-width: 481px) and (max-width: 768px) {
    font-size: 20px;
    margin-top: 0px;
  } */
`

export const StyledPContainer4 = styled.div`
  display: flex;
  justify-content: space-between;
  color: #373e3a;
  text-align: left;
  font-family: Inter;
  font-size: 1.25vw;
  font-weight: 600;
  margin-top: 2.6vw;
  max-width: 66.25vw;
  width: 100%;
  word-wrap: break-word;
  overflow: hidden;
  padding: 0 3.125vw;
  @media (max-width: 480px) {
    font-size: 10px;
    flex-direction: column;
    align-items: center;
    gap: 1.04vw;
    max-width: 300px;
    text-align: center;
  }
  /* @media (min-width: 481px) and (max-width: 768px) {
    font-size: 16px;
    padding: 0 45px;
  } */
`

export const StyledFAQHeading = styled.h1`
  display: flex;
  color: #373e3a;
  font-family: Inter;
  margin-top: 2.6vw;
  font-size: 1.25vw;
  font-weight: 600;
  line-height: normal;
  /* @media (max-width: 480px) {
    font-size: 16px;
    margin-top: 30px;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 20px;
    margin-top: 30px;
  } */
`

export const StyledFAQSubHeading = styled.h3`
  display: flex;
  color: #373e3a;
  margin-bottom: -1.56vw;
  font-family: Inter;
  font-size: 0.937vw;
  font-weight: 450;
  line-height: normal;
  /* @media (max-width: 480px) {
    font-size: 10px;
    margin-bottom: -5px;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 14px;
    margin-bottom: -5px;
  } */
`

export const StyledPContainer5 = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 0.937vw;
  margin-top: 1.04vw;
  max-width: 36.458vw;
  width: 100%;
  word-wrap: break-word;
  overflow: hidden;
  position: relative;
  @media (max-width: 480px) {
    font-size: 10px;
    margin-top: 10px;
    max-width: 220px;
  }
  /* @media (min-width: 481px) and (max-width: 768px) {
    font-size: 14px;
    margin-top: 10px;
  } */
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
  font-size: 1.25vw;
  font-weight: 600;
  text-align: center;
  margin-top: 4.166vw;
  /* @media (max-width: 480px) {
    font-size: 14px;
    margin-top: 60px;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 18px;
    margin-top: 60px;
  } */
`

export const StyledP5 = styled.h3`
  color: #373e3a;
  font-family: "DM Sans";
  font-size: 0.937vw;
  font-weight: 400;
  text-align: center;
  /* @media (max-width: 480px) {
    font-size: 10px;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 14px;
  } */
`

export const StyledLink = styled(Link)`
  font-size: 0.937vw;
  color: #ba2d00;
  font-weight: 600;
  text-decoration: none;
  margin-left: 0.26vw;
  &:hover {
    text-decoration: underline;
  }
  /* @media (max-width: 480px) {
    font-size: 10px;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 14px;
  } */
`

export const StyledP = styled.p`
  display: flex;
  text-align: left;
  font-family: "DM Sans", sans-serif;
  font-size: 0.937vw;
  color: #373e3a;
  max-width: 36.458vw;
  margin-top: 0.78vw;
  position: relative;
  padding: 1.56vw;
  border-bottom: 0.1vw solid green;
  color: #373e3a;
  z-index: 2;
  @media (max-width: 480px) {
   width: 100%;
   max-width: 800px;
   line-height: 1.5;
   
   
   
  }
  /* @media (min-width: 481px) and (max-width: 768px) {
    font-size: 14px;
    padding: 15px;
  } */
`

export const Icon6Styled = styled.img`
  width: 1.458vw;
  height: auto;
  position: relative;
  top: -1.875vw;
  margin-left: 0.1vw;
  /* @media (max-width: 480px) {
    width: 14px;
    top: -18px;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    width: 18px;
    top: -24px;
  } */
`

export const StyledSpan = styled.span`
  color: #ba2d00;
  position: absolute;
  left: 0;
  font-family: "Merriweather", serif;
  font-size: 0.83vw;
  font-weight: 600;
  font-feature-settings: "lnum";
  border-bottom: 0.1vw solid green;
  /* @media (max-width: 480px) {
    font-size: 10px;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 14px;
  } */
`
export const ButtonControl = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-left: 1.04vw;
  margin-top: 0.52vw;
  margin-bottom: 2.6vw;
  width: 11.458vw;
  @media (max-width: 481px) {
    width: 100%;
  } 
`

export const InfoContainer = styled.div``

export const Icon = styled.img`
  width: 1.875vw;
  height: auto;

  /* @media (max-width: 480px) {
    width: 16px;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    width: 22px;
  } */
`

export const StyledEmail = styled.p`
  color: #ba2d00;
  font-family: "DM Sans";
  font-size: 0.83vw;
  font-weight: 700;
  /* @media (max-width: 480px) {
    font-size: 10px;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 12px;
  } */
`
