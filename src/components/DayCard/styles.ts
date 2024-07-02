import styled from "@emotion/styled"

export const CardContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border: 4px solid green;
`

export const ImageContainer = styled.img`
  width: 100%;
  height: auto;
  border: 3px solid black;
`

export const StyledH1 = styled.h1`
  color: #38221d;
  font-family: Inter;
  font-size: 28px;
  font-weight: 600;
  text-align: center;
  border: 3px solid blue;
  @media (max-width: 480px) {
    font-size: 14px;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 21px;
  }
`

export const StyledH2 = styled.h2`
  color: #38221d;
  font-family: Inter;
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  border: 3px solid pink;
  @media (max-width: 480px) {
    font-size: 12px;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 18px;
  }
`

export const StyledP = styled.p`
  color: #38221d;
  font-family: Inter;
  font-size: 20px;
  font-weight: 600;
  text-align: left;
  @media (max-width: 480px) {
    font-size: 10px;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 15px;
  }
`

export const Container2 = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border: 3px solid red;
`

export const Container3 = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border: 3px solid red;
`
