import styled from "@emotion/styled"
import ReactMarkdown from "react-markdown"

export const PotWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
  flex: 1;
`
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1100px;
  height: 60px;
`
export const ButtonControl = styled.div`
  width: 220px;
`

export const PotContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
  width: 1100px;
  /* height: 2094px; */
`

export const StyledP = styled.p`
  color: #38221d;
  font-family: Inter;
  font-size: 24px;
  font-weight: 600;
  text-align: left;
`
export const ImageContainer = styled.img`
  width: 100%;
  height: 625px;
`

export const DayContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 50px;
`

export const StyledH3 = styled.h1`
  color: #38221d;
  font-family: Inter;
  font-size: 32px;
  font-weight: 900;
  text-align: center;
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
  padding: 69px 96px;
  width: 863px;
  height: 362px;
  border: 2px solid rgba(2, 88, 41, 1);
`

export const TextModal = styled.p`
  font-family: "Inter";
  font-weight: 600;
  font-size: 24px;
  color: rgba(55, 62, 58, 1);
`
