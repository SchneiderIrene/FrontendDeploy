import styled from "@emotion/styled"
import { Link, NavLink } from "react-router-dom"
import ReactMarkdown from "react-markdown"

interface PotCardProps {
  activ: boolean
}

export const MyPotsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding: 0 20px;
`

export const PotsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 420px;
  gap: 36px;
  @media (max-width: 480px) {
    height: 210px;
    gap: 18px;
    flex-direction: column;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    height: 315px;
    gap: 27px;
    flex-direction: column;
  }
`

export const PotCard = styled.div<PotCardProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: rgba(242, 242, 242, 1);
  width: 300px;
  height: 312px;
  box-shadow: 4px 10px 4px rgba(55, 62, 58, 0.2);
  padding: 40px;
  background-color: rgba(255, 240, 212, 1);
  cursor: pointer;
  filter: ${({ activ }) => (activ ? "none" : "grayscale(100%)")};
  @media (max-width: 480px) {
    height: 150px;
    width: 200px;
    padding: 20px;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    height: 250px;
    width: 300px;
    padding: 30px;

  }
`
export const PotImage = styled.img`
  position: relative;
  width: 148px;
  height: 208px;

  @media (max-width: 480px) {
    width: 60px; 
    height: 100px; 
  }
  @media (min-width: 481px) and (max-width: 768px) {
   width: 120px; 
   height: 180px;
  }
`

export const LinkTopf = styled(Link)`
  text-decoration: none;
  color: rgba(56, 34, 29, 1);
`

export const PotTitle = styled.h3`
  position: relative;
  font-family: "Inter";
  font-weight: 600;
  font-size: 36px;
  color: rgba(56, 34, 29, 1);
  @media (max-width: 480px) {
    font-size: 18px;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 27px;
  }
`



export const StyledLink = styled(NavLink)``

export const ButtonControl = styled.div`
  position: relative;
  filter: grayscale(100%);
  width: 80%;
  position: relative;
  height: 48px;
  :hover {
    transform: scale(1.1);
  }
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

  @media (max-width: 480px) {
    padding: 20px 40px 20px 40px;
    max-width: 100%;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    padding: 20px 40px 20px 40px;
    max-width: 100%;
  }
`

export const ModalTextWrapper = styled.div`
  width: 444px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: left;
  gap: 36px;

  @media (max-width: 480px) {
    width: 222px;
    gap: 18px;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    width: 333px;
    gap: 27px;

  }
`

export const ArrowIcon = styled.span`
  margin-left: 10px;
`

export const ModalText = styled.p`
  font-family: "Inter";
  font-weight: 600;
  font-size: 24px;
  color: rgba(55, 62, 58, 1);

  @media (max-width: 480px) {
    font-size: 12px;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 18px;

  }
`

export const AdminButtonControl = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
`

export const AdminPotContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 100%;
  gap: 40px;
  min-height: 1100px;
  @media (max-width: 480px) {
    min-height: 550px;
    gap: 20px;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    min-height: 825px;
    gap: 30px;
  }
`

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 10px;
`

export const AdminContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
`

export const ImgPotAdmin = styled.img`
  width: 100%;
  height: auto;
`

export const TitleContent = styled.h2`
  font-family: "Inter";
  font-weight: 900;
  font-size: 32px;
  color: rgba(55, 62, 58, 1);
  @media (max-width: 480px) {
    font-size: 16px;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 24px;
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
  @media (min-width: 481px) and (max-width: 768px) {
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
