import styled from "@emotion/styled"

export const InputComponentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  width: 100%;
  height: fit-content;
`

export const InputLabel = styled.label`
  font-size: 18px;
  font-family: "DM Sans";
  font-weight: 500;
  color: rgba(55, 62, 58, 0.8);
  appearance: none;

  :-ms-reveal {
    display: none;
  }

  @media (max-width: 480px) {
    font-size: 9px;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 13.5px;
  }
`

export const InputComponent = styled.input`
  width: 100%;
  height: 60px;
  outline: none;
  background-color: rgba(255, 254, 239, 0);
  border: 1px solid rgba(55, 62, 58, 0.4);
  font-size: 20px;
  color: rgba(55, 62, 58, 1);
  padding: 17px 32px;

  &::placeholder {
    color: rgba(55, 62, 58, 0.4);
  }
  :valid {
    background-color: rgba(255, 254, 239, 0);
  }
  :focus {
    background-color: rgba(255, 254, 239, 0);
  }

  @media (max-width: 480px) {
    height: 30px;
    font-size: 10px;
    padding: 8.5px 16px;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    height: 45px;
    font-size: 15px;
    padding: 12.75px 24px;
  }
`

export const ErrorMessage = styled.p`
  color: red;
  font-size: 18px;
  height: 18px;

  @media (max-width: 480px) {
    font-size: 9px;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 13.5px;
  }
`

export const EyeIcon = styled.div`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;

  @media (max-width: 480px) {
    width: 12px;
    height: 12px;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    width: 18px;
    height: 18px;
  }
`
