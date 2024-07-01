import styled from "@emotion/styled"
import { Link } from "react-router-dom"

export const LegalInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;  
`
export const LegalInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  max-width: 1400px;
  @media (max-width: 480px) {
    gap: 10px;
    padding: 20px;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    gap: 15px;
    padding: 30px;
  }
`

export const StyledP = styled.h3`
  text-align: left;
  font-size: 18px;
  color: #373e3a;
  font-family: "DM Sans";
  margin-top: 10px;
  @media (max-width: 480px) {
    font-size: 9px;
    margin-top: 5px;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 13.5px;
    margin-top: 7.5px;
  }
`

export const StyledH4 = styled.h3`
  text-align: center;
  font-size: 22px;
  margin-top: 30px;
  font-weight: bold;
  color: #373e3a;
  font-family: "DM Sans";
  @media (max-width: 480px) {
    font-size: 11px;
    margin-top: 15px;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 16.5px;
    margin-top: 22.5px;
  }
`

export const StyledH5 = styled.h3`
  text-align: center;
  font-size: 18px;
  color: #373e3a;
  font-family: "DM Sans";
  @media (max-width: 480px) {
    font-size: 9px;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 13.5px;
  }
`

export const StyledLink = styled(Link)`
  font-size: 18px;
  font-family: "DM Sans";
  color: #ba2d00;
  margin: 0 5px;
  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 480px) {
    font-size: 9px;
    margin: 0 2.5px;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 13.5px;
    margin: 0 3.75px;
  }
`
