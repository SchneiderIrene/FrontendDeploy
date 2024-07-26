import styled from "@emotion/styled"
import ReactMarkdown from "react-markdown"

export const PotWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.6vw;
  flex: 1;
  padding: 0 20px;
  @media (max-width: 480px) {
  }
  @media (min-width: 481px) and (max-width: 768px) {
    padding-left: 0;
    padding-right: 0;
    padding-top: 5vw;
  }
`
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 3.125vw;
  @media (max-width: 768px) {
    /* padding-top: 0; */
    gap: 1vw;
    height: 13vw;
    flex-direction: column;
    justify-content: left;
   
  }
  @media (min-width: 769px) and (max-width: 1020px) {
    margin-top: 4vw;
  }
`

export const ButtonControl = styled.div`
  width: 220px;
  @media (max-width: 768px) {
    width: 100%;
  }
  /* @media (min-width: 481px) and (max-width: 768px) {
    width: 100%;
  } */
`

export const PotContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 2vw;
  width: 100%;
  @media (max-width: 768px) {
    gap: 4vw;
  }
  /* @media (min-width: 481px) and (max-width: 768px) {
    gap: 30px;
  } */
`

export const StyledP = styled.p`
  color: #38221d;
  font-family: Inter;
  font-size: 1.25vw;
  font-weight: 600;
  text-align: left;
  @media (max-width: 480px) {
    font-size: 2vw;
    line-height: 1.2;
    padding: 0px;
    width: 100%;
    text-align: left;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 2vw;
    text-align: left;
    line-height: 1.2;
    padding: 0px;
    width: 100%;
  }
`

export const ImageContainer = styled.img`
  width: 100%;
  height: auto;
`

export const DayContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 50px;
  @media (max-width: 480px) {
    gap: 25px;
  }
  @media (min-width: 481px) and (max-width: 1020px) {
    gap: 35px;
  }
`

export const StyledH3 = styled.h1`
  color: #38221d;
  font-family: Inter;
  font-size: 32px;
  font-weight: 900;
  text-align: center;
  @media (max-width: 480px) {
    font-size: 16px;
  }
  @media (min-width: 481px) and (max-width: 1020px) {
    font-size: 3vw;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 35px;
  font-family: "Inter";
  color: rgba(55, 62, 58, 1);
  line-height: 3;
  @media (max-width: 480px) {
    gap: 17.5px;
  }
  @media (min-width: 481px) and (max-width: 1020px) {
    gap: 26.25px;
  }
`

export const StyledReactMarkdown = styled(ReactMarkdown)`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 28px;
    font-weight: 900;
    text-align: center;
  }
  p {
    font-size: 24px;
    font-weight: 600;
    padding: 0px;
    text-align: 0px;
    line-height: 1.8;
    margin-bottom: 24px;
  }
  ul,
  ol,
  dl {
    font-size: 24px;
    font-weight: 600;
    padding-left: 0px;
    text-align: left;
  }
  li {
    margin: 0px;
    padding: 0px;
  }
  strong {
    font-style: normal;
  }
  @media (max-width: 480px) {
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-size: 14px;
    }
    p {
      font-size: 12px;
      margin-bottom: 12px;
    }
    ul,
    ol,
    dl {
      font-size: 12px;
    }
  }
  @media (min-width: 481px) and (max-width: 1020px) {
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-size: 18px;
    }
    p {
      font-size: 16px;
      margin-bottom: 18px;
    }
    ul,
    ol,
    dl {
      font-size: 16px;
    }
  }
`

export const ModalContainerDeletePot = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  display: flex;
  background-color: rgba(255, 254, 239, 1);
  padding: 3.59vw 5vw;
  width: 44.94vw;
  height: 18.85vw;
  border: 0.1vw solid rgba(2, 88, 41, 1);
  @media (max-width: 768px) {
    padding: 7.08vw 10vw;
    width: 62.5vw;
    height: 35vw;
  }
  /* @media (min-width: 481px) and (max-width: 768px) {
    padding: 51.75px 72px;
    width: 647.25px;
    height: 271.5px;
  } */
`

export const TextModal = styled.p`
  font-family: "Inter";
  font-weight: 600;
  font-size: 1.25vw;
  color: rgba(55, 62, 58, 1);
  @media (max-width: 768px) {
    font-size: 2.5vw;
  }
  /* @media (min-width: 481px) and (max-width: 768px) {
    font-size: 18px;
  } */
`

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  @media (max-width: 480px) {
    font-size: 1rem;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 1.25rem;
  }
`
