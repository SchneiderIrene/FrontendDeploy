import styled from "@emotion/styled"

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`

export const ModalContent = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 600px;
  padding: 20px;
  box-sizing: border-box;
  z-index: 1001;
  @media (max-width: 480px) {
    max-width: 70%;
    padding: 30px 40px;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    max-width: 80%;
  }
`

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  @media (max-width: 480px) {
    font-size: 1rem;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 1.25rem;
  }
`
