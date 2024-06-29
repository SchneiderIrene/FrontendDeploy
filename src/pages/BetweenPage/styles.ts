import styled from "@emotion/styled"

export const BetweenPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
`
export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  gap: 44px;
  width: 548px;
  height: 223px;
  @media (max-width: 480px) {
    width: 274px;
    height: 111.5px;
    gap: 22px;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    width: 411px;
    height: 167.25px;
    gap: 33px;
  }
`

export const MessageSuccessRegister = styled.h1`
  font-size: 32px;
  @media (max-width: 480px) {
    font-size: 16px;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 24px;
  }
`

export const MessageErrorRegisterConfirm = styled.h1`
  font-size: 32px;
  color: rgba(186, 45, 0, 1);
  @media (max-width: 480px) {
    font-size: 16px;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 24px;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  @media (max-width: 480px) {
    gap: 10px;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    gap: 15px;
  }
`

export const TitleByButton = styled.h2`
  font-size: 24px;
  font-weight: normal;
  @media (max-width: 480px) {
    font-size: 12px;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 18px;
  }
`

export const Button = styled.button`
  color: aliceblue;
  font-size: 20px;
  background-color: rgba(186, 45, 0, 1);
  border: none;
  cursor: pointer;
  width: 100%;
  height: 58px;
  border-radius: 4px;
  @media (max-width: 480px) {
    font-size: 10px;
    height: 29px;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 15px;
    height: 43.5px;
  }
`
