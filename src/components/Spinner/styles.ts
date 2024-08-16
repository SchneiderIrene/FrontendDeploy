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
  border: 0.5vw solid rgba(0, 0, 0, 0.1);
  border-left-color: rgba(2, 88, 41, 1);
  border-bottom-color: rgba(2, 88, 41, 1);
  border-radius: 50%;
  width: 7.5vw;
  height: 7.5vw;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  @media (min-width: 481px) and (max-width: 768px) {
    width: 10vw;
    height: 10vw;
    border: 1vw solid rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 480px) {
    width: 15vw;
    height: 15vw;
    border: 1vw solid rgba(0, 0, 0, 0.1);
  }
`
