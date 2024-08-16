import styled from "@emotion/styled"

export const SpinnerComponent = styled.div`
position: fixed;
top: 45vw;
  border: 0.3vw solid rgba(0, 0, 0, 0.1);
  border-left-color: rgba(2, 88, 41, 1);
  border-radius: 50%;
  width: 5vw;
  height: 5vw;
  animation: spin 1s linear infinite;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 5000;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`
