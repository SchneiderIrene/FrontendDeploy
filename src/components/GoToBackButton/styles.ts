import styled from "@emotion/styled"

export const GoBackButtonComponent = styled.button`
  position: absolute;
  width: 7vw;
  height: 1.35vw;
  outline: none;
  top: 3vw;
  left: 5.5vw;
  display: flex;
  align-items: center;
  background: none;
  border: none;
  background-color: none;
  color: rgba(55, 62, 58, 1);
  font-size: 1.04vw;
  font-family: "DM Sans";
  font-weight: 500;
  cursor: pointer;

  /* @media (max-width: 768px) {
    width: 70px;
    height: 20px;
    top: 160px;
    left: 60px;
    font-size: 16px;
  } */

  @media (max-width: 480px) {
    font-size: 10px;
    width: 100px;
    left: 2vw;
  }
`
