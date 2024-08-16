import styled from "@emotion/styled"

interface ButtonComponentProps {
  disabled: boolean
  color: "red" | "grey" | "green" | undefined
  bgColorIsRed: boolean
  border: boolean
}

const getColor = (color: "red" | "grey" | "green" | undefined) => {
  if (color === "red") {
    return "rgba(186, 45, 0, 1)"
  }
  if (color === "green") {
    return "rgba(0, 113, 50, 1)"
  }
  if (color === "grey") {
    return "rgba(255, 254, 239, 1)"
  } else {
    return "rgba(0,0,0,0.1)"
  }
}

export const ButtonComponent = styled.button<ButtonComponentProps>`
  width: 100%;
  height: 3.12vw;
  outline: none;
  border: none;
  /* padding: 10px; */
  background: ${({ bgColorIsRed, disabled }) =>
    disabled
      ? "rgba(55, 62, 58, 0.3)"
      : bgColorIsRed
        ? "rgba(186, 45, 0, 1)"
        : "rgba(255, 254, 239, 1)"};
  color: ${({ color }) => getColor(color)};
  border: ${({ border }) =>
    border ? "4px solid rgba(55, 62, 58, 0.5)" : "none"};
  font-size: 1.04vw;
  font-family: "DM Sans";
  font-weight: 900;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 480px) {
    font-size: 11px;
    height: 10vw;
  }
  @media (min-width: 481px) and (max-width: 1400px) {
    font-size: 15px;
    height: 7.5vw;

  /* &:focus {
    outline: none;
  } */
}
/* @media (min-width: 769px) and (max-width: 1020px) {
    font-size: 15px;
    height: 45px;
} */
`
