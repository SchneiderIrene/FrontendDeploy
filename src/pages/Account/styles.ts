import styled from "@emotion/styled"
export const AccountWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 125px;
  gap: 65px;
  flex: 1;
  @media (max-width: 480px) {
    padding-top: 30px;
    justify-content: start;
    gap: 32.5px;
  }
  /* @media (min-width: 481px) and (max-width: 768px) {
    padding-top: 93.75px;
    gap: 48.75px;
  } */
`

export const AccountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 147px;
  @media (max-width: 480px) {
    gap: 73.5px;
    flex-direction: column;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    gap: 110.25px;
    flex-direction: column;
  }
`

export const Title = styled.h3`
  font-family: "Inter";
  font-weight: 600;
  font-size: 32px;
  color: rgba(55, 62, 58, 1);
  @media (max-width: 480px) {
    font-size: 16px;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 24px;
  }
`

export const DeleteLogOutContainer = styled.div`
  width: 480px;
  display: flex;
  flex-direction: column;
  gap: 80px;
  justify-content: center;
  @media (max-width: 480px) {
    width: 240px;
    gap: 40px;
  }
  /* @media (min-width: 481px) and (max-width: 768px) {
    width: 360px;
    gap: 60px;
  } */
`

export const TextDeleteLogOut = styled.p`
  color: rgba(55, 62, 58, 1);
  font-size: 18px;
  font-family: "DM Sans";
  font-weight: 500px;
  @media (max-width: 480px) {
    font-size: 9px;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 13.5px;
  }
`

export const DeleteLogOutBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 12px;
  align-items: center;
  @media (max-width: 480px) {
    gap: 6px;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    gap: 9px;
  }
`

export const PasswortChangeContainer = styled.div`
  width: 480px;
  height: 479px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-around;
  gap: 24px;
  @media (max-width: 480px) {
    width: 240px;
    height: 239.5px;
    gap: 12px;
  }
  /* @media (min-width: 481px) and (max-width: 768px) {
    width: 360px;
    height: 359.25px;
    gap: 18px;
  } */
`

export const TitleInformation = styled.p`
  color: rgba(55, 62, 58, 1);
  font-size: 18px;
  font-family: "DM Sans";
  font-weight: 500px;
  @media (max-width: 480px) {
    font-size: 9px;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 13.5px;
  }
`

export const InputBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-around;
  gap: 20px;
  width: 100%;
  @media (max-width: 480px) {
    gap: 10px;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    gap: 15px;
  }
`

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const ModalWrapper = styled.div`
  background: white;
  padding: 20px;
  border: 1px solid #ccc;
  z-index: 1000;
  @media (max-width: 480px) {
    padding: 10px;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    padding: 15px;
  }
`

export const InputDesabled = styled.input`
  width: 100%;
  height: 60px;
  background-color: rgba(242, 242, 242, 1);
  border: 1px solid rgba(55, 62, 58, 0.4);
  padding: 17px 32px;
  font-size: 20px;
  color: rgba(55, 62, 58, 1);
  font-family: "DM Sans";
  font-weight: 500;
  @media (max-width: 480px) {
    height: 30px;
    padding: 8.5px 16px;
    font-size: 10px;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    height: 45px;
    padding: 12.75px 24px;
    font-size: 15px;
  }
`

export const LabelByInputDesable = styled.label`
  color: rgba(2, 88, 41, 1);
  font-size: 18px;
  font-family: "DM Sans";
  font-weight: 500;
  @media (max-width: 480px) {
    font-size: 9px;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 13.5px;
  }
`

export const ButtonPasswordModalBox = styled.div`
  width: 100%;
  padding-top: 36px;
  @media (max-width: 480px) {
    padding-top: 18px;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    padding-top: 27px;
  }
`

export const ModalContainerPassword = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  display: flex;
  gap: 35px;
  padding: 69px 96px;
  width: 672px;
  height: 592px;
  border: 2px solid rgba(2, 88, 41, 1);
  background-color: rgba(255, 254, 239, 1);
  @media (max-width: 768px) {
    gap: 3.54vw;
    padding: 7vw 5vw;
    width: 80vw;
    height: 65vw;
  }
  /* @media (min-width: 481px) and (max-width: 768px) {
    gap: 26.25px;
    padding: 51.75px 72px;
    width: 504px;
    height: 444px;
  } */
`

export const TitleContainerPasswordChangeModal = styled.div`
  width: 403px;
  height: 97px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 12px;
  @media (max-width: 768px) {
    width: 41.66vw;
    height: 10vw;
    gap: 1.25vw;
  }
  /* @media (min-width: 481px) and (max-width: 768px) {
    width: 302.25px;
    height: 72.75px;
    gap: 9px;
  } */
`

export const TextPasswordChangeModal = styled.p`
  color: rgba(55, 62, 58, 1);
  font-size: 18px;
  font-family: "DM Sans";
  font-weight: 500;
  @media (max-width: 768px) {
    font-size: 2.28vw;
   width: 100%;
    min-width: 57.14vw
  }
  /* @media (min-width: 481px) and (max-width: 768px) {
    font-size: 13.5px;
  } */
`

export const ModalContainerDeleteLogOut = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  display: flex;
  background-color: rgba(255, 254, 239, 1);
  padding: 69px 96px;
  width: 863px;
  height: 362px;
  border: 2px solid rgba(2, 88, 41, 1);
  @media (max-width: 768px) {
    padding: 7px 10vw;
    width: 62.5vw;
    height: 41.66vw;
  }
  /* @media (min-width: 481px) and (max-width: 768px) {
    padding: 51.75px 72px;
    width: 647.25px;
    height: 271.5px;
  } */
`

export const TextModal = styled.p`
  font-family: "Inter";
  font-weight: 600;
  font-size: 24px;
  color: rgba(55, 62, 58, 1);
  @media (max-width: 768px) {
    font-size: 2.5vw;
  }
  /* @media (min-width: 481px) and (max-width: 768px) {
    font-size: 18px;
  } */
`

export const ButtonBoxModal = styled.div`
  width: 480px;
  
  @media (max-width: 768px) {
    width: 100%;

  }
  /* @media (min-width: 481px) and (max-width: 768px) {
    width: 360px;
  } */
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 480px;
  height: 202px;
  @media (max-width: 768px) {
    gap: 1.04vw;
    min-width: 50vw;
    width: 100%;
  }
  /* @media (min-width: 481px) and (max-width: 768px) {
    gap: 7.5px;
    width: 360px;
    height: 151.5px;
  } */
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
