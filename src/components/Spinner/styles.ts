import styled from "@emotion/styled"

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5); /* Полупрозрачный черный фон */
  z-index: 4999; /* Оверлей позади спиннера */
`

export const SpinnerContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5000;
`

export const SpinnerComponent = styled.div`
  border: 0.7vw solid rgba(0, 0, 0, 0.1);
  border-left-color: rgba(2, 88, 41, 1);
  border-radius: 50%;
  width: 7.5vw;
  height: 7.5vw;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  @media (max-width: 480px) {
    width: 20vw;
    height: 20vw;
    border: 1.8vw solid rgba(0, 0, 0, 0.1);
  }
`
