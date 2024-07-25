import styled from "@emotion/styled"

export const SpinnerComponent = styled.div`
position: fixed;
top: 550px;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: rgba(2, 88, 41, 1);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;
  z-index: 5000;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`
