import styled from "@emotion/styled"

export const GoBackButtonComponent = styled.button`
  position: absolute;
  width: 93px;
  height: 26px;
  outline: none;
  top: 152px;
  left: 82px;
  display: flex;
  align-items: center;
  background: none;
  border: none;
  background-color: none;
  color: rgba(55, 62, 58, 1);
  font-size: 20px;
  font-family: "DM Sans";
  font-weight: 500;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 70px;
    height: 20px;
    top: 160px;
    left: 60px;
    font-size: 16px;
  }

  @media (max-width: 480px) {
    width: 46px;
    height: 13px;
    top: 140px;
    left: 40px;
    font-size: 14px;
  }
`
